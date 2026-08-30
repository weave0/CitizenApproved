import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const policyPath = path.join(root, 'src/lib/policy/current-policy.ts')
const maxAgeDays = Number(process.env.POLICY_MAX_AGE_DAYS || '21')

function fail(message) {
  console.error(`FRESHNESS ERROR: ${message}`)
  process.exitCode = 1
}

function walk(dir) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    return /\.(ts|tsx|js|jsx)$/.test(entry.name) ? [full] : []
  })
}

const policy = fs.readFileSync(policyPath, 'utf8')
const reviewMatch = policy.match(/LAST_POLICY_REVIEW\s*=\s*['"](\d{4}-\d{2}-\d{2})['"]/)

if (!reviewMatch) {
  fail('Could not find LAST_POLICY_REVIEW in src/lib/policy/current-policy.ts')
} else {
  const reviewDate = new Date(`${reviewMatch[1]}T00:00:00Z`)
  const now = new Date()
  const ageDays = Math.floor((Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()) - reviewDate.getTime()) / 86_400_000)

  if (Number.isNaN(reviewDate.getTime())) {
    fail(`Invalid LAST_POLICY_REVIEW date: ${reviewMatch[1]}`)
  } else if (ageDays < 0) {
    fail(`LAST_POLICY_REVIEW is in the future: ${reviewMatch[1]}`)
  } else if (ageDays > maxAgeDays) {
    fail(`Policy review is ${ageDays} days old; maximum allowed age is ${maxAgeDays} days. Re-verify volatile policy facts and advance LAST_POLICY_REVIEW.`)
  } else {
    console.log(`Policy review age: ${ageDays} day(s) — within ${maxAgeDays}-day limit.`)
  }
}

const publicFiles = [
  ...walk(path.join(root, 'src/app')),
  ...walk(path.join(root, 'src/components')),
]

const forbidden = [
  { re: /100\+\s+languages/i, reason: 'unverified 100+ languages product claim' },
  { re: /all\s+128\s+official\s+questions/i, reason: 'misleading civics-question claim' },
  { re: /Eligibility\s+Wizard/i, reason: 'retired pseudo-eligibility tool label' },
  { re: /Cost\s+Calculator/i, reason: 'retired fee-calculator label' },
  { re: /Timeline\s+Calculator/i, reason: 'retired timeline-calculator label' },
  { re: /8\s*[-–]\s*14\s+months/i, reason: 'stale hard-coded processing-time range' },
  { re: /fastest\s+(field\s+)?office/i, reason: 'unsupported field-office ranking' },
  { re: /slowest\s+(field\s+)?office/i, reason: 'unsupported field-office ranking' },
  { re: /\$1,?170\b/, reason: 'obsolete general N-600/N-600K fee' },
  { re: /comprehensive,\s+legally\s+accurate\s+guide\s+to\s+all\s+pathways/i, reason: 'overbroad legacy positioning' },
  { re: /Someone\s+just\s+(checked|viewed|joined|shared|explored)/i, reason: 'fabricated social-proof activity' },
  { re: />Just\s+now</i, reason: 'fabricated real-time social-proof timestamp' },
]

for (const file of publicFiles) {
  const text = fs.readFileSync(file, 'utf8')
  for (const rule of forbidden) {
    if (rule.re.test(text)) {
      fail(`${path.relative(root, file)} contains ${rule.reason}`)
    }
  }
}

if (!process.exitCode) {
  console.log(`Freshness and credibility guard passed across ${publicFiles.length} public source files.`)
}

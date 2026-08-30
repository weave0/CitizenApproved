import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const resourcePath = path.join(root, 'src/lib/resources/official-resources.ts')
const text = fs.readFileSync(resourcePath, 'utf8')
let failed = false

function fail(message) {
  failed = true
  console.error(`RESOURCE ERROR: ${message}`)
}

if (!/LAST_RESOURCE_REVIEW\s*=\s*LAST_POLICY_REVIEW/.test(text)) {
  fail('Official-resource review date must stay tied to LAST_POLICY_REVIEW.')
}

const urls = [...text.matchAll(/url:\s*['"](https:\/\/[^'"]+)['"]/g)].map((match) => match[1])

if (urls.length < 15) {
  fail(`Expected a substantial official resource registry; found only ${urls.length} URLs.`)
}

const seen = new Set()
for (const value of urls) {
  let url
  try {
    url = new URL(value)
  } catch {
    fail(`Invalid URL: ${value}`)
    continue
  }

  if (url.protocol !== 'https:') fail(`Official resource must use HTTPS: ${value}`)

  const host = url.hostname.toLowerCase()
  if (!(host === 'usa.gov' || host.endsWith('.gov'))) {
    fail(`Official resource is not on a U.S. government .gov host: ${value}`)
  }

  if (url.username || url.password) fail(`Official resource URL must not contain credentials: ${value}`)
  if (url.hash) fail(`Official resource URL should link to the canonical page, not a fragment: ${value}`)

  const trackingKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid']
  for (const key of trackingKeys) {
    if (url.searchParams.has(key)) fail(`Official resource URL contains tracking parameter ${key}: ${value}`)
  }

  const canonical = `${host}${url.pathname}${url.search}`.replace(/\/$/, '')
  if (seen.has(canonical)) fail(`Duplicate official resource URL: ${value}`)
  seen.add(canonical)
}

const agencies = [...text.matchAll(/agency:\s*['"]([^'"]+)['"]/g)].map((match) => match[1])
if (agencies.some((agency) => /sponsor|partner|affiliate/i.test(agency))) {
  fail('Official-resource agencies must be government authorities, not sponsors, partners, or affiliates.')
}

if (failed) process.exit(1)
console.log(`Official-resource registry passed: ${urls.length} HTTPS government resources validated.`)

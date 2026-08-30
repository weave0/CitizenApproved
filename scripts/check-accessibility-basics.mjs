import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
let failed = false

function fail(message) {
  failed = true
  console.error(`ACCESSIBILITY ERROR: ${message}`)
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8')
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    return /\.(tsx|jsx)$/.test(entry.name) ? [full] : []
  })
}

const layout = read('src/app/layout.tsx')
const navbar = read('src/components/Navbar.tsx')
const accessibilityCss = read('src/app/accessibility.css')
const sitemap = read('src/app/sitemap.ts')

const requiredLayoutPatterns = [
  [/<html\b[^>]*\blang=["']en["'][^>]*>/, 'root document must declare its language'],
  [/href=["']#page-content["']/, 'root layout must provide a skip-to-content link'],
]

for (const [pattern, message] of requiredLayoutPatterns) {
  if (!pattern.test(layout)) fail(message)
}

if (!/id=["']page-content["'][^>]*tabIndex=\{-1\}/.test(navbar)) {
  fail('primary navigation must provide a focusable skip-link target immediately after navigation')
}

if (/id=["']page-content["'][^>]*aria-hidden/.test(navbar)) {
  fail('skip-link target must not be hidden from assistive technology')
}

const requiredCssPatterns = [
  [/focus-visible/, 'visible keyboard focus styles are required'],
  [/prefers-reduced-motion:\s*reduce/, 'reduced-motion support is required'],
  [/forced-colors:\s*active/, 'forced-colors support is required'],
  [/@media\s+print/, 'print/offline readability support is required'],
]

for (const [pattern, message] of requiredCssPatterns) {
  if (!pattern.test(accessibilityCss)) fail(message)
}

for (const route of ['/help', '/accessibility', '/glossary']) {
  if (!sitemap.includes(`'${route}'`)) fail(`${route} must remain discoverable in the sitemap`)
}

const sourceFiles = [
  ...walk(path.join(root, 'src/app')),
  ...walk(path.join(root, 'src/components')),
]

const harmfulPatterns = [
  [/user-scalable\s*=\s*no/i, 'must not disable browser zoom'],
  [/maximum-scale\s*=\s*1/i, 'must not cap browser zoom at 1'],
  [/\bautoplay\b/i, 'autoplay media is not allowed in the public research UI'],
  [/focus:outline-none/i, 'focus outlines must not be removed without a visible replacement'],
  [/outline-none/i, 'focus outlines must not be removed without a visible replacement'],
]

for (const file of sourceFiles) {
  const text = fs.readFileSync(file, 'utf8')
  const relative = path.relative(root, file)

  for (const [pattern, reason] of harmfulPatterns) {
    if (pattern.test(text)) fail(`${relative}: ${reason}`)
  }

  const imageTags = text.match(/<Image\b[\s\S]*?>/g) || []
  for (const tag of imageTags) {
    if (!/\balt\s*=/.test(tag)) fail(`${relative}: Next/Image is missing alt text`)
  }

  const rawImageTags = text.match(/<img\b[\s\S]*?>/g) || []
  for (const tag of rawImageTags) {
    if (!/\balt\s*=/.test(tag)) fail(`${relative}: img is missing alt text`)
  }
}

if (failed) process.exit(1)

console.log(`Accessibility baseline passed across ${sourceFiles.length} React source files.`)

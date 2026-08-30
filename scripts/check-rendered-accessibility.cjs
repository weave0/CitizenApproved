const fs = require('node:fs')
const http = require('node:http')
const path = require('node:path')
const pa11y = require('pa11y')

const root = process.cwd()
const outDir = path.join(root, 'out')
const reportDir = path.join(root, 'artifacts', 'accessibility')
const reportPath = path.join(reportDir, 'rendered-a11y.json')
const reflowRunner = path.join(root, 'scripts', 'pa11y-runner-reflow.cjs')
const host = '127.0.0.1'
const port = 4173

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
}

function resolveStaticPath(requestUrl) {
  const pathname = decodeURIComponent(new URL(requestUrl, `http://${host}:${port}`).pathname)
  const cleanPath = pathname.replace(/^\/+/, '')
  const candidates = []

  if (!cleanPath) {
    candidates.push(path.join(outDir, 'index.html'))
  } else if (path.extname(cleanPath)) {
    candidates.push(path.join(outDir, cleanPath))
  } else {
    candidates.push(path.join(outDir, `${cleanPath}.html`))
    candidates.push(path.join(outDir, cleanPath, 'index.html'))
  }

  for (const candidate of candidates) {
    const normalized = path.normalize(candidate)
    if (!normalized.startsWith(outDir)) continue
    if (fs.existsSync(normalized) && fs.statSync(normalized).isFile()) return normalized
  }

  return null
}

function startServer() {
  const server = http.createServer((req, res) => {
    const filePath = resolveStaticPath(req.url || '/')
    if (!filePath) {
      res.statusCode = 404
      res.end('Not found')
      return
    }

    res.statusCode = 200
    res.setHeader('Content-Type', mimeTypes[path.extname(filePath)] || 'application/octet-stream')
    res.setHeader('Cache-Control', 'no-store')
    fs.createReadStream(filePath).pipe(res)
  })

  return new Promise((resolve, reject) => {
    server.once('error', reject)
    server.listen(port, host, () => resolve(server))
  })
}

function routesFromSitemap() {
  const sitemapPath = path.join(outDir, 'sitemap.xml')
  if (!fs.existsSync(sitemapPath)) throw new Error('out/sitemap.xml is missing; run the static build first')

  const xml = fs.readFileSync(sitemapPath, 'utf8')
  const locValues = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim())
  const routes = locValues.map((value) => {
    try {
      const url = new URL(value)
      return `${url.pathname}${url.search}` || '/'
    } catch {
      throw new Error(`Invalid sitemap URL: ${value}`)
    }
  })

  return [...new Set(routes)].filter((route) => !route.endsWith('.xml') && !route.endsWith('.txt'))
}

function summarizeIssues(issues) {
  return issues.map((issue) => ({
    code: issue.code,
    type: issue.type,
    message: issue.message,
    selector: issue.selector || issue.runnerExtras?.selector || null,
    context: issue.context || issue.runnerExtras?.context || null,
  }))
}

async function loadPuppeteer() {
  const pa11yPackage = require.resolve('pa11y/package.json')
  const packageDir = path.dirname(pa11yPackage)
  const puppeteerPath = require.resolve('puppeteer', { paths: [packageDir] })
  return require(puppeteerPath)
}

async function main() {
  if (!fs.existsSync(outDir)) throw new Error('out/ is missing; run npm run build:static first')

  const server = await startServer()
  const routes = routesFromSitemap()
  const puppeteer = await loadPuppeteer()
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const report = {
    generatedAt: new Date().toISOString(),
    standard: 'WCAG 2.2 AA engineering target; automated checks are not a conformance claim',
    routeCount: routes.length,
    desktopViewport: { width: 1280, height: 1024 },
    narrowViewport: { width: 320, height: 800 },
    routes: [],
  }

  let failed = false

  try {
    for (const route of routes) {
      const url = `http://${host}:${port}${route}`
      process.stdout.write(`A11Y ${route} ... `)

      const desktop = await pa11y(url, {
        browser,
        runners: ['axe'],
        standard: 'WCAG2AA',
        timeout: 60000,
        wait: 100,
        viewport: { width: 1280, height: 1024 },
      })

      const narrow = await pa11y(url, {
        browser,
        runners: [reflowRunner],
        timeout: 60000,
        wait: 100,
        viewport: { width: 320, height: 800, isMobile: true },
      })

      const desktopErrors = desktop.issues.filter((issue) => issue.type === 'error')
      const narrowErrors = narrow.issues.filter((issue) => issue.type === 'error')
      const routeFailed = desktopErrors.length > 0 || narrowErrors.length > 0
      if (routeFailed) failed = true

      report.routes.push({
        route,
        desktop: summarizeIssues(desktopErrors),
        narrow: summarizeIssues(narrowErrors),
      })

      console.log(routeFailed ? `FAIL (${desktopErrors.length + narrowErrors.length})` : 'pass')
    }
  } finally {
    await browser.close()
    await new Promise((resolve) => server.close(resolve))
  }

  fs.mkdirSync(reportDir, { recursive: true })
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`)

  if (failed) {
    console.error(`Rendered accessibility audit failed. Full report: ${reportPath}`)
    for (const result of report.routes) {
      const issues = [...result.desktop, ...result.narrow]
      for (const issue of issues.slice(0, 5)) {
        console.error(`- ${result.route} [${issue.code}] ${issue.message}${issue.selector ? ` (${issue.selector})` : ''}`)
      }
    }
    process.exit(1)
  }

  console.log(`Rendered accessibility audit passed across ${routes.length} public HTML routes.`)
  console.log(`Report written to ${reportPath}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})

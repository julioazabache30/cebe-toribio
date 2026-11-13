import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')
const publicDir = path.join(rootDir, 'public')

const mimeTypes = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
}

function fileToBase64DataUrl(filePath) {
  if (!fs.existsSync(filePath)) return null
  const ext = path.extname(filePath).toLowerCase()
  const mime = mimeTypes[ext] || 'application/octet-stream'
  const data = fs.readFileSync(filePath)
  return `data:${mime};base64,${data.toString('base64')}`
}

function exportSingleHtml() {
  const indexPath = path.join(distDir, 'index.html')
  if (!fs.existsSync(indexPath)) {
    throw new Error('dist/index.html does not exist. Run "npm run build" first.')
  }

  let html = fs.readFileSync(indexPath, 'utf-8')

  // 1. Inline CSS files
  const cssRegex = /<link\s+rel="stylesheet"\s+crossorigin\s+href="\/assets\/([^"]+)">/g
  html = html.replace(cssRegex, (match, cssFileName) => {
    const cssPath = path.join(distDir, 'assets', cssFileName)
    if (fs.existsSync(cssPath)) {
      const cssContent = fs.readFileSync(cssPath, 'utf-8')
      return `<style>\n${cssContent}\n</style>`
    }
    return match
  })

  // 2. Inline JS modules
  const jsRegex = /<script\s+type="module"\s+crossorigin\s+src="\/assets\/([^"]+)"><\/script>/g
  html = html.replace(jsRegex, (match, jsFileName) => {
    const jsPath = path.join(distDir, 'assets', jsFileName)
    if (fs.existsSync(jsPath)) {
      let jsContent = fs.readFileSync(jsPath, 'utf-8')
      // Ensure closing script tags inside JS don't break HTML parsing
      jsContent = jsContent.replace(/<\/script>/gi, '<\\/script>')
      return `<script type="module">\n${jsContent}\n</script>`
    }
    return match
  })

  // 3. Inline images as Base64 Data URLs so the HTML is 100% self-contained
  const imageReplacements = [
    { url: '/favicon.svg', file: path.join(publicDir, 'favicon.svg') },
    { url: '/images/news/uct-agreement.jpg', file: path.join(publicDir, 'images', 'news', 'uct-agreement.jpg') },
    { url: '/images/news/admission-2027.jpg', file: path.join(publicDir, 'images', 'news', 'admission-2027.jpg') },
    { url: '/images/news/pilgrims-faith-day.jpg', file: path.join(publicDir, 'images', 'news', 'pilgrims-faith-day.jpg') },
  ]

  for (const { url, file } of imageReplacements) {
    const dataUrl = fileToBase64DataUrl(file)
    if (dataUrl) {
      html = html.replaceAll(url, dataUrl)
    }
  }

  // 4. Output paths
  const rootOutput = path.join(rootDir, 'cebe-santo-toribio.html')
  const distOutput = path.join(distDir, 'cebe-santo-toribio.html')

  fs.writeFileSync(rootOutput, html, 'utf-8')
  fs.writeFileSync(distOutput, html, 'utf-8')

  const stat = fs.statSync(rootOutput)
  const sizeMb = (stat.size / (1024 * 1024)).toFixed(2)
  console.log(`\n[SUCCESS] Exported self-contained HTML:`)
  console.log(` - ${rootOutput} (${sizeMb} MB)`)
  console.log(` - ${distOutput} (${sizeMb} MB)`)
}

exportSingleHtml()


/**
 * Author: Ria Gino
 * https://catscoffeescodes.com/
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { preview } from 'vite'
import { chromium } from 'playwright'

const ROUTES = ['/', '/cats', '/coffees', '/codes']
const OUT_DIR = join(import.meta.dirname, '..', 'dist')
const SHELL_HTML = readFileSync(join(OUT_DIR, 'index.html'), 'utf-8')

function outputPathFor(route) {
  return route === '/'
    ? join(OUT_DIR, 'index.html')
    : join(OUT_DIR, `${route.slice(1)}.html`)
}

function injectRenderedContent(shell, { title, description, rootHtml }) {
  return shell
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*("\s*\/>)/,
      `$1${description}$2`
    )
    .replace(
      '<div id="root"></div>',
      `<div id="root">${rootHtml}</div>`
    )
}

async function main() {
  const server = await preview({
    preview: { port: 4174, strictPort: false },
  })
  const baseUrl = server.resolvedUrls.local[0]

  const browser = await chromium.launch()
  const page = await browser.newPage()

  for (const route of ROUTES) {
    const url = new URL(route, baseUrl).toString()
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.waitForSelector('#root > *')

    const { title, description, rootHtml } = await page.evaluate(() => ({
      title: document.title,
      description:
        document.querySelector('meta[name="description"]')?.content ?? '',
      rootHtml: document.getElementById('root').innerHTML,
    }))

    const html = injectRenderedContent(SHELL_HTML, {
      title,
      description,
      rootHtml,
    })

    const outPath = outputPathFor(route)
    writeFileSync(outPath, html)
    console.log(`Prerendered ${route} -> ${outPath}`)
  }

  await browser.close()
  await server.close()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

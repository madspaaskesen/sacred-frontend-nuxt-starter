export default defineEventHandler((event) => {
  const host = 'https://sacred-ai.com'
  const staticPages = ['/', '/contact']

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages.map(p => `
      <url>
        <loc>${host}${p}</loc>
      </url>
    `).join('')}
  </urlset>`

  setResponseHeader(event, 'Content-Type', 'application/xml')
  return xml
})

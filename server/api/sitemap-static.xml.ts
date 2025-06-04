export default defineEventHandler((event) => {
  const staticPages = ['/pricing', '/faq', '/about', '/contact']

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages.map(p => `
      <url>
        <loc>https://sacred-ai.com${p}</loc>
      </url>
    `).join('')}
  </urlset>`

  setResponseHeader(event, 'Content-Type', 'application/xml')
  return xml
})

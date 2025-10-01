import type { APIRoute } from 'astro';

const pages = [
  { url: '', changefreq: 'weekly', priority: '1.0' },
  { url: 'acheter', changefreq: 'weekly', priority: '0.9' },
  { url: 'vendre', changefreq: 'weekly', priority: '0.9' },
  { url: 'estimation', changefreq: 'monthly', priority: '0.8' },
  { url: 'blog', changefreq: 'weekly', priority: '0.8' },
  { url: 'blog/marche-immobilier-voglans-2025', changefreq: 'monthly', priority: '0.6' },
  { url: 'blog/investir-voglans-savoie', changefreq: 'monthly', priority: '0.6' },
  { url: 'honoraires', changefreq: 'monthly', priority: '0.7' },
  { url: 'locaux-commerciaux', changefreq: 'weekly', priority: '0.8' },
  { url: 'cgv', changefreq: 'yearly', priority: '0.3' },
  { url: 'mentions-legales', changefreq: 'yearly', priority: '0.3' },
];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>https://agencevoglans.fr/${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};

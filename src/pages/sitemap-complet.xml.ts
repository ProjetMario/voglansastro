import type { APIRoute } from 'astro';

const LASTMOD = new Date().toISOString().split('T')[0];
const CHILD_SITEMAPS = [
  'https://agencevoglans.fr/sitemap-core.xml',
  'https://agencevoglans.fr/sitemap-estimation.xml',
  'https://agencevoglans.fr/sitemap-blog.xml'
];

const buildIndex = () => {
  const entries = CHILD_SITEMAPS.map(
    (loc) => `  <sitemap>
    <loc>${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
  </sitemap>`
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;
};

export const GET: APIRoute = async () => {
  return new Response(buildIndex(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};

import type { APIRoute } from 'astro';
import { COMMUNES } from '@/data/communes';

type UrlEntry = {
  loc: string;
  priority: string;
  changefreq: 'weekly' | 'monthly';
};

const LASTMOD = new Date().toISOString().split('T')[0];
const PRIORITY_COMMUNES = new Set([
  'chambery',
  'aix-les-bains',
  'voglans',
  'la-motte-servolex',
  'la-ravoire',
  'cognin',
  'jacob-bellecombette',
  'saint-alban-leysse',
  'le-bourget-du-lac',
  'viviers-du-lac',
  'mery',
  'gresy-sur-aix',
  'tresserve',
  'mouxy',
  'barberaz',
  'bassens',
  'sonnaz',
  'saint-baldoph',
  'drumettaz-clarafond',
  'montagnole'
]);

const estimationUrls: UrlEntry[] = COMMUNES.map((commune) => {
  const priority = PRIORITY_COMMUNES.has(commune.slug) ? '0.85' : '0.75';
  const changefreq: 'weekly' | 'monthly' = PRIORITY_COMMUNES.has(commune.slug)
    ? 'weekly'
    : 'monthly';
  return {
    loc: `https://agencevoglans.fr/estimation/${commune.slug}`,
    priority,
    changefreq
  };
});

const buildSitemap = (entries: UrlEntry[]) => {
  const urlset = entries
    .map(
      ({ loc, priority, changefreq }) => `  <url>
    <loc>${loc}</loc>
    <priority>${priority}</priority>
    <changefreq>${changefreq}</changefreq>
    <lastmod>${LASTMOD}</lastmod>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;
};

export const GET: APIRoute = async () => {
  return new Response(buildSitemap(estimationUrls), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};

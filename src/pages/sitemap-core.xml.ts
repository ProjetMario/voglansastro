import type { APIRoute } from 'astro';

type UrlEntry = {
  loc: string;
  priority: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
};

const LASTMOD = new Date().toISOString().split('T')[0];

const CORE_URLS: UrlEntry[] = [
  { loc: 'https://agencevoglans.fr/', priority: '1.0', changefreq: 'daily' },
  { loc: 'https://agencevoglans.fr/estimation', priority: '0.95', changefreq: 'weekly' },
  { loc: 'https://agencevoglans.fr/vendre', priority: '0.95', changefreq: 'weekly' },
  { loc: 'https://agencevoglans.fr/acheter', priority: '0.9', changefreq: 'weekly' },
  { loc: 'https://agencevoglans.fr/contact', priority: '0.9', changefreq: 'weekly' },
  { loc: 'https://agencevoglans.fr/a-propos', priority: '0.85', changefreq: 'monthly' },
  { loc: 'https://agencevoglans.fr/services', priority: '0.85', changefreq: 'monthly' },
  { loc: 'https://agencevoglans.fr/zone-intervention', priority: '0.85', changefreq: 'monthly' },
  { loc: 'https://agencevoglans.fr/blog', priority: '0.85', changefreq: 'daily' },
  { loc: 'https://agencevoglans.fr/investisseurs', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://agencevoglans.fr/honoraires', priority: '0.75', changefreq: 'monthly' },
  { loc: 'https://agencevoglans.fr/mentions-legales', priority: '0.6', changefreq: 'monthly' },
  { loc: 'https://agencevoglans.fr/confidentialite', priority: '0.6', changefreq: 'monthly' },
  { loc: 'https://agencevoglans.fr/rgpd', priority: '0.6', changefreq: 'monthly' },
  { loc: 'https://agencevoglans.fr/fonds-commerce-aix-les-bains', priority: '0.8', changefreq: 'weekly' },
  { loc: 'https://agencevoglans.fr/fonds-commerce-chambery', priority: '0.8', changefreq: 'weekly' },
  { loc: 'https://agencevoglans.fr/fonds-commerce-bourdeau', priority: '0.75', changefreq: 'weekly' },
  { loc: 'https://agencevoglans.fr/immeuble-rapport-chambery', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://agencevoglans.fr/immeuble-rapport-aix-les-bains', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://agencevoglans.fr/propriete-prestige-aix-les-bains', priority: '0.8', changefreq: 'monthly' },
  { loc: 'https://agencevoglans.fr/propriete-prestige-voglans', priority: '0.75', changefreq: 'monthly' },
  { loc: 'https://agencevoglans.fr/vendre-maison-chambery', priority: '0.9', changefreq: 'weekly' },
  { loc: 'https://agencevoglans.fr/vendre-maison-aix-les-bains', priority: '0.88', changefreq: 'weekly' },
  { loc: 'https://agencevoglans.fr/vendre-maison-voglans', priority: '0.88', changefreq: 'weekly' },
  { loc: 'https://agencevoglans.fr/vendre-maison-la-motte-servolex', priority: '0.86', changefreq: 'weekly' },
  { loc: 'https://agencevoglans.fr/vendre-maison-le-bourget-du-lac', priority: '0.86', changefreq: 'weekly' },
  { loc: 'https://agencevoglans.fr/vendre-garage-gresy-sur-aix', priority: '0.75', changefreq: 'monthly' },
  { loc: 'https://agencevoglans.fr/vendre-garage-la-motte-servolex', priority: '0.72', changefreq: 'monthly' },
  { loc: 'https://agencevoglans.fr/vendre-garage-voglans', priority: '0.72', changefreq: 'monthly' },
  { loc: 'https://agencevoglans.fr/vendre-terrain-chambery', priority: '0.78', changefreq: 'monthly' },
  { loc: 'https://agencevoglans.fr/vendre-terrain-aix-les-bains', priority: '0.78', changefreq: 'monthly' },
  { loc: 'https://agencevoglans.fr/vendre-terrain-le-bourget-du-lac', priority: '0.76', changefreq: 'monthly' },
  { loc: 'https://agencevoglans.fr/fonds-commerce-voglans', priority: '0.74', changefreq: 'monthly' }
];

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
  return new Response(buildSitemap(CORE_URLS), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};

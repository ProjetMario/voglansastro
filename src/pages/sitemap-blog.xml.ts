import type { APIRoute } from 'astro';
import { posts } from '@/data/posts.js';

type UrlEntry = {
  loc: string;
  priority: string;
  changefreq: 'weekly' | 'monthly';
};

const IMPORTANT_CATEGORIES = new Set([
  'Estimation',
  'Vente',
  'Marché immobilier',
  'Investissement',
  'Montagne'
]);

const MAX_URLS = 120;
const LASTMOD = new Date().toISOString().split('T')[0];

const normalizeLoc = (href: string) => {
  const base = 'https://agencevoglans.fr';
  const withSlash = href.endsWith('/') ? href : `${href}/`;
  return `${base}${withSlash}`;
};

const selectPosts = () => {
  const prioritized = posts.filter((post) => IMPORTANT_CATEGORIES.has(post.category));
  const secondary = posts.filter((post) => !IMPORTANT_CATEGORIES.has(post.category));
  const ordered = [...prioritized, ...secondary];
  return ordered.slice(0, MAX_URLS);
};

const entries: UrlEntry[] = selectPosts().map((post) => {
  const loc = normalizeLoc(post.href);
  const priority = IMPORTANT_CATEGORIES.has(post.category) ? '0.82' : '0.72';
  const changefreq: 'weekly' | 'monthly' = IMPORTANT_CATEGORIES.has(post.category)
    ? 'weekly'
    : 'monthly';
  return { loc, priority, changefreq };
});

const buildSitemap = (urls: UrlEntry[]) => {
  const urlset = urls
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
  return new Response(buildSitemap(entries), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};

#!/usr/bin/env python3
import os

# Charger les URLs
with open('complete-sitemap-urls.txt', 'r') as f:
    urls = [line.strip() for line in f if line.strip()]

# Créer le contenu du fichier
content = f'''import type {{ APIRoute }} from 'astro';

// Liste complète des URLs du sitemap - {len(urls)} URLs
const ALL_SITEMAP_URLS = [
'''

for url in urls:
    content += f'  "{url}",\n'

content += '''];

export const GET: APIRoute = async () => {
  // Générer le XML du sitemap
  const urlset = ALL_SITEMAP_URLS.map(url => {
    // Déterminer la priorité et la fréquence selon l'URL
    let priority = '0.5';
    let changefreq = 'monthly';

    if (url === 'https://agencevoglans.fr/') {
      priority = '1.0';
      changefreq = 'daily';
    } else if (url.endsWith('/estimation') || url.endsWith('/vendre') || url.endsWith('/acheter') || url.endsWith('/contact')) {
      priority = '0.95';
      changefreq = 'weekly';
    } else if (url === 'https://agencevoglans.fr/blog') {
      priority = '0.9';
      changefreq = 'daily';
    } else if (url.includes('/estimation/')) {
      priority = '0.85';
      changefreq = 'weekly';
    } else if (url.includes('/blog/') && (url.includes('vendre') || url.includes('estimation') || url.includes('prix'))) {
      priority = '0.8';
      changefreq = 'weekly';
    } else if (url.includes('/blog/') && (url.includes('marche') || url.includes('investir') || url.includes('acheter'))) {
      priority = '0.75';
      changefreq = 'monthly';
    } else if (url.includes('/blog/')) {
      priority = '0.7';
      changefreq = 'monthly';
    } else if (url.includes('fonds-commerce') || url.includes('immeuble-rapport') || url.includes('propriete-prestige')) {
      priority = '0.65';
      changefreq = 'weekly';
    }

    return `  <url>
    <loc>${url}</loc>
    <priority>${priority}</priority>
    <changefreq>${changefreq}</changefreq>
    <lastmod>2025-11-11</lastmod>
  </url>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlset}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600' // Cache 1 heure
    }
  });
};
'''

# Écrire le fichier
with open('src/pages/sitemap-complet.xml.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Fichier sitemap-complet.xml.ts mis à jour avec {len(urls)} URLs intégrées')

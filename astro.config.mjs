import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify/functions'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  output: 'hybrid',
  adapter: netlify(),
  site: 'https://agencevoglans.fr',
  trailingSlash: 'never', // Force URLs sans trailing slash (SEO)
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.includes('/admin/'),
      customPages: [
        'https://agencevoglans.fr/',
        'https://agencevoglans.fr/estimation',
        'https://agencevoglans.fr/vendre',
        'https://agencevoglans.fr/acheter',
        'https://agencevoglans.fr/contact',
        'https://agencevoglans.fr/blog',
      ],
      serialize(item) {
        // Homepage - priorité maximale
        if (item.url === 'https://agencevoglans.fr/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
          item.lastmod = new Date();
        }
        // Pages principales services - très haute priorité
        else if (item.url.endsWith('/estimation') ||
            item.url.endsWith('/vendre') ||
            item.url.endsWith('/acheter') ||
            item.url.endsWith('/contact')) {
          item.changefreq = 'weekly';
          item.priority = 0.95;
          item.lastmod = new Date();
        }
        // Page blog principale - haute priorité
        else if (item.url === 'https://agencevoglans.fr/blog' || 
                 item.url.endsWith('/blog/')) {
          item.changefreq = 'daily';
          item.priority = 0.9;
          item.lastmod = new Date();
        }
        // Pages estimation par ville - haute priorité (pages de conversion)
        else if (item.url.includes('/estimation/')) {
          item.changefreq = 'weekly';
          item.priority = 0.85;
          const weekAgo = new Date();
          weekAgo.setDate(weekAgo.getDate() - 7);
          item.lastmod = weekAgo;
        }
        // Articles blog catégorie Vente & Estimation - priorité haute (conversion)
        else if (item.url.includes('/blog/') && 
                (item.url.includes('vendre') || 
                 item.url.includes('estimation') ||
                 item.url.includes('prix'))) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
          const twoWeeksAgo = new Date();
          twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
          item.lastmod = twoWeeksAgo;
        }
        // Articles blog catégorie Marché & Investissement - priorité moyenne-haute
        else if (item.url.includes('/blog/') && 
                (item.url.includes('marche') || 
                 item.url.includes('investir') ||
                 item.url.includes('acheter'))) {
          item.changefreq = 'monthly';
          item.priority = 0.75;
          const monthAgo = new Date();
          monthAgo.setDate(monthAgo.getDate() - 30);
          item.lastmod = monthAgo;
        }
        // Articles blog mairies - priorité moyenne
        else if (item.url.includes('/blog/mairie')) {
          item.changefreq = 'monthly';
          item.priority = 0.6;
          const twoMonthsAgo = new Date();
          twoMonthsAgo.setDate(twoMonthsAgo.getDate() - 60);
          item.lastmod = twoMonthsAgo;
        }
        // Autres articles blog - priorité moyenne
        else if (item.url.includes('/blog/')) {
          item.changefreq = 'monthly';
          item.priority = 0.7;
          const monthAgo = new Date();
          monthAgo.setDate(monthAgo.getDate() - 30);
          item.lastmod = monthAgo;
        }
        // Pages spécialisées (fonds-commerce, immeuble-rapport, etc.)
        else if (item.url.includes('fonds-commerce') || 
                 item.url.includes('immeuble-rapport') ||
                 item.url.includes('propriete-prestige')) {
          item.changefreq = 'weekly';
          item.priority = 0.65;
          item.lastmod = new Date();
        }
        // Autres pages
        else {
          item.changefreq = 'monthly';
          item.priority = 0.5;
          item.lastmod = new Date();
        }
        return item;
      },
    }),
  ],
  redirects: {
    // Nettoyage URLs obsolètes et -old (fix 404)
    '/blog/investir-voglans-2025-old': '/blog/investir-voglans-2025',
    '/blog/vendre-maison-chambery-2025-old': '/blog/vendre-maison-chambery-2025',
    '/blog/estimation-bien-voglans': '/blog/marche-immobilier-voglans-2025',
    '/blog/quartiers-chambery': '/blog/installer-chambery-famille-ecoles-vie-locale-securite',
    '/blog/agence-digitale-fonctionnement': '/blog',
    '/savoie': '/zone-intervention',
    '/le-bourget-du-lac': '/estimation/le-bourget-du-lac',
    
    // Redirections 301 pour variantes d'URL sans tirets
    '/estimationchambery': '/estimation/chambery',
    '/estimationaixlesbains': '/estimation/aix-les-bains',
    '/estimationvoglans': '/estimation/voglans',
    '/estimationlaravoire': '/estimation/la-ravoire',
    '/estimationbarberaz': '/estimation/barberaz',
    '/estimationbassens': '/estimation/bassens',
    '/estimationcognin': '/estimation/cognin',
    '/estimationjacobellecombette': '/estimation/jacob-bellecombette',
    '/estimationsaintalbanleysse': '/estimation/saint-alban-leysse',
    '/estimationlamotteservolex': '/estimation/la-motte-servolex',
    '/estimationsonnaz': '/estimation/sonnaz',
    '/estimationchallesleseaux': '/estimation/challes-les-eaux',
    '/estimationsaintbaldoph': '/estimation/saint-baldoph',
    '/estimationvimines': '/estimation/vimines',
    '/estimationmontagnole': '/estimation/montagnole',
    '/estimationgresysuraix': '/estimation/gresy-sur-aix',
    '/estimationtresserve': '/estimation/tresserve',
    '/estimationmouxy': '/estimation/mouxy',
    '/estimationbrisonsaintinnocent': '/estimation/brison-saint-innocent',
    '/estimationdrumettazclarafond': '/estimation/drumettaz-clarafond',
    '/estimationlebourgetdulac': '/estimation/le-bourget-du-lac',
    '/estimationviviersdulac': '/estimation/viviers-du-lac',
    '/estimationmery': '/estimation/mery',
    '/estimationbourdeau': '/estimation/bourdeau',
    '/estimationlachapelledumontduchat': '/estimation/la-chapelle-du-mont-du-chat',
    '/estimationleviviers': '/estimation/le-viviers',

    // Redirections avec tirets alternatifs (format compact)
    '/estimation-chambery': '/estimation/chambery',
    '/estimation-aix-les-bains': '/estimation/aix-les-bains',
    '/estimation-voglans': '/estimation/voglans',
    '/estimation-la-ravoire': '/estimation/la-ravoire',
    '/estimation-barberaz': '/estimation/barberaz',
    '/estimation-bassens': '/estimation/bassens',
    '/estimation-cognin': '/estimation/cognin',
    '/estimation-jacob-bellecombette': '/estimation/jacob-bellecombette',
    '/estimation-saint-alban-leysse': '/estimation/saint-alban-leysse',
    '/estimation-la-motte-servolex': '/estimation/la-motte-servolex',
    '/estimation-sonnaz': '/estimation/sonnaz',
    '/estimation-challes-les-eaux': '/estimation/challes-les-eaux',
    '/estimation-saint-baldoph': '/estimation/saint-baldoph',
    '/estimation-vimines': '/estimation/vimines',
    '/estimation-montagnole': '/estimation/montagnole',
    '/estimation-gresy-sur-aix': '/estimation/gresy-sur-aix',
    '/estimation-tresserve': '/estimation/tresserve',
    '/estimation-mouxy': '/estimation/mouxy',
    '/estimation-brison-saint-innocent': '/estimation/brison-saint-innocent',
    '/estimation-drumettaz-clarafond': '/estimation/drumettaz-clarafond',
    '/estimation-le-bourget-du-lac': '/estimation/le-bourget-du-lac',
    '/estimation-viviers-du-lac': '/estimation/viviers-du-lac',
    '/estimation-mery': '/estimation/mery',
    '/estimation-bourdeau': '/estimation/bourdeau',
    '/estimation-la-chapelle-du-mont-du-chat': '/estimation/la-chapelle-du-mont-du-chat',
    '/estimation-le-viviers': '/estimation/le-viviers',
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
})

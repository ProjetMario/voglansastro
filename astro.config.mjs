import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify/functions'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  site: 'https://agencevoglans.fr',
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
      ],
      serialize(item) {
        // Pages principales - haute priorité
        if (item.url === 'https://agencevoglans.fr/' || 
            item.url.endsWith('/estimation') ||
            item.url.endsWith('/vendre') ||
            item.url.endsWith('/acheter')) {
          item.changefreq = 'daily';
          item.priority = 1.0;
        }
        // Pages villes - priorité moyenne-haute
        else if (item.url.includes('/estimation/')) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        }
        // Pages blog - priorité moyenne
        else if (item.url.includes('/blog/')) {
          item.changefreq = 'weekly';
          item.priority = 0.7;
        }
        // Pages spécialisées (fonds-commerce, immeuble-rapport, etc.)
        else if (item.url.includes('fonds-commerce') || 
                 item.url.includes('immeuble-rapport') ||
                 item.url.includes('propriete-prestige')) {
          item.changefreq = 'weekly';
          item.priority = 0.6;
        }
        // Autres pages
        else {
          item.changefreq = 'monthly';
          item.priority = 0.5;
        }
        item.lastmod = new Date();
        return item;
      },
    }),
  ],
  redirects: {
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

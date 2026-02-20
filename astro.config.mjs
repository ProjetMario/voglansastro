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
      filter: (page) => {
        // Exclure pages admin et alias
        if (page.includes('/admin/') || page === '/about' || page === '/achat') return false;
        
        // Exclure pages noindex (thin content générées en masse)
        const noindexPatterns = [
          /\/vendre-garage-/,
          /\/locaux-commerciaux-[a-z]/,  // Exclure locaux-commerciaux-ville mais pas /locaux-commerciaux
          /\/fonds-commerce-[a-z]/,       // Exclure fonds-commerce-ville mais pas /fonds-commerce
          /\/immeuble-rapport-/,
          /\/propriete-prestige-/,
          /\/vendre-terrain-/,
          /\/vendre-appartement-/,
          /\/vendre-maison-[a-z]/,        // Exclure vendre-maison-ville mais pas /vendre-maison
        ];
        
        for (const pattern of noindexPatterns) {
          if (pattern.test(page)) return false;
        }
        
        return true;
      },
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
        // Pages estimation par ville - TRÈS haute priorité (pages de conversion principales)
        else if (item.url.includes('/estimation/')) {
          item.changefreq = 'weekly';
          item.priority = 0.9;
          item.lastmod = new Date(); // Toujours récent pour forcer le recrawl
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

    // Canonicalisation pages alias (éviter pages avec redirection dans GSC)
    '/about': '/a-propos',
    '/achat': '/acheter',
    
    // Redirection page vente dupliquée vers vendre principale
    '/vente': '/vendre',
    
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
  },
  compressHTML: true,
  image: {
    // Optimisation automatique des images (WebP, AVIF)
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    domains: ['agencevoglans.fr'],
    remotePatterns: [{ protocol: 'https' }],
  },
  build: {
    format: 'file', // Génère /page.html au lieu de /page/index.html (fix redirection GSC)
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
})

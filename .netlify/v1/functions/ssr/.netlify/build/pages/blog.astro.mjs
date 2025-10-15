import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_9NFxWlB3.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_DJ8vM7Sp.mjs';
import { $ as $$HeroUltra, a as $$ButtonUltra, b as $$BadgeUltra } from '../chunks/ButtonUltra_CVw7_Hqz.mjs';
import { $ as $$CardUltra } from '../chunks/CardUltra_DVYpFYKa.mjs';
import { MapPin, Award, TrendingUp, Home, Calendar, Clock, ArrowRight, Search } from 'lucide-react';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://agencevoglans.fr");
const $$BlogPostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPostCard;
  const {
    title,
    description,
    href,
    date,
    readingTime,
    category,
    featured = false,
    author = "L'Agence de Voglans",
    image,
    tags = []
  } = Astro2.props;
  const categoryIcons = {
    "March\xE9 immobilier": Home,
    "Investissement": TrendingUp,
    "Conseils vente": Award,
    "Guide local": MapPin
  };
  const categoryColors = {
    "March\xE9 immobilier": "bg-blue-100 text-blue-800",
    "Investissement": "bg-green-100 text-green-800",
    "Conseils vente": "bg-orange-100 text-orange-800",
    "Guide local": "bg-purple-100 text-purple-800"
  };
  return renderTemplate`${renderComponent($$result, "CardUltra", $$CardUltra, { "class": `group h-full ${featured ? "featured-post ring-2 ring-primary/20" : ""}`, "data-astro-cid-3cb4glgu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="h-full flex flex-col justify-between" data-astro-cid-3cb4glgu> <header class="mb-6" data-astro-cid-3cb4glgu> <!-- Category Badge --> <div${addAttribute(`inline-flex items-center gap-2 ${categoryColors[category] || "bg-primary/10 text-primary"} px-3 py-1 rounded-full text-xs font-semibold mb-4`, "class")} data-astro-cid-3cb4glgu> ${categoryIcons[category] === Home && renderTemplate`${renderComponent($$result2, "Home", Home, { "className": "w-3 h-3", "data-astro-cid-3cb4glgu": true })}`} ${categoryIcons[category] === TrendingUp && renderTemplate`${renderComponent($$result2, "TrendingUp", TrendingUp, { "className": "w-3 h-3", "data-astro-cid-3cb4glgu": true })}`} ${categoryIcons[category] === Award && renderTemplate`${renderComponent($$result2, "Award", Award, { "className": "w-3 h-3", "data-astro-cid-3cb4glgu": true })}`} ${categoryIcons[category] === MapPin && renderTemplate`${renderComponent($$result2, "MapPin", MapPin, { "className": "w-3 h-3", "data-astro-cid-3cb4glgu": true })}`} ${category} </div> ${featured && renderTemplate`<div class="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white px-3 py-1 rounded-full text-xs font-bold mb-4" data-astro-cid-3cb4glgu> <span class="w-2 h-2 bg-white rounded-full animate-pulse" data-astro-cid-3cb4glgu></span>
Article à la une
</div>`} <div class="text-xs uppercase tracking-wide text-muted font-semibold mb-3 flex items-center gap-2" data-astro-cid-3cb4glgu> ${renderComponent($$result2, "Calendar", Calendar, { "className": "w-3 h-3", "data-astro-cid-3cb4glgu": true })} ${date} • ${author} </div> <h2 class="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 leading-tight" data-astro-cid-3cb4glgu> ${title} </h2> <p class="text-muted leading-relaxed" data-astro-cid-3cb4glgu>${description}</p> ${tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mt-4" data-astro-cid-3cb4glgu> ${tags.map((tag) => renderTemplate`<span class="inline-flex items-center gap-1 bg-primary/5 text-primary/80 px-2 py-1 rounded-md text-xs" data-astro-cid-3cb4glgu> <span data-astro-cid-3cb4glgu>#${tag}</span> </span>`)} </div>`} </header> <footer class="mt-6 flex items-center justify-between text-sm" data-astro-cid-3cb4glgu> <div class="flex items-center gap-2 text-muted" data-astro-cid-3cb4glgu> ${renderComponent($$result2, "Clock", Clock, { "className": "w-4 h-4", "data-astro-cid-3cb4glgu": true })} <span data-astro-cid-3cb4glgu>${readingTime} de lecture</span> </div> <a${addAttribute(href, "href")} class="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90 text-white px-4 py-2 rounded-xl font-semibold hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group/btn" data-astro-cid-3cb4glgu> <span data-astro-cid-3cb4glgu>Lire l'article</span> ${renderComponent($$result2, "ArrowRight", ArrowRight, { "className": "w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300", "data-astro-cid-3cb4glgu": true })} </a> </footer> </article> ` })} `;
}, "/Users/zazouino/Downloads/voglansastro-main/src/components/ui/BlogPostCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = [
    {
      title: "Le march\xE9 immobilier \xE0 Voglans en 2025",
      description: "Analyse compl\xE8te des tendances, prix et opportunit\xE9s d'investissement dans notre commune et en Savoie pour 2025.",
      href: "/blog/marche-immobilier-voglans-2025",
      date: "15 janvier 2025",
      readingTime: "8 min",
      category: "March\xE9 immobilier",
      featured: true,
      tags: ["march\xE9 2025", "prix immobilier", "Savoie"]
    },
    {
      title: "Investir \xE0 Voglans : les cl\xE9s du march\xE9 2025",
      description: "Analyse des prix, des rendements locatifs et des quartiers porteurs autour du lac du Bourget.",
      href: "/blog/investir-voglans-savoie",
      date: "18 septembre 2025",
      readingTime: "7 min",
      category: "Investissement",
      featured: false,
      tags: ["investissement", "rendement locatif", "lac du Bourget"]
    },
    {
      title: "Guide complet des quartiers de Voglans",
      description: "D\xE9couvrez tous les quartiers de Voglans : caract\xE9ristiques, prix immobiliers, ambiance et conseils pour choisir le bon secteur.",
      href: "/blog/quartiers-voglans-guide-complet",
      date: "10 f\xE9vrier 2025",
      readingTime: "6 min",
      category: "Guide local",
      featured: false,
      tags: ["quartiers", "guide local", "choix secteur"]
    },
    {
      title: "Comment pr\xE9parer la vente de votre maison en Savoie",
      description: "Checklist des d\xE9marches, diagnostics et am\xE9liorations pour maximiser votre prix de vente.",
      href: "/vente",
      date: "5 septembre 2025",
      readingTime: "5 min",
      category: "Conseils vente",
      featured: false,
      tags: ["vente maison", "diagnostics", "optimisation"]
    }
  ];
  const categoriesArray = [...new Set(posts.map((post) => post.category))];
  const stats = {
    totalArticles: posts.length,
    totalReadingTime: posts.reduce((total, post) => total + parseInt(post.readingTime), 0),
    categories: categoriesArray,
    categoriesCount: categoriesArray.length,
    featuredArticles: posts.filter((post) => post.featured).length
  };
  const title = "Blog Immobilier | L'Agence de Voglans";
  const description = "Conseils, analyses et tendances du march\xE9 immobilier de Voglans et de la Savoie.";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "HeroUltra", $$HeroUltra, { "data-astro-cid-5tznm7mj": true }, { "badge": async ($$result3) => renderTemplate`${maybeRenderHead()}<div data-astro-cid-5tznm7mj>${renderComponent($$result3, "BadgeUltra", $$BadgeUltra, { "text": "Expertise & Conseils", "data-astro-cid-5tznm7mj": true })}</div>`, "cta": async ($$result3) => renderTemplate`<div data-astro-cid-5tznm7mj>${renderComponent($$result3, "ButtonUltra", $$ButtonUltra, { "href": "/contact", "text": "Nous contacter", "data-astro-cid-5tznm7mj": true })}</div>`, "default": async ($$result3) => renderTemplate`<div class="mobile-menu-toggle" id="mobile-menu-toggle" data-astro-cid-5tznm7mj><svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5tznm7mj><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-5tznm7mj></path></svg></div><div class="theme-toggle" id="theme-toggle" title="Basculer le thème" data-astro-cid-5tznm7mj><svg class="w-5 h-5 sun-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5tznm7mj><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" data-astro-cid-5tznm7mj></path></svg><svg class="w-5 h-5 moon-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5tznm7mj><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" data-astro-cid-5tznm7mj></path></svg></div>`, "subtitle": async ($$result3) => renderTemplate`<div data-astro-cid-5tznm7mj><p class="hero-subtitle" data-astro-cid-5tznm7mj>Tendances du marché, conseils pratiques et retours d'expérience<br data-astro-cid-5tznm7mj>
pour vendre, acheter ou investir en Savoie.</p></div>`, "title": async ($$result3) => renderTemplate`<div data-astro-cid-5tznm7mj><h1 class="hero-title text-gradient-animate" data-astro-cid-5tznm7mj>Le Journal<br data-astro-cid-5tznm7mj><span class="font-semibold" data-astro-cid-5tznm7mj>de Voglans</span></h1></div>` })}<section class="py-24 bg-white relative overflow-hidden" data-astro-cid-5tznm7mj><!-- Fond décoratif subtil --><div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" data-astro-cid-5tznm7mj></div><div class="absolute top-0 left-0 w-64 h-64 bg-gradient-radial from-primary/10 to-transparent rounded-full -translate-x-32 -translate-y-32" data-astro-cid-5tznm7mj></div><div class="absolute bottom-0 right-0 w-64 h-64 bg-gradient-radial from-primary/10 to-transparent rounded-full translate-x-32 translate-y-32" data-astro-cid-5tznm7mj></div><!-- Particules flottantes --><div class="floating-particles" data-astro-cid-5tznm7mj><div class="particle" data-astro-cid-5tznm7mj></div><div class="particle" data-astro-cid-5tznm7mj></div><div class="particle" data-astro-cid-5tznm7mj></div><div class="particle" data-astro-cid-5tznm7mj></div><div class="particle" data-astro-cid-5tznm7mj></div><div class="particle" data-astro-cid-5tznm7mj></div></div><div class="container mx-auto px-4 relative z-10" data-astro-cid-5tznm7mj><div class="max-w-7xl mx-auto" data-astro-cid-5tznm7mj><!-- Header avec glassmorphism --><div class="text-center mb-20 animate-on-scroll" id="stats" data-astro-cid-5tznm7mj><div class="inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold shadow-xl shadow-primary/10 mb-8" data-astro-cid-5tznm7mj><span class="w-2 h-2 bg-primary rounded-full animate-pulse" data-astro-cid-5tznm7mj></span>
Articles Récents
</div><h2 class="text-4xl md:text-5xl font-light mb-6 text-foreground" data-astro-cid-5tznm7mj>
Actualités <span class="font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent" data-astro-cid-5tznm7mj>Immobilières</span></h2><p class="text-xl text-muted max-w-3xl mx-auto" data-astro-cid-5tznm7mj>
Analyses du marché, conseils d'experts et tendances de l'immobilier en Savoie
</p><!-- Statistiques du blog --><div class="stats-grid flex flex-wrap justify-center gap-8 mt-12 animate-on-scroll" data-astro-cid-5tznm7mj><div class="text-center" data-astro-cid-5tznm7mj><div class="stat-number text-3xl font-bold text-primary mb-1" data-astro-cid-5tznm7mj>${stats.totalArticles}</div><div class="text-sm text-muted" data-astro-cid-5tznm7mj>Articles</div></div><div class="text-center" data-astro-cid-5tznm7mj><div class="stat-number text-3xl font-bold text-primary mb-1" data-astro-cid-5tznm7mj>${stats.totalReadingTime} min</div><div class="text-sm text-muted" data-astro-cid-5tznm7mj>Temps de lecture</div></div><div class="text-center" data-astro-cid-5tznm7mj><div class="stat-number text-3xl font-bold text-primary mb-1" data-astro-cid-5tznm7mj>${stats.categoriesCount}</div><div class="text-sm text-muted" data-astro-cid-5tznm7mj>Catégories</div></div><div class="text-center" data-astro-cid-5tznm7mj><div class="stat-number text-3xl font-bold text-primary mb-1" data-astro-cid-5tznm7mj>${stats.featuredArticles}</div><div class="text-sm text-muted" data-astro-cid-5tznm7mj>Articles en vedette</div></div></div></div><!-- Recherche et filtres avancés --><div class="max-w-4xl mx-auto mb-12 animate-on-scroll" id="search" data-astro-cid-5tznm7mj><div class="search-filters flex flex-col sm:flex-row gap-4 mb-6" data-astro-cid-5tznm7mj><div class="relative flex-1" data-astro-cid-5tznm7mj>${renderComponent($$result2, "Search", Search, { "className": "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted", "data-astro-cid-5tznm7mj": true })}<input type="text" id="blog-search" placeholder="Rechercher dans les articles..." class="search-input w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 touch-optimized" data-astro-cid-5tznm7mj></div><select id="category-filter" class="category-select px-4 py-3 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 touch-optimized" data-astro-cid-5tznm7mj><option value="all" data-astro-cid-5tznm7mj>Toutes les catégories</option>${stats.categories.map((category) => renderTemplate`<option${addAttribute(category.toLowerCase(), "value")} data-astro-cid-5tznm7mj>${category}</option>`)}</select></div><!-- Tags populaires --><div class="tags-container flex flex-wrap justify-center gap-2" data-astro-cid-5tznm7mj>${Array.from(new Set(posts.flatMap((post) => post.tags))).slice(0, 8).map((tag) => renderTemplate`<button class="tag-filter bg-primary/10 text-primary hover:bg-primary hover:text-white px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 touch-optimized"${addAttribute(tag, "data-tag")} data-astro-cid-5tznm7mj>
#${tag}</button>`)}</div></div><!-- Blog Posts Grid - Responsive amélioré --><div id="blog-posts" class="blog-grid grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto" data-astro-cid-5tznm7mj>${posts.map((post, index) => renderTemplate`<div${addAttribute(`animate-on-scroll ${index % 2 === 0 ? "sm:mt-0" : "sm:mt-8"}`, "class")} data-astro-cid-5tznm7mj>${renderComponent($$result2, "BlogPostCard", $$BlogPostCard, { "title": post.title, "description": post.description, "href": post.href, "date": post.date, "readingTime": post.readingTime, "category": post.category, "featured": post.featured, "tags": post.tags, "data-astro-cid-5tznm7mj": true })}</div>`)}</div><!-- Indicateur de scroll avec storytelling --><div class="fixed bottom-8 right-8 z-50 hidden lg:block" data-astro-cid-5tznm7mj><div class="scroll-indicator" data-astro-cid-5tznm7mj><div class="scroll-progress" data-astro-cid-5tznm7mj></div><div class="scroll-text" data-astro-cid-5tznm7mj>↓ Scroll</div></div></div><!-- Boutons d'action flottants --><div class="floating-actions hidden lg:flex" data-astro-cid-5tznm7mj><button class="floating-btn" id="reading-mode-btn" title="Mode lecture" data-astro-cid-5tznm7mj><svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5tznm7mj><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" data-astro-cid-5tznm7mj></path></svg></button><button class="floating-btn" id="share-btn" title="Partager" data-astro-cid-5tznm7mj><svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5tznm7mj><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" data-astro-cid-5tznm7mj></path></svg></button><button class="floating-btn" id="toc-btn" title="Table des matières" data-astro-cid-5tznm7mj><svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5tznm7mj><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-5tznm7mj></path></svg></button></div><!-- Table des matières flottante --><div class="floating-toc" id="floating-toc" data-astro-cid-5tznm7mj><h3 class="text-sm font-bold text-primary mb-3" data-astro-cid-5tznm7mj>Sommaire</h3><div class="space-y-2" data-astro-cid-5tznm7mj><div class="toc-item" data-target="#stats" data-astro-cid-5tznm7mj>📊 Statistiques</div><div class="toc-item" data-target="#search" data-astro-cid-5tznm7mj>🔍 Recherche</div><div class="toc-item" data-target="#blog-posts" data-astro-cid-5tznm7mj>📚 Articles</div><div class="toc-item" data-target="#newsletter" data-astro-cid-5tznm7mj>📧 Newsletter</div></div></div><!-- Mode lecture immersif (masqué par défaut) --><div class="reading-mode hidden" id="reading-mode" data-astro-cid-5tznm7mj><div class="max-w-4xl mx-auto" data-astro-cid-5tznm7mj><div class="flex items-center justify-between mb-8" data-astro-cid-5tznm7mj><h1 class="text-3xl font-bold" data-astro-cid-5tznm7mj>Mode Lecture</h1><button class="close-reading-mode text-2xl hover:text-primary" id="close-reading-mode" data-astro-cid-5tznm7mj>&times;</button></div><div class="prose prose-lg max-w-none" data-astro-cid-5tznm7mj><!-- Contenu des articles sera injecté ici --></div></div></div><!-- CTA Section --><div class="text-center mt-20" data-astro-cid-5tznm7mj><div class="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 border border-primary/10" data-astro-cid-5tznm7mj><h3 class="text-3xl font-bold text-foreground mb-4" data-astro-cid-5tznm7mj>Besoin de conseils personnalisés ?</h3><p class="text-muted mb-8 max-w-2xl mx-auto" data-astro-cid-5tznm7mj>
Notre équipe d'experts vous accompagne dans tous vos projets immobiliers en Savoie.
</p><div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-5tznm7mj>${renderComponent($$result2, "ButtonUltra", $$ButtonUltra, { "href": "/estimation", "text": "Estimation gratuite", "data-astro-cid-5tznm7mj": true })}${renderComponent($$result2, "ButtonUltra", $$ButtonUltra, { "href": "/contact", "text": "Nous contacter", "variant": "secondary", "data-astro-cid-5tznm7mj": true })}</div></div></div></div></div><div class="reading-progress" data-astro-cid-5tznm7mj><div class="reading-progress-bar" data-astro-cid-5tznm7mj></div></div></section><section class="py-24 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden" id="newsletter" data-astro-cid-5tznm7mj><!-- Motifs géométriques --><div class="absolute inset-0 opacity-8" data-astro-cid-5tznm7mj><div class="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-xl" data-astro-cid-5tznm7mj></div><div class="absolute bottom-10 left-10 w-24 h-24 border-2 border-white/30 rotate-45" data-astro-cid-5tznm7mj></div></div><div class="container mx-auto px-4 relative z-10" data-astro-cid-5tznm7mj><div class="max-w-4xl mx-auto text-center" data-astro-cid-5tznm7mj><h2 class="text-4xl md:text-5xl font-light mb-6 tracking-tight" data-astro-cid-5tznm7mj>
Restez informé des dernières<br data-astro-cid-5tznm7mj><span class="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent font-semibold" data-astro-cid-5tznm7mj>tendances immobilières</span></h2><p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto" data-astro-cid-5tznm7mj>
Recevez nos analyses du marché et conseils d'experts directement dans votre boîte mail.
</p><div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" data-astro-cid-5tznm7mj><input type="email" placeholder="Votre email" class="flex-1 px-6 py-4 bg-white/90 backdrop-blur-sm border border-white/30 text-primary rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-primary/60" data-astro-cid-5tznm7mj>${renderComponent($$result2, "ButtonUltra", $$ButtonUltra, { "text": "S'abonner", "class": "bg-white text-primary hover:bg-white/90", "data-astro-cid-5tznm7mj": true })}</div><p class="text-white/80 text-sm mt-6" data-astro-cid-5tznm7mj>
Aucun spam • Désabonnement en un clic
</p></div></div></section>` })}`;
}, "/Users/zazouino/Downloads/voglansastro-main/src/pages/blog/index.astro", void 0);

const $$file = "/Users/zazouino/Downloads/voglansastro-main/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

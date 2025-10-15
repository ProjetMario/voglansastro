import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent, e as renderSlot, g as renderHead } from './astro/server_9NFxWlB3.mjs';
import 'kleur/colors';
import { Phone, Mail, Menu, X, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
/* empty css                            */

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function formatPrice(price) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}
function formatSurface(surface) {
  return `${surface} m²`;
}
function formatDate(date) {
  return new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}
function getEnergyColor(energy) {
  const colors = {
    A: "bg-green-500",
    B: "bg-green-400",
    C: "bg-yellow-400",
    D: "bg-yellow-500",
    E: "bg-orange-400",
    F: "bg-orange-500",
    G: "bg-red-500"
  };
  return colors[energy] || "bg-gray-400";
}
function getBadgeVariant(badge) {
  const variants = {
    nouveau: "badge-success",
    exclusivite: "badge-primary",
    vendu: "badge-secondary",
    "sous-offre": "badge-warning"
  };
  return variants[badge] || "badge-secondary";
}
function getBadgeLabel(badge) {
  const labels = {
    nouveau: "Nouveau",
    exclusivite: "Exclusivité",
    vendu: "Vendu",
    "sous-offre": "Sous offre"
  };
  return labels[badge] || badge;
}
const siteConfig = {
  name: "L'Agence de Voglans",
  description: "Agence immobilière 100% locale & Humaine en Savoie",
  contact: {
    phone: "07 57 83 02 62",
    email: "contact@agencevoglans.fr"}};

const $$Astro$2 = createAstro("https://agencevoglans.fr");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Logo;
  const { size = "md", className = "" } = Astro2.props;
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };
  return renderTemplate`<!-- Logo de L'Agence de Voglans -->${maybeRenderHead()}<div${addAttribute(`${sizeClasses[size]} ${className} flex-shrink-0`, "class")}> <!-- Votre vrai logo --> <img src="/images/logo-agence-voglans.png" alt="L'Agence de Voglans - Logo" class="w-full h-full object-contain"> </div>`;
}, "/Users/zazouino/Downloads/voglansastro-main/src/components/Logo.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="nav"> <!-- Motif géométrique subtil --> <div class="absolute inset-0 luxury-pattern opacity-5"></div> <div class="max-w-7xl mx-auto px-6 relative z-10"> <div class="flex items-center justify-between h-16"> <!-- Logo / Brand --> <a href="/" class="flex items-center gap-3 hover:opacity-90 transition-all duration-300 group"> <div class="relative"> ${renderComponent($$result, "Logo", $$Logo, { "size": "sm", "className": "text-white" })} <div class="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div> </div> <div class="flex flex-col"> <span class="brand-text text-white text-sm font-medium tracking-wide leading-tight">L'AGENCE DE VOGLANS</span> <span class="text-white/80 text-xs leading-tight font-light">Votre Agence 100% Locale</span> </div> </a> <!-- Desktop Navigation Menu --> <div class="hidden md:flex items-center space-x-6"> <a href="/services" class="text-white hover:text-white/90 text-sm font-medium transition-colors duration-200 relative group">
Services
<div class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div> </a> <a href="/a-propos" class="text-white hover:text-white/90 text-sm font-medium transition-colors duration-200 relative group">
À propos
<div class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div> </a> <a href="/estimation" class="text-white hover:text-white/90 text-sm font-medium transition-colors duration-200 relative group">
Estimation
<div class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div> </a> <a href="/blog" class="text-white hover:text-white/90 text-sm font-medium transition-colors duration-200 relative group">
Blog
<div class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div> </a> <!-- CTA Buttons --> <a${addAttribute(`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`, "href")} class="flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"> ${renderComponent($$result, "Phone", Phone, { "className": "w-4 h-4" })} <span>${siteConfig.contact.phone}</span> </a> <a${addAttribute(`mailto:${siteConfig.contact.email}`, "href")} class="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300"> ${renderComponent($$result, "Mail", Mail, { "className": "w-4 h-4" })} <span>Email</span> </a> </div> <!-- Mobile menu button --> <button class="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" id="mobile-menu-button"> ${renderComponent($$result, "Menu", Menu, { "className": "w-5 h-5", "id": "menu-icon" })} ${renderComponent($$result, "X", X, { "className": "w-5 h-5 hidden", "id": "close-icon" })} </button> </div> </div> <!-- Mobile Navigation Menu --> <div class="md:hidden border-t border-white/20 hidden" id="mobile-menu"> <div class="px-6 py-4 space-y-3"> <a href="/services" class="block text-white hover:text-white/90 py-2 text-sm font-medium transition-colors">
Services
</a> <a href="/a-propos" class="block text-white hover:text-white/90 py-2 text-sm font-medium transition-colors">
À propos
</a> <a href="/estimation" class="block text-white hover:text-white/90 py-2 text-sm font-medium transition-colors">
Estimation
</a> <a href="/blog" class="block text-white hover:text-white/90 py-2 text-sm font-medium transition-colors">
Blog
</a> <!-- Mobile CTA Buttons --> <div class="pt-3 border-t border-white/20 space-y-2"> <a${addAttribute(`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`, "href")} class="flex items-center justify-center gap-2 bg-white text-primary px-4 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg"> ${renderComponent($$result, "Phone", Phone, { "className": "w-4 h-4" })} <span>${siteConfig.contact.phone}</span> </a> <a${addAttribute(`mailto:${siteConfig.contact.email}`, "href")} class="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-4 py-3 rounded-full text-sm font-semibold hover:bg-white/20 transition-all duration-300"> ${renderComponent($$result, "Mail", Mail, { "className": "w-4 h-4" })} <span>Email</span> </a> </div> </div> </div> </nav> `;
}, "/Users/zazouino/Downloads/voglansastro-main/src/components/Navigation.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="section bg-gradient-to-br from-black/5 to-white border-t-4 border-black"> <div class="container"> <!-- Main Footer Content - Compact --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"> <!-- Brand & Description --> <div> <div class="flex items-center gap-3 mb-3"> <span class="text-lg font-bold text-emerald-400">L'Agence de Voglans</span> </div> <p class="text-black leading-relaxed max-w-md mb-4 text-sm italic">
Votre agence immobilière 100% locale et humaine sur Voglans et la Savoie.
</p> <!-- Contact Info --> <div class="space-y-2"> <div class="flex items-center gap-2 text-sm"> ${renderComponent($$result, "MapPin", MapPin, { "className": "w-4 h-4 text-emerald-400 flex-shrink-0" })} <span class="text-black">Siège social (pas d'agence physique) • 93 chemin de la combe, 73420 Voglans</span> </div> <div class="flex items-center gap-2 text-sm"> ${renderComponent($$result, "Phone", Phone, { "className": "w-4 h-4 text-emerald-400 flex-shrink-0" })} <a${addAttribute(`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`, "href")} class="text-black hover:text-emerald-400 transition-colors"> ${siteConfig.contact.phone} </a> </div> <div class="flex items-center gap-2 text-sm"> ${renderComponent($$result, "Clock", Clock, { "className": "w-4 h-4 text-emerald-400 flex-shrink-0" })} <span class="text-black">Lundi au samedi 9h - 19h</span> </div> </div> </div> <!-- Services --> <div> <h3 class="text-base font-semibold mb-3 text-emerald-400">Services</h3> <ul class="space-y-2"> <li><a href="/vendre" class="text-black hover:text-black transition-colors text-sm">Vendre</a></li> <li><a href="/acheter" class="text-black hover:text-black transition-colors text-sm">Acheter</a></li> <li><a href="/estimation" class="text-black hover:text-black transition-colors text-sm">Estimation</a></li> <li><a href="/locaux-commerciaux" class="text-black hover:text-black transition-colors text-sm">Locaux Commerciaux</a></li> <li><a href="/fonds-commerce" class="text-black hover:text-black transition-colors text-sm">Fonds de Commerce</a></li> </ul> </div> <!-- Informations --> <div> <h3 class="text-base font-semibold mb-3 text-emerald-400">Informations</h3> <ul class="space-y-2"> <li><a href="/zone-intervention" class="text-black hover:text-black transition-colors text-sm">Zone d'intervention</a></li> <li><a href="/blog" class="text-black hover:text-black transition-colors text-sm">Blog</a></li> <li><a href="/honoraires" class="text-black hover:text-black transition-colors text-sm">Honoraires</a></li> <li><a href="/mentions-legales" class="text-black hover:text-black transition-colors text-sm">Mentions légales</a></li> <li><a href="/rgpd" class="text-black hover:text-black transition-colors text-sm">Politique RGPD</a></li> </ul> </div> </div> <!-- Footer Bottom - Compact --> <div class="pt-4 border-t border-black/20"> <div class="flex flex-col md:flex-row justify-between items-center gap-4"> <!-- Social Links --> <div class="flex items-center gap-4"> <a href="https://facebook.com/agencevoglans" class="text-black hover:text-black transition-colors" aria-label="Facebook"> ${renderComponent($$result, "Facebook", Facebook, { "className": "w-5 h-5" })} </a> <a href="https://www.instagram.com/agence_de_voglans?igsh=MWlnaHBrOHRiMXpxdQ%3D%3D&utm_source=qr" class="text-black hover:text-black transition-colors" aria-label="Instagram"> ${renderComponent($$result, "Instagram", Instagram, { "className": "w-5 h-5" })} </a> <a href="https://linkedin.com/company/agence-voglans" class="text-black hover:text-black transition-colors" aria-label="LinkedIn"> ${renderComponent($$result, "Linkedin", Linkedin, { "className": "w-5 h-5" })} </a> </div> <p class="text-xs text-black text-center">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} L'Agence de Voglans. Tous droits réservés.
</p> </div> </div> </div> </footer>`;
}, "/Users/zazouino/Downloads/voglansastro-main/src/components/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://agencevoglans.fr");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    canonical,
    image = "/images/og-default.jpg",
    type = "website",
    noindex = false
  } = Astro2.props;
  const siteUrl = "https://agencevoglans.fr";
  const fullTitle = title.includes("L'Agence de Voglans") ? title : `${title} | L'Agence de Voglans`;
  const canonicalUrl = canonical || new URL(Astro2.url.pathname, siteUrl).href;
  const imageUrl = new URL(image, siteUrl).href;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', `><meta name="keywords" content="immobilier Voglans, agence immobili\xE8re Savoie, vente maison Voglans, achat appartement Chamb\xE9ry, estimation immobili\xE8re gratuite"><meta name="author" content="L'Agence de Voglans"><meta name="robots"`, '><!-- Canonical URL --><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', `><meta property="og:site_name" content="L'Agence de Voglans"><meta property="og:locale" content="fr_FR"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"`, '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', `><!-- Additional SEO --><meta name="theme-color" content="#1E5F4F"><meta name="msapplication-TileColor" content="#1E5F4F"><!-- Geo Tags --><meta name="geo.region" content="FR-73"><meta name="geo.placename" content="Voglans, Savoie"><meta name="geo.position" content="45.6167;5.8833"><meta name="ICBM" content="45.6167, 5.8833"><!-- Business Schema --><script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "L'Agence de Voglans",
  "description": "Agence immobili\xE8re locale sp\xE9cialis\xE9e dans la vente, l'achat et l'estimation de biens immobiliers \xE0 Voglans et en Savoie.",
  "url": "https://agencevoglans.fr",
  "telephone": "07 57 83 02 62",
  "email": "contact@agencevoglans.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Voglans",
    "addressLocality": "Voglans",
    "postalCode": "73420",
    "addressRegion": "Savoie",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.6167,
    "longitude": 5.8833
  },
  "areaServed": {
    "@type": "Place",
    "name": "Savoie, Auvergne-Rh\xF4ne-Alpes"
  },
  "serviceType": [
    "Vente immobili\xE8re",
    "Achat immobilier",
    "Estimation immobili\xE8re",
    "Conseil immobilier"
  ],
  "priceRange": "\u20AC\u20AC",
  "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-12:00"
}
<\/script>`])), fullTitle, addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(noindex ? "noindex, nofollow" : "index, follow", "content"), addAttribute(canonicalUrl, "href"), addAttribute(type, "content"), addAttribute(canonicalUrl, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(imageUrl, "content"), addAttribute(canonicalUrl, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(imageUrl, "content"));
}, "/Users/zazouino/Downloads/voglansastro-main/src/components/SEO.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://agencevoglans.fr");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    title = siteConfig.name,
    description = siteConfig.description,
    image = "/images/og-default.jpg",
    type = "website",
    noIndex = false
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="fr" class="scroll-smooth"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><!-- SEO Component -->', '<!-- Preconnect pour Google Fonts (Core Web Vitals) --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- DNS Prefetch pour am\xE9liorer les performances --><link rel="dns-prefetch" href="https://fonts.googleapis.com"><link rel="dns-prefetch" href="https://fonts.gstatic.com"><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" href="/favicon.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><!-- HubSpot Script --><script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/146996576.js"><\/script>', '</head> <body class="min-h-screen bg-background text-foreground antialiased"> ', " <main> ", " </main> ", ' <!-- Scroll to top button --> <button id="scroll-to-top" class="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg opacity-0 invisible transition-all duration-300 hover:shadow-xl hover:scale-110 z-40" aria-label="Retour en haut"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path> </svg> </button>  </body> </html>'])), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "image": image, "type": type, "noindex": noIndex }), renderHead(), renderComponent($$result, "Navigation", $$Navigation, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/zazouino/Downloads/voglansastro-main/src/layouts/Base.astro", void 0);

export { $$Base as $, formatSurface as a, formatDate as b, cn as c, getBadgeLabel as d, getBadgeVariant as e, formatPrice as f, getEnergyColor as g, $$Logo as h, siteConfig as s };

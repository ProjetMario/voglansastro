import { a as createComponent, d as renderComponent, r as renderTemplate, F as Fragment, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_9NFxWlB3.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_DhF6jZub.mjs';
import { $ as $$HeroUltra, a as $$ButtonUltra, b as $$BadgeUltra } from '../../chunks/ButtonUltra_CVw7_Hqz.mjs';
import { ArrowLeft, MapPin, Building, CheckCircle, Home, Award, Users } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$QuartiersVoglansGuideComplet = createComponent(($$result, $$props, $$slots) => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Guide complet des quartiers de Voglans",
    "description": "D\xE9couvrez tous les quartiers de Voglans : caract\xE9ristiques, prix immobiliers, ambiance et conseils pour choisir le bon secteur.",
    "image": "https://agencevoglans.fr/images/blog/quartiers-voglans.jpg",
    "author": {
      "@type": "Organization",
      "name": "L'Agence de Voglans",
      "url": "https://agencevoglans.fr"
    },
    "publisher": {
      "@type": "Organization",
      "name": "L'Agence de Voglans",
      "logo": {
        "@type": "ImageObject",
        "url": "https://agencevoglans.fr/images/logo-agence-voglans.png"
      }
    },
    "datePublished": "2025-02-10T10:00:00+02:00",
    "dateModified": "2025-02-10T10:00:00+02:00",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://agencevoglans.fr/blog/quartiers-voglans-guide-complet"
    },
    "articleSection": "Guide local",
    "keywords": ["quartiers Voglans", "guide Voglans", "vivre \xE0 Voglans", "secteurs Voglans"]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Guide complet des quartiers de Voglans - L'Agence de Voglans", "description": "D\xE9couvrez tous les quartiers de Voglans : caract\xE9ristiques, prix immobiliers, ambiance et conseils pour choisir le bon secteur." }, { "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "HeroUltra", $$HeroUltra, {}, { "badge": ($$result3) => renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result3, "BadgeUltra", $$BadgeUltra, { "text": "Guide Local 2025" })} </div>`, "cta": ($$result3) => renderTemplate`<div> ${renderComponent($$result3, "ButtonUltra", $$ButtonUltra, { "href": "/estimation", "text": "Estimer mon bien" })} </div>`, "subtitle": ($$result3) => renderTemplate`<div>
Découvrez tous les secteurs de Voglans<br>
pour faire le bon choix immobilier.
</div>`, "title": ($$result3) => renderTemplate`<div>
Guide complet<br> <span class="font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">des quartiers</span> </div>` })}  <section class="py-24 bg-white relative overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div> <div class="container mx-auto px-4 relative z-10"> <div class="max-w-4xl mx-auto"> <!-- Navigation retour --> <div class="mb-12"> <a href="/blog" class="inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold shadow-xl shadow-primary/10 hover:scale-105 transition-all duration-300 group"> ${renderComponent($$result2, "ArrowLeft", ArrowLeft, { "className": "w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" })} <span>Retour au blog</span> </a> </div> <!-- Article Header --> <header class="mb-16 text-center"> <div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"> ${renderComponent($$result2, "MapPin", MapPin, { "className": "w-4 h-4" })}
Guide local • 10 février 2025 • 6 min de lecture
</div> <h1 class="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
Guide complet des quartiers de Voglans
</h1> <p class="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
Entre Chambéry et le lac du Bourget, Voglans offre une diversité de quartiers aux ambiances variées.
            Découvrez chaque secteur pour trouver celui qui vous correspond.
</p> </header> <!-- Article Content --> <div class="space-y-12"> <!-- Centre-ville --> <div class="group"> <div class="flex items-start gap-6"> <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:scale-110 transition-transform duration-500"> ${renderComponent($$result2, "Building", Building, { "className": "w-8 h-8 text-primary" })} </div> <div class="flex-1"> <h2 class="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">Centre-ville : le cœur dynamique</h2> <p class="text-muted leading-relaxed text-lg mb-6">
Le centre-ville de Voglans concentre l'activité économique et sociale de la commune.
                  Quartier animé avec tous les commerces de proximité à portée de main.
</p> <div class="grid gap-4 mb-6"> <div class="flex items-center gap-4 p-4 bg-primary/5 rounded-xl"> <div class="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"> ${renderComponent($$result2, "CheckCircle", CheckCircle, { "className": "w-4 h-4 text-primary" })} </div> <div> <strong class="text-foreground">Commerces :</strong> <p class="text-muted mt-1">Boulangerie, pharmacie, supermarché à 2 minutes</p> </div> </div> <div class="flex items-center gap-4 p-4 bg-primary/5 rounded-xl"> <div class="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"> ${renderComponent($$result2, "CheckCircle", CheckCircle, { "className": "w-4 h-4 text-primary" })} </div> <div> <strong class="text-foreground">Écoles :</strong> <p class="text-muted mt-1">École primaire et maternelle sur place</p> </div> </div> <div class="flex items-center gap-4 p-4 bg-primary/5 rounded-xl"> <div class="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"> ${renderComponent($$result2, "CheckCircle", CheckCircle, { "className": "w-4 h-4 text-primary" })} </div> <div> <strong class="text-foreground">Transports :</strong> <p class="text-muted mt-1">Arrêt de bus, gare SNCF à 5 minutes</p> </div> </div> </div> <div class="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/10"> <h4 class="font-bold text-foreground mb-4 text-center">Prix immobiliers 2025</h4> <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center"> <div> <div class="text-2xl font-bold text-primary mb-1">Appartements</div> <div class="text-muted">280 000 - 380 000 €</div> </div> <div> <div class="text-2xl font-bold text-primary mb-1">Maisons</div> <div class="text-muted">420 000 - 550 000 €</div> </div> <div> <div class="text-2xl font-bold text-primary mb-1">Loyer moyen</div> <div class="text-muted">12-15 €/m²</div> </div> </div> </div> </div> </div> </div> <!-- Secteur résidentiel pavillonnaire --> <div class="group"> <div class="flex items-start gap-6"> <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:scale-110 transition-transform duration-500"> ${renderComponent($$result2, "Home", Home, { "className": "w-8 h-8 text-primary" })} </div> <div class="flex-1"> <h2 class="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">Secteurs pavillonnaires : tranquillité assurée</h2> <p class="text-muted leading-relaxed text-lg mb-6">
Les quartiers résidentiels de Voglans offrent un cadre de vie paisible avec jardins privatifs
                  et proximité de la nature. Idéal pour les familles recherchant calme et espace.
</p> <div class="space-y-4"> <div class="flex items-start gap-4 p-4 bg-primary/5 rounded-xl"> <div class="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"> <span class="text-primary font-bold">1</span> </div> <div> <strong class="text-foreground">Les Grangettes :</strong> <p class="text-muted mt-1">Lotissement récent avec maisons modernes, proche des écoles</p> </div> </div> <div class="flex items-start gap-4 p-4 bg-primary/5 rounded-xl"> <div class="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"> <span class="text-primary font-bold">2</span> </div> <div> <strong class="text-foreground">La Combe :</strong> <p class="text-muted mt-1">Secteur vallonné avec vues dégagées, maisons traditionnelles</p> </div> </div> <div class="flex items-start gap-4 p-4 bg-primary/5 rounded-xl"> <div class="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"> <span class="text-primary font-bold">3</span> </div> <div> <strong class="text-foreground">Les Essarts :</strong> <p class="text-muted mt-1">Quartier calme avec grands terrains, accès rapide aux axes principaux</p> </div> </div> </div> </div> </div> </div> <!-- Secteur lacustre --> <div class="group"> <div class="flex items-start gap-6"> <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:scale-110 transition-transform duration-500"> ${renderComponent($$result2, "Award", Award, { "className": "w-8 h-8 text-primary" })} </div> <div class="flex-1"> <h2 class="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">Secteur lacustre : prestige et nature</h2> <p class="text-muted leading-relaxed text-lg mb-6">
La proximité du lac du Bourget confère à certains quartiers de Voglans un caractère
                  exceptionnel. Biens rares avec vue sur l'eau ou accès direct aux berges.
</p> <div class="grid gap-4"> <div class="flex items-center gap-4 p-4 bg-primary/5 rounded-xl"> <div class="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"> ${renderComponent($$result2, "CheckCircle", CheckCircle, { "className": "w-4 h-4 text-primary" })} </div> <div> <strong class="text-foreground">Vue lac :</strong> <p class="text-muted mt-1">Propriétés d'exception avec panorama lac du Bourget</p> </div> </div> <div class="flex items-center gap-4 p-4 bg-primary/5 rounded-xl"> <div class="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"> ${renderComponent($$result2, "CheckCircle", CheckCircle, { "className": "w-4 h-4 text-primary" })} </div> <div> <strong class="text-foreground">Accès plages :</strong> <p class="text-muted mt-1">À 5 minutes des plages du Bourget-du-Lac</p> </div> </div> <div class="flex items-center gap-4 p-4 bg-primary/5 rounded-xl"> <div class="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"> ${renderComponent($$result2, "CheckCircle", CheckCircle, { "className": "w-4 h-4 text-primary" })} </div> <div> <strong class="text-foreground">Activités nautiques :</strong> <p class="text-muted mt-1">Port et base nautique accessibles rapidement</p> </div> </div> </div> <div class="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/10 mt-6"> <h4 class="font-bold text-foreground mb-4 text-center">Marché haut de gamme</h4> <div class="text-center"> <div class="text-3xl font-bold text-primary mb-2">600 000 - 1 200 000 €</div> <div class="text-muted">Prix moyens des biens avec vue lac</div> </div> </div> </div> </div> </div> <!-- Conseils pour choisir son quartier --> <div class="group"> <div class="flex items-start gap-6"> <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:scale-110 transition-transform duration-500"> ${renderComponent($$result2, "Users", Users, { "className": "w-8 h-8 text-primary" })} </div> <div class="flex-1"> <h2 class="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">Conseils pour choisir votre quartier</h2> <div class="grid gap-4"> <div class="flex items-start gap-4 p-4 bg-primary/5 rounded-xl"> <div class="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"> ${renderComponent($$result2, "CheckCircle", CheckCircle, { "className": "w-4 h-4 text-primary" })} </div> <div> <strong class="text-foreground">Pour les familles :</strong> <p class="text-muted mt-1">Privilégiez les secteurs pavillonnaires avec écoles à proximité</p> </div> </div> <div class="flex items-start gap-4 p-4 bg-primary/5 rounded-xl"> <div class="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"> ${renderComponent($$result2, "CheckCircle", CheckCircle, { "className": "w-4 h-4 text-primary" })} </div> <div> <strong class="text-foreground">Pour les investisseurs :</strong> <p class="text-muted mt-1">Le centre-ville offre les meilleurs rendements locatifs</p> </div> </div> <div class="flex items-start gap-4 p-4 bg-primary/5 rounded-xl"> <div class="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0"> ${renderComponent($$result2, "CheckCircle", CheckCircle, { "className": "w-4 h-4 text-primary" })} </div> <div> <strong class="text-foreground">Pour les retraités :</strong> <p class="text-muted mt-1">Les secteurs calmes avec services de proximité sont idéals</p> </div> </div> </div> </div> </div> </div> </div> <!-- CTA Section --> <div class="mt-20 text-center"> <div class="group"> <div class="text-center"> <h3 class="text-3xl font-bold text-foreground mb-4">Besoin d'aide pour choisir votre quartier ?</h3> <p class="text-muted mb-8 max-w-2xl mx-auto text-lg">
Notre connaissance approfondie de tous les secteurs de Voglans nous permet de vous conseiller
                le quartier idéal selon votre profil et votre projet.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result2, "ButtonUltra", $$ButtonUltra, { "href": "/contact", "text": "Conseil personnalis\xE9" })} ${renderComponent($$result2, "ButtonUltra", $$ButtonUltra, { "href": "/estimation", "text": "Estimation gratuite", "variant": "secondary" })} </div> </div> </div> </div> </div> </div> </section>  <section class="py-24 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden"> <div class="absolute inset-0 opacity-8"> <div class="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div> <div class="absolute bottom-10 left-10 w-24 h-24 border-2 border-white/30 rotate-45"></div> </div> <div class="container mx-auto px-4 relative z-10"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-4xl md:text-5xl font-light mb-6 tracking-tight">
Restez informé des<br> <span class="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent font-semibold">nouveautés locales</span> </h2> <p class="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
Recevez nos analyses de quartier et conseils d'experts directement dans votre boîte mail.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"> <input type="email" placeholder="Votre email" class="flex-1 px-6 py-4 bg-white/90 backdrop-blur-sm border border-white/30 text-primary rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-primary/60"> ${renderComponent($$result2, "ButtonUltra", $$ButtonUltra, { "text": "S'abonner", "class": "bg-white text-primary hover:bg-white/90" })} </div> <p class="text-white/80 text-sm mt-6">
Actualités locales • Conseils d'experts • Aucun spam
</p> </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(articleSchema))) })}` })}`;
}, "/Users/zazouino/Downloads/voglansastro-main/src/pages/blog/quartiers-voglans-guide-complet.astro", void 0);

const $$file = "/Users/zazouino/Downloads/voglansastro-main/src/pages/blog/quartiers-voglans-guide-complet.astro";
const $$url = "/blog/quartiers-voglans-guide-complet";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$QuartiersVoglansGuideComplet,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

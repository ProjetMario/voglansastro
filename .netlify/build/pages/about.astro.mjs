import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_9NFxWlB3.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_DFz4Motd.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "\xC0 propos | L'Agence de Voglans", "description": "D\xE9couvrez l'\xE9quipe et la vision de L'Agence de Voglans : immobilier local, digital et humain." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero-section"> <div class="container-apple"> <div class="hero-badge fade-in">
Notre ADN
</div> <h1 class="hero-title fade-in">
L'alliance du digital et de l'humain
</h1> <p class="hero-subtitle fade-in">
Créée à Voglans, notre agence cultive une présence locale forte tout en s'appuyant sur des outils digitaux de dernière génération pour offrir une expérience haut de gamme.
</p> </div> </section> <section class="section"> <div class="container-apple grid-split items-start"> <div class="apple-card space-y-4"> <h2 class="text-2xl font-semibold">Notre mission</h2> <p class="text-[hsl(var(--color-muted-foreground))] leading-relaxed">
Mettre en lumière la singularité de chaque bien, accompagner nos clients avec transparence et fluidité, et garantir des résultats mesurables. Nous combinons expertise terrain, culture design et maîtrise des technologies marketing.
</p> <div class="space-y-3"> <div class="check-item"> <svg class="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg>
Accompagnement 360° pour vendeurs, acquéreurs et investisseurs.
</div> <div class="check-item"> <svg class="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg>
Stratégies marketing personnalisées et mesurables.
</div> <div class="check-item"> <svg class="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg>
Transparence financière et juridique de bout en bout.
</div> </div> </div> <div class="apple-card space-y-6"> <h3 class="text-xl font-semibold">L'équipe</h3> <p class="text-[hsl(var(--color-muted-foreground))] leading-relaxed">
Agents commerciaux, photographe, vidéaste, spécialiste marketing et juriste collaborent pour offrir une expérience fluide. Chaque dossier est piloté par un interlocuteur unique épaulé par nos experts.
</p> <div class="stat-grid"> <div class="stat-card"> <strong>8</strong> <span class="text-xs uppercase tracking-[0.35em] text-[hsl(var(--color-muted-foreground))]">Experts</span> </div> <div class="stat-card"> <strong>12 ans</strong> <span class="text-xs uppercase tracking-[0.35em] text-[hsl(var(--color-muted-foreground))]">d'expérience cumulée</span> </div> <div class="stat-card"> <strong>100%</strong> <span class="text-xs uppercase tracking-[0.35em] text-[hsl(var(--color-muted-foreground))]">mandats réussis 2024</span> </div> </div> </div> </div> </section> <section class="section"> <div class="container-apple apple-card"> <h2 class="text-2xl font-semibold mb-4">Nos valeurs</h2> <div class="grid-split"> <div> <h3 class="font-semibold text-lg mb-2">Humanité</h3> <p class="text-[hsl(var(--color-muted-foreground))] leading-relaxed">
Nous défendons les intérêts de nos clients avec empathie et pédagogie. Chaque décision est expliquée et co-construite.
</p> </div> <div> <h3 class="font-semibold text-lg mb-2">Transparence</h3> <p class="text-[hsl(var(--color-muted-foreground))] leading-relaxed">
Accès en temps réel aux indicateurs de performance, comptes rendus partagés et offres débriefées en détail.
</p> </div> <div> <h3 class="font-semibold text-lg mb-2">Innovation</h3> <p class="text-[hsl(var(--color-muted-foreground))] leading-relaxed">
Outils digitaux, automatisation des relances, campagnes data-driven et scénarios immersifs pour valoriser vos biens.
</p> </div> </div> </div> </section> ` })}`;
}, "/Users/zazouino/Downloads/voglansastro-main/src/pages/about.astro", void 0);

const $$file = "/Users/zazouino/Downloads/voglansastro-main/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

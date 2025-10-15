import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_9NFxWlB3.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_DhF6jZub.mjs';
export { renderers } from '../renderers.mjs';

const $$Achat = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Achat Immobilier | L'Agence de Voglans", "description": "Accompagnement sur mesure pour acheter un bien immobilier en Savoie : recherche cibl\xE9e, n\xE9gociation et s\xE9curisation." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero-section"> <div class="container-apple"> <div class="hero-badge fade-in">Acquéreurs accompagnés</div> <h1 class="hero-title fade-in">
Trouvez et sécurisez le bien idéal en Savoie
</h1> <p class="hero-subtitle fade-in">
Mandat de recherche, visites privées, analyses techniques et partenaires financiers : nous orchestrons votre projet d'achat de A à Z.
</p> <div class="flex flex-col sm:flex-row justify-center gap-4 fade-in"> <a href="/contact" class="btn-primary">Discuter de mon projet</a> <a href="#services" class="btn-secondary">Notre accompagnement</a> </div> </div> </section> <section class="section" id="services"> <div class="container-apple grid-split items-start"> <div class="apple-card space-y-6"> <h2 class="text-2xl font-semibold">Notre process</h2> <ol class="space-y-4 text-[hsl(var(--color-muted-foreground))] leading-relaxed"> <li><strong>1. Brief détaillé :</strong> cahier des charges, budget, zones prioritaires.</li> <li><strong>2. Sélection sur-mesure :</strong> off market, partenariats agences, alertes instantanées.</li> <li><strong>3. Visites optimisées :</strong> compte rendu photo + vidéo et analyse technique.</li> <li><strong>4. Offre & négociation :</strong> stratégie de prix, accompagnement juridique et financement.</li> </ol> </div> <div class="apple-card space-y-4"> <h3 class="text-xl font-semibold">Vos avantages</h3> <div class="space-y-3"> ${[
    "S\xE9lection rigoureuse des biens avant chaque visite",
    "\xC9tude de faisabilit\xE9 financi\xE8re et pr\xE9-validation bancaire",
    "R\xE9seau d'artisans et d'architectes pour projections travaux",
    "Dossier complet remis au notaire pour une signature sereine"
  ].map((item) => renderTemplate`<div class="check-item" role="listitem"> <svg class="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> ${item} </div>`)} </div> <a href="/contact" class="btn-primary w-fit">Planifier un échange</a> </div> </div> </section> <section class="section"> <div class="container-apple apple-card text-center"> <h2 class="text-3xl font-semibold mb-4">Suivi personnalisé</h2> <p class="text-lg text-[hsl(var(--color-muted-foreground))] max-w-2xl mx-auto mb-8">
Recevez un reporting hebdomadaire, vos visites programmées et des conseils pour sécuriser votre financement. Votre interlocuteur dédié coordonne l'ensemble du dossier jusqu'à la remise des clés.
</p> <a href="/contact" class="btn-secondary">Nous confier une recherche</a> </div> </section> ` })}`;
}, "/Users/zazouino/Downloads/voglansastro-main/src/pages/achat.astro", void 0);

const $$file = "/Users/zazouino/Downloads/voglansastro-main/src/pages/achat.astro";
const $$url = "/achat";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Achat,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

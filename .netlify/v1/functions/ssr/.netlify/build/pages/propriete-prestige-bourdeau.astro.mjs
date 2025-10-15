import { a as createComponent, d as renderComponent, r as renderTemplate, F as Fragment, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_9NFxWlB3.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BeYdmCn8.mjs';
import { $ as $$Section } from '../chunks/Section_DI_ORplF.mjs';
import { $ as $$Badge } from '../chunks/Badge_gacXoYlY.mjs';
import { Euro, Crown, Calculator } from 'lucide-react';
/* empty css                                                       */
export { renderers } from '../renderers.mjs';

const $$ProprietePrestigeBourdeau = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    title: "Propri\xE9t\xE9 de Prestige Bourdeau | Demeure d'Exception Savoie",
    description: "D\xE9couvrez les propri\xE9t\xE9s de prestige \xE0 Bourdeau. Villas haut de gamme et demeures d'exception.",
    keywords: ["propriete prestige bourdeau", "demeure caractere bourdeau"]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": meta.title, "description": meta.description, "data-astro-cid-ygevklgi": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Section", $$Section, { "size": "lg", "className": "bg-gradient-to-b from-primary/5 to-background", "data-astro-cid-ygevklgi": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-16" data-astro-cid-ygevklgi> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "success", "className": "mb-6", "data-astro-cid-ygevklgi": true }, { "default": ($$result4) => renderTemplate`
Lac Prestige
` })} <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-astro-cid-ygevklgi>
Propriété de Prestige <span class="gradient-text" data-astro-cid-ygevklgi>Bourdeau</span> </h1> <p class="text-xl text-muted max-w-3xl mx-auto mb-12" data-astro-cid-ygevklgi>
Découvrez les propriétés de prestige à Bourdeau, véritables joyaux immobiliers d'exception en bord de lac.
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" data-astro-cid-ygevklgi> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg" data-astro-cid-ygevklgi> <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto" data-astro-cid-ygevklgi> ${renderComponent($$result3, "Euro", Euro, { "className": "w-6 h-6 text-primary", "data-astro-cid-ygevklgi": true })} </div> <div class="text-3xl font-bold text-primary mb-2" data-astro-cid-ygevklgi>2.2M€</div> <div class="text-sm text-muted font-medium" data-astro-cid-ygevklgi>Prix moyen</div> </div> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg" data-astro-cid-ygevklgi> <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto" data-astro-cid-ygevklgi> ${renderComponent($$result3, "Crown", Crown, { "className": "w-6 h-6 text-primary", "data-astro-cid-ygevklgi": true })} </div> <div class="text-3xl font-bold text-primary mb-2" data-astro-cid-ygevklgi>4</div> <div class="text-sm text-muted font-medium" data-astro-cid-ygevklgi>Biens d'exception</div> </div> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg" data-astro-cid-ygevklgi> <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto" data-astro-cid-ygevklgi> ${renderComponent($$result3, "Calculator", Calculator, { "className": "w-6 h-6 text-primary", "data-astro-cid-ygevklgi": true })} </div> <div class="text-3xl font-bold text-primary mb-2" data-astro-cid-ygevklgi>12 mois</div> <div class="text-sm text-muted font-medium" data-astro-cid-ygevklgi>Délai de vente</div> </div> </div> </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "className": "bg-gradient-to-br from-primary to-primary/90", "data-astro-cid-ygevklgi": true }, { "default": ($$result3) => renderTemplate` <div class="text-center text-white" data-astro-cid-ygevklgi> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-astro-cid-ygevklgi>
Découvrir les propriétés d'exception à Bourdeau
</h2> <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-astro-cid-ygevklgi>
Présentation confidentielle et visite privée des demeures les plus remarquables de Bourdeau.
</p> <a href="/estimation" class="btn bg-white text-primary hover:bg-white/90" data-astro-cid-ygevklgi> ${renderComponent($$result3, "Crown", Crown, { "className": "w-5 h-5", "data-astro-cid-ygevklgi": true })}
Demande de présentation
</a> </div> ` })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` <meta name="keywords"${addAttribute(meta.keywords.join(", "), "content")}> ` })}` })} `;
}, "/Users/zazouino/Downloads/voglansastro-main/src/pages/propriete-prestige-bourdeau.astro", void 0);

const $$file = "/Users/zazouino/Downloads/voglansastro-main/src/pages/propriete-prestige-bourdeau.astro";
const $$url = "/propriete-prestige-bourdeau";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProprietePrestigeBourdeau,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

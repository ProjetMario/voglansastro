import { a as createComponent, d as renderComponent, r as renderTemplate, F as Fragment, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_9NFxWlB3.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_DFz4Motd.mjs';
import { $ as $$Section } from '../chunks/Section_Du-jGcxi.mjs';
import { $ as $$Badge } from '../chunks/Badge_CCIblhad.mjs';
import { Euro, TrendingUp, Calculator } from 'lucide-react';
/* empty css                                                   */
export { renderers } from '../renderers.mjs';

const $$ImmeubleRapportCognin = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    title: "Immeuble de Rapport Cognin | Investissement Locatif Savoie",
    description: "Investissez dans un immeuble de rapport \xE0 Cognin. Rendement attractif et gestion locative simplifi\xE9e.",
    keywords: ["immeuble rapport cognin", "investissement locatif cognin"]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": meta.title, "description": meta.description, "data-astro-cid-hqmocgzh": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Section", $$Section, { "size": "lg", "className": "bg-gradient-to-b from-primary/5 to-background", "data-astro-cid-hqmocgzh": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-16" data-astro-cid-hqmocgzh> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "success", "className": "mb-6", "data-astro-cid-hqmocgzh": true }, { "default": ($$result4) => renderTemplate`
Ville Résidentielle
` })} <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-astro-cid-hqmocgzh>
Immeuble de Rapport <span class="gradient-text" data-astro-cid-hqmocgzh>Cognin</span> </h1> <p class="text-xl text-muted max-w-3xl mx-auto mb-12" data-astro-cid-hqmocgzh>
Investissez dans l'immobilier locatif à Cognin avec des rendements attractifs.
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" data-astro-cid-hqmocgzh> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg" data-astro-cid-hqmocgzh> <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto" data-astro-cid-hqmocgzh> ${renderComponent($$result3, "Euro", Euro, { "className": "w-6 h-6 text-primary", "data-astro-cid-hqmocgzh": true })} </div> <div class="text-3xl font-bold text-primary mb-2" data-astro-cid-hqmocgzh>2 800 €/m²</div> <div class="text-sm text-muted font-medium" data-astro-cid-hqmocgzh>Prix au m²</div> </div> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg" data-astro-cid-hqmocgzh> <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto" data-astro-cid-hqmocgzh> ${renderComponent($$result3, "TrendingUp", TrendingUp, { "className": "w-6 h-6 text-primary", "data-astro-cid-hqmocgzh": true })} </div> <div class="text-3xl font-bold text-primary mb-2" data-astro-cid-hqmocgzh>8.1%</div> <div class="text-sm text-muted font-medium" data-astro-cid-hqmocgzh>Rendement</div> </div> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg" data-astro-cid-hqmocgzh> <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto" data-astro-cid-hqmocgzh> ${renderComponent($$result3, "Calculator", Calculator, { "className": "w-6 h-6 text-primary", "data-astro-cid-hqmocgzh": true })} </div> <div class="text-3xl font-bold text-primary mb-2" data-astro-cid-hqmocgzh>700k€</div> <div class="text-sm text-muted font-medium" data-astro-cid-hqmocgzh>Prix moyen</div> </div> </div> </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "className": "bg-gradient-to-br from-primary to-primary/90", "data-astro-cid-hqmocgzh": true }, { "default": ($$result3) => renderTemplate` <div class="text-center text-white" data-astro-cid-hqmocgzh> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-astro-cid-hqmocgzh>
Étude d'investissement à Cognin
</h2> <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-astro-cid-hqmocgzh>
Analyse personnalisée de rentabilité et accompagnement complet.
</p> <a href="/estimation" class="btn bg-white text-primary hover:bg-white/90" data-astro-cid-hqmocgzh> ${renderComponent($$result3, "Calculator", Calculator, { "className": "w-5 h-5", "data-astro-cid-hqmocgzh": true })}
Étude gratuite
</a> </div> ` })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` <meta name="keywords"${addAttribute(meta.keywords.join(", "), "content")}> ` })}` })} `;
}, "/Users/zazouino/Downloads/voglansastro-main/src/pages/immeuble-rapport-cognin.astro", void 0);

const $$file = "/Users/zazouino/Downloads/voglansastro-main/src/pages/immeuble-rapport-cognin.astro";
const $$url = "/immeuble-rapport-cognin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ImmeubleRapportCognin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

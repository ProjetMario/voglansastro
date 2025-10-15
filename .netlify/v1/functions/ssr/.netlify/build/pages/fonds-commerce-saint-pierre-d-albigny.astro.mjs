import { a as createComponent, d as renderComponent, r as renderTemplate, F as Fragment, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_9NFxWlB3.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_C2k5Ezr7.mjs';
import { $ as $$Section } from '../chunks/Section_TF3TClLn.mjs';
import { $ as $$Badge } from '../chunks/Badge_CkmrrhPn.mjs';
import { Euro, TrendingUp, Calculator } from 'lucide-react';
/* empty css                                                                 */
export { renderers } from '../renderers.mjs';

const $$FondsCommerceSaintPierreDAlbigny = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    title: "Fonds de Commerce Saint-Pierre-d'Albigny | Cession Entreprise Savoie",
    description: "C\xE9dez votre fonds de commerce \xE0 Saint-Pierre-d'Albigny au meilleur prix. Expertise locale et r\xE9seau d'acqu\xE9reurs qualifi\xE9s.",
    keywords: ["fonds commerce saint-pierre-d-albigny", "cession entreprise saint-pierre-d-albigny"]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": meta.title, "description": meta.description, "data-astro-cid-c3sblfck": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Section", $$Section, { "size": "lg", "className": "bg-gradient-to-b from-primary/5 to-background", "data-astro-cid-c3sblfck": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-16" data-astro-cid-c3sblfck> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "success", "className": "mb-6", "data-astro-cid-c3sblfck": true }, { "default": ($$result4) => renderTemplate`
Saint-Pierre-d'Albigny
` })} <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-astro-cid-c3sblfck>
Fonds de Commerce <span class="gradient-text" data-astro-cid-c3sblfck>Saint-Pierre-d'Albigny</span> </h1> <p class="text-xl text-muted max-w-3xl mx-auto mb-12" data-astro-cid-c3sblfck>
Cédez votre commerce à Saint-Pierre-d'Albigny au meilleur prix.
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" data-astro-cid-c3sblfck> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg" data-astro-cid-c3sblfck> <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto" data-astro-cid-c3sblfck> ${renderComponent($$result3, "Euro", Euro, { "className": "w-6 h-6 text-primary", "data-astro-cid-c3sblfck": true })} </div> <div class="text-3xl font-bold text-primary mb-2" data-astro-cid-c3sblfck>95k€</div> <div class="text-sm text-muted font-medium" data-astro-cid-c3sblfck>CA moyen</div> </div> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg" data-astro-cid-c3sblfck> <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto" data-astro-cid-c3sblfck> ${renderComponent($$result3, "TrendingUp", TrendingUp, { "className": "w-6 h-6 text-primary", "data-astro-cid-c3sblfck": true })} </div> <div class="text-3xl font-bold text-primary mb-2" data-astro-cid-c3sblfck>8%</div> <div class="text-sm text-muted font-medium" data-astro-cid-c3sblfck>Rentabilité</div> </div> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg" data-astro-cid-c3sblfck> <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto" data-astro-cid-c3sblfck> ${renderComponent($$result3, "Calculator", Calculator, { "className": "w-6 h-6 text-primary", "data-astro-cid-c3sblfck": true })} </div> <div class="text-3xl font-bold text-primary mb-2" data-astro-cid-c3sblfck>38j</div> <div class="text-sm text-muted font-medium" data-astro-cid-c3sblfck>Délai cession</div> </div> </div> </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "className": "bg-gradient-to-br from-primary to-primary/90", "data-astro-cid-c3sblfck": true }, { "default": ($$result3) => renderTemplate` <div class="text-center text-white" data-astro-cid-c3sblfck> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-astro-cid-c3sblfck>
Évaluer votre fonds de commerce à Saint-Pierre-d'Albigny
</h2> <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-astro-cid-c3sblfck>
Estimation précise basée sur votre commerce et le marché de Saint-Pierre-d'Albigny.
</p> <a href="/estimation" class="btn bg-white text-primary hover:bg-white/90" data-astro-cid-c3sblfck> ${renderComponent($$result3, "Calculator", Calculator, { "className": "w-5 h-5", "data-astro-cid-c3sblfck": true })}
Estimation gratuite
</a> </div> ` })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` <meta name="keywords"${addAttribute(meta.keywords.join(", "), "content")}> ` })}` })} `;
}, "/Users/zazouino/Downloads/voglansastro-main/src/pages/fonds-commerce-saint-pierre-d-albigny.astro", void 0);

const $$file = "/Users/zazouino/Downloads/voglansastro-main/src/pages/fonds-commerce-saint-pierre-d-albigny.astro";
const $$url = "/fonds-commerce-saint-pierre-d-albigny";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FondsCommerceSaintPierreDAlbigny,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

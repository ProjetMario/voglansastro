import { a as createComponent, d as renderComponent, r as renderTemplate, F as Fragment, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_9NFxWlB3.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_C2k5Ezr7.mjs';
import { $ as $$Section } from '../chunks/Section_TF3TClLn.mjs';
import { $ as $$Badge } from '../chunks/Badge_CkmrrhPn.mjs';
import { Euro, TrendingUp, Calculator } from 'lucide-react';
/* empty css                                                     */
export { renderers } from '../renderers.mjs';

const $$FondsCommerceMontmelian = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    title: "Fonds de Commerce Montm\xE9lian | Cession Entreprise Savoie",
    description: "C\xE9dez votre fonds de commerce \xE0 Montm\xE9lian au meilleur prix. Expertise locale et r\xE9seau d'acqu\xE9reurs qualifi\xE9s.",
    keywords: ["fonds commerce montmelian", "cession entreprise montmelian"]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": meta.title, "description": meta.description, "data-astro-cid-dhyklkib": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Section", $$Section, { "size": "lg", "className": "bg-gradient-to-b from-primary/5 to-background", "data-astro-cid-dhyklkib": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-16" data-astro-cid-dhyklkib> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "success", "className": "mb-6", "data-astro-cid-dhyklkib": true }, { "default": ($$result4) => renderTemplate`
Montmélian Combe de Savoie
` })} <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-astro-cid-dhyklkib>
Fonds de Commerce <span class="gradient-text" data-astro-cid-dhyklkib>Montmélian</span> </h1> <p class="text-xl text-muted max-w-3xl mx-auto mb-12" data-astro-cid-dhyklkib>
Cédez votre activité commerciale à Montmélian avec notre expertise du marché local.
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" data-astro-cid-dhyklkib> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg" data-astro-cid-dhyklkib> <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto" data-astro-cid-dhyklkib> ${renderComponent($$result3, "Euro", Euro, { "className": "w-6 h-6 text-primary", "data-astro-cid-dhyklkib": true })} </div> <div class="text-3xl font-bold text-primary mb-2" data-astro-cid-dhyklkib>120k€</div> <div class="text-sm text-muted font-medium" data-astro-cid-dhyklkib>CA moyen</div> </div> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg" data-astro-cid-dhyklkib> <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto" data-astro-cid-dhyklkib> ${renderComponent($$result3, "TrendingUp", TrendingUp, { "className": "w-6 h-6 text-primary", "data-astro-cid-dhyklkib": true })} </div> <div class="text-3xl font-bold text-primary mb-2" data-astro-cid-dhyklkib>10%</div> <div class="text-sm text-muted font-medium" data-astro-cid-dhyklkib>Rentabilité</div> </div> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg" data-astro-cid-dhyklkib> <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto" data-astro-cid-dhyklkib> ${renderComponent($$result3, "Calculator", Calculator, { "className": "w-6 h-6 text-primary", "data-astro-cid-dhyklkib": true })} </div> <div class="text-3xl font-bold text-primary mb-2" data-astro-cid-dhyklkib>62j</div> <div class="text-sm text-muted font-medium" data-astro-cid-dhyklkib>Délai cession</div> </div> </div> </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "className": "bg-gradient-to-br from-primary to-primary/90", "data-astro-cid-dhyklkib": true }, { "default": ($$result3) => renderTemplate` <div class="text-center text-white" data-astro-cid-dhyklkib> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-astro-cid-dhyklkib>
Évaluer votre fonds de commerce à Montmélian
</h2> <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-astro-cid-dhyklkib>
Estimation précise basée sur votre chiffre d'affaires et le marché local.
</p> <a href="/estimation" class="btn bg-white text-primary hover:bg-white/90" data-astro-cid-dhyklkib> ${renderComponent($$result3, "Calculator", Calculator, { "className": "w-5 h-5", "data-astro-cid-dhyklkib": true })}
Estimation gratuite
</a> </div> ` })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` <meta name="keywords"${addAttribute(meta.keywords.join(", "), "content")}> ` })}` })} `;
}, "/Users/zazouino/Downloads/voglansastro-main/src/pages/fonds-commerce-montmelian.astro", void 0);

const $$file = "/Users/zazouino/Downloads/voglansastro-main/src/pages/fonds-commerce-montmelian.astro";
const $$url = "/fonds-commerce-montmelian";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FondsCommerceMontmelian,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

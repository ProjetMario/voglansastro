import { a as createComponent, e as renderComponent, r as renderTemplate, F as Fragment, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_2axgzuxg.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_CDIXmIED.mjs';
import { $ as $$Section } from '../chunks/Section_HNxW7Ulk.mjs';
import { $ as $$Badge } from '../chunks/Badge_CmQNuZMJ.mjs';
import { Euro, TrendingUp, Calculator } from 'lucide-react';
/* empty css                                                   */
export { renderers } from '../renderers.mjs';

const $$FondsCommerceBourdeau = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    title: "Fonds de Commerce Bourdeau | Cession Entreprise Savoie",
    description: "C\xE9dez votre fonds de commerce \xE0 Bourdeau au meilleur prix. Expertise locale et r\xE9seau d'acqu\xE9reurs qualifi\xE9s.",
    keywords: ["fonds commerce bourdeau", "cession entreprise bourdeau"]
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": meta.title, "description": meta.description, "data-astro-cid-ji7bltqt": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Section", $$Section, { "size": "lg", "className": "bg-gradient-to-b from-primary/5 to-background", "data-astro-cid-ji7bltqt": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-16" data-astro-cid-ji7bltqt> ${renderComponent($$result3, "Badge", $$Badge, { "variant": "success", "className": "mb-6", "data-astro-cid-ji7bltqt": true }, { "default": ($$result4) => renderTemplate`
Bourdeau
` })} <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-astro-cid-ji7bltqt>
Fonds de Commerce <span class="gradient-text" data-astro-cid-ji7bltqt>Bourdeau</span> </h1> <p class="text-xl text-muted max-w-3xl mx-auto mb-12" data-astro-cid-ji7bltqt>
Cédez votre activité à Bourdeau avec notre expertise du marché vigneron.
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" data-astro-cid-ji7bltqt> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg" data-astro-cid-ji7bltqt> <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto" data-astro-cid-ji7bltqt> ${renderComponent($$result3, "Euro", Euro, { "className": "w-6 h-6 text-primary", "data-astro-cid-ji7bltqt": true })} </div> <div class="text-3xl font-bold text-primary mb-2" data-astro-cid-ji7bltqt>340k€</div> <div class="text-sm text-muted font-medium" data-astro-cid-ji7bltqt>CA moyen</div> </div> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg" data-astro-cid-ji7bltqt> <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto" data-astro-cid-ji7bltqt> ${renderComponent($$result3, "TrendingUp", TrendingUp, { "className": "w-6 h-6 text-primary", "data-astro-cid-ji7bltqt": true })} </div> <div class="text-3xl font-bold text-primary mb-2" data-astro-cid-ji7bltqt>24%</div> <div class="text-sm text-muted font-medium" data-astro-cid-ji7bltqt>Rentabilité</div> </div> <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg" data-astro-cid-ji7bltqt> <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto" data-astro-cid-ji7bltqt> ${renderComponent($$result3, "Calculator", Calculator, { "className": "w-6 h-6 text-primary", "data-astro-cid-ji7bltqt": true })} </div> <div class="text-3xl font-bold text-primary mb-2" data-astro-cid-ji7bltqt>38j</div> <div class="text-sm text-muted font-medium" data-astro-cid-ji7bltqt>Délai cession</div> </div> </div> </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "className": "bg-gradient-to-br from-primary to-primary/90", "data-astro-cid-ji7bltqt": true }, { "default": ($$result3) => renderTemplate` <div class="text-center text-white" data-astro-cid-ji7bltqt> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-astro-cid-ji7bltqt>
Évaluer votre fonds de commerce à Bourdeau
</h2> <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-astro-cid-ji7bltqt>
Estimation précise basée sur votre activité vigneronne et le marché de Bourdeau.
</p> <a href="/estimation" class="btn bg-white text-primary hover:bg-white/90" data-astro-cid-ji7bltqt> ${renderComponent($$result3, "Calculator", Calculator, { "className": "w-5 h-5", "data-astro-cid-ji7bltqt": true })}
Estimation gratuite
</a> </div> ` })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` <meta name="keywords"${addAttribute(meta.keywords.join(", "), "content")}> ` })}` })} `;
}, "/Users/zazouino/Downloads/voglansastro-main/src/pages/fonds-commerce-bourdeau.astro", void 0);

const $$file = "/Users/zazouino/Downloads/voglansastro-main/src/pages/fonds-commerce-bourdeau.astro";
const $$url = "/fonds-commerce-bourdeau";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FondsCommerceBourdeau,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

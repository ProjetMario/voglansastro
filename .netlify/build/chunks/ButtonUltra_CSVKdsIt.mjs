import { a as createComponent, m as maybeRenderHead, d as renderSlot, r as renderTemplate, c as createAstro, e as renderComponent, F as Fragment, u as unescapeHTML, b as addAttribute } from './astro/server_2axgzuxg.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$HeroUltra = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-gradient-to-br from-primary/10 via-white to-primary/5 py-32 overflow-hidden" data-astro-cid-bthcu5ez> <!-- Fond décoratif sophistiqué --> <div class="absolute inset-0 opacity-[0.03]" data-astro-cid-bthcu5ez> <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-3xl animate-float" data-astro-cid-bthcu5ez></div> <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary rounded-full blur-3xl" data-astro-cid-bthcu5ez></div> <div class="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-radial from-primary/20 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" data-astro-cid-bthcu5ez></div> </div> <div class="container mx-auto px-4 relative z-10" data-astro-cid-bthcu5ez> <div class="max-w-6xl mx-auto text-center" data-astro-cid-bthcu5ez> ${renderSlot($$result, $$slots["badge"])} <h1 class="text-5xl md:text-6xl lg:text-7xl font-light mb-8 tracking-tight text-foreground leading-[1.1]" data-astro-cid-bthcu5ez> ${renderSlot($$result, $$slots["title"])} </h1> <p class="text-xl md:text-2xl text-muted max-w-4xl mx-auto leading-relaxed font-light mb-16" data-astro-cid-bthcu5ez> ${renderSlot($$result, $$slots["subtitle"])} </p> <div class="flex flex-col sm:flex-row gap-6 justify-center" data-astro-cid-bthcu5ez> ${renderSlot($$result, $$slots["cta"])} </div> </div> </div> </section> `;
}, "/Users/zazouino/Downloads/voglansastro-main/src/components/ui/HeroUltra.astro", void 0);

const $$Astro$1 = createAstro("https://agencevoglans.fr");
const $$BadgeUltra = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BadgeUltra;
  const { text, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-primary/20 text-primary px-8 py-4 rounded-full text-sm font-semibold shadow-2xl shadow-primary/10 hover:scale-105 transition-all duration-500"> ${icon && renderTemplate`<div class="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(icon)}` })} </div>`} <span>${text}</span> </div>`;
}, "/Users/zazouino/Downloads/voglansastro-main/src/components/ui/BadgeUltra.astro", void 0);

const $$Astro = createAstro("https://agencevoglans.fr");
const $$ButtonUltra = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ButtonUltra;
  const { href, text, icon, variant = "primary", class: className = "" } = Astro2.props;
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`group relative bg-gradient-to-r from-primary to-primary/90 text-white px-12 py-6 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 overflow-hidden ${className}`, "class")}><div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div><div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(icon)}` })}</div><span class="relative z-10">${text}</span></a>` : renderTemplate`<button${addAttribute(`group relative bg-gradient-to-r from-primary to-primary/90 text-white px-12 py-6 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 overflow-hidden ${className}`, "class")}><div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div><div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(icon)}` })}</div><span class="relative z-10">${text}</span></button>`}`;
}, "/Users/zazouino/Downloads/voglansastro-main/src/components/ui/ButtonUltra.astro", void 0);

export { $$HeroUltra as $, $$ButtonUltra as a, $$BadgeUltra as b };

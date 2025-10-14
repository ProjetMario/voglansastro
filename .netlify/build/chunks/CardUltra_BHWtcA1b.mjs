import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderSlot, r as renderTemplate } from './astro/server_2axgzuxg.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://agencevoglans.fr");
const $$CardUltra = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardUltra;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl hover:shadow-primary/10 hover:scale-[1.02] transition-all duration-500 overflow-hidden ${className}`, "class")}> <!-- Fond décoratif --> <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-primary/10 to-transparent rounded-full translate-x-16 -translate-y-16"></div> <div class="relative z-10"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/zazouino/Downloads/voglansastro-main/src/components/ui/CardUltra.astro", void 0);

export { $$CardUltra as $ };

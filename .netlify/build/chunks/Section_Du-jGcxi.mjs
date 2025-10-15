import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderSlot, r as renderTemplate } from './astro/server_9NFxWlB3.mjs';
import 'kleur/colors';
import 'clsx';
import { c as cn } from './Base_DFz4Motd.mjs';

const $$Astro = createAstro("https://agencevoglans.fr");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const {
    className,
    size = "default",
    background = "default",
    animate = false
  } = Astro2.props;
  const sizeClasses = {
    sm: "section-sm",
    default: "section",
    // Espacement plus compact pour toutes les pages
    lg: "py-12 sm:py-16 lg:py-20"
  };
  const backgroundClasses = {
    default: "",
    muted: "bg-secondary/30",
    primary: "bg-primary text-primary-foreground"
  };
  const animateClass = animate ? "animate-on-scroll" : "";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn(
    sizeClasses[size],
    backgroundClasses[background],
    animateClass,
    className
  ), "class")}> <div class="container"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/zazouino/Downloads/voglansastro-main/src/components/ui/Section.astro", void 0);

export { $$Section as $ };

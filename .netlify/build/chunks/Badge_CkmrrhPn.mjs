import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderSlot, r as renderTemplate } from './astro/server_9NFxWlB3.mjs';
import 'kleur/colors';
import 'clsx';
import { d as getBadgeLabel, c as cn, e as getBadgeVariant } from './Base_C2k5Ezr7.mjs';

const $$Astro = createAstro("https://agencevoglans.fr");
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Badge;
  const { variant = "secondary", badge, className } = Astro2.props;
  const finalVariant = badge ? getBadgeVariant(badge) : `badge-${variant}`;
  const label = badge ? getBadgeLabel(badge) : "";
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(cn("badge", finalVariant, className), "class")}> ${badge ? label : renderTemplate`${renderSlot($$result, $$slots["default"])}`} </span>`;
}, "/Users/zazouino/Downloads/voglansastro-main/src/components/ui/Badge.astro", void 0);

export { $$Badge as $ };

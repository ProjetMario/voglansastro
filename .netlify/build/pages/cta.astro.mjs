import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_9NFxWlB3.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_DFz4Motd.mjs';
export { renderers } from '../renderers.mjs';

const $$Cta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Commencer | L'Agence de Voglans", "description": "Entrez en contact avec l'\xE9quipe pour lancer votre projet immobilier \xE0 Voglans." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container-apple max-w-3xl"> <h1 class="text-4xl font-semibold tracking-tight mb-6">Prêt à démarrer ?</h1> <p class="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
Dites-nous ce dont vous avez besoin : estimation, vente, recherche ou accompagnement sur mesure. Nous
        revenons vers vous sous 24 heures ouvrées avec les prochaines étapes.
</p> <div class="flex flex-col sm:flex-row items-center gap-4 mt-8"> <a href="mailto:contact@agencevoglans.fr" class="btn-primary">Nous écrire</a> <a href="/contact" class="btn-secondary">Formulaire de contact</a> </div> <div class="grid md:grid-cols-3 gap-6 mt-12"> <div class="apple-card"> <h3 class="font-medium text-lg">Rapide</h3> <p class="mt-2 text-[hsl(var(--muted-foreground))]">Une première réponse détaillée en moins de 24 heures ouvrées.</p> </div> <div class="apple-card"> <h3 class="font-medium text-lg">Épuré</h3> <p class="mt-2 text-[hsl(var(--muted-foreground))]">Processus clair, documents partagés et suivi transparent.</p> </div> <div class="apple-card"> <h3 class="font-medium text-lg">Humain</h3> <p class="mt-2 text-[hsl(var(--muted-foreground))]">Un interlocuteur unique qui connaît votre dossier de A à Z.</p> </div> </div> </div> </section> ` })}`;
}, "/Users/zazouino/Downloads/voglansastro-main/src/pages/cta.astro", void 0);

const $$file = "/Users/zazouino/Downloads/voglansastro-main/src/pages/cta.astro";
const $$url = "/cta";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cta,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

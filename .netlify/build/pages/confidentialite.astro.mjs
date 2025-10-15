import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_9NFxWlB3.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_DhF6jZub.mjs';
import { Shield, ArrowRight } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Confidentialite = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Politique de confidentialit\xE9 | L'Agence de Voglans", "description": "Politique de confidentialit\xE9 de L'Agence de Voglans : collecte et protection des donn\xE9es personnelles." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container-apple"> <div class="apple-card space-y-6"> <div class="badge-outline">Données personnelles</div> <h1 class="text-3xl font-semibold">Politique de confidentialité</h1> <!-- Alerte vers la page RGPD complète --> <div class="bg-primary/10 border border-primary/30 rounded-xl p-6"> <div class="flex items-start gap-4"> ${renderComponent($$result2, "Shield", Shield, { "class": "w-6 h-6 text-primary flex-shrink-0 mt-1" })} <div> <h2 class="text-lg font-semibold text-foreground mb-2">Version détaillée disponible</h2> <p class="text-muted mb-4">
Pour consulter notre politique complète de protection des données (RGPD) avec tous les détails sur vos droits et nos engagements, visitez notre page dédiée.
</p> <a href="/rgpd" class="inline-flex items-center gap-2 text-primary font-semibold hover:underline"> <span>Consulter la politique RGPD complète</span> ${renderComponent($$result2, "ArrowRight", ArrowRight, { "class": "w-4 h-4" })} </a> </div> </div> </div> <div class="space-y-4 text-[hsl(var(--color-muted-foreground))]"> <p>
L'Agence de Voglans collecte des données personnelles uniquement dans le cadre de la relation commerciale ou de la demande d'information. Les données sont exploitées par nos équipes internes et ne sont jamais revendues.
</p> <p> <strong>Collecte :</strong> formulaire de contact, estimation, inscription newsletter. Données : identité, coordonnées, caractéristiques du bien.
</p> <p> <strong>Base légale :</strong> consentement et intérêt légitime.
</p> <p> <strong>Durée de conservation :</strong> 3 ans après le dernier contact ou obligation légale.
</p> <p> <strong>Droits :</strong> accès, rectification, opposition, suppression. Envoyez votre demande à <a href="mailto:contact@agencevoglans.fr" class="text-[hsl(var(--color-primary))]">contact@agencevoglans.fr</a> en joignant une pièce d'identité.
</p> <p> <strong>Sécurité :</strong> Hébergement sécurisé, sauvegardes régulières, accès restreint aux données.
</p> <p> <strong>Cookies :</strong> uniquement des traceurs analytiques anonymisés. Vous pouvez paramétrer vos préférences via votre navigateur.
</p> </div> <p class="text-sm text-[hsl(var(--color-muted-foreground))]">Dernière mise à jour : 8 octobre 2025</p> </div> </div> </section> ` })}`;
}, "/Users/zazouino/Downloads/voglansastro-main/src/pages/confidentialite.astro", void 0);

const $$file = "/Users/zazouino/Downloads/voglansastro-main/src/pages/confidentialite.astro";
const $$url = "/confidentialite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Confidentialite,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

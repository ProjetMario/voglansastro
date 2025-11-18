# 📝 Template d'Article de Blog Optimisé SEO

## 🎯 Structure d'un Article Parfait (1500-2000 mots)

### 1. **Front Matter (Métadonnées)**

```astro
---
import Base from '@/layouts/Base.astro';
import HeroUltra from '@/components/ui/HeroUltra.astro';
import BadgeUltra from '@/components/ui/BadgeUltra.astro';
import ButtonUltra from '@/components/ui/ButtonUltra.astro';
import {
  ArrowLeft,
  [ICONES_PERTINENTES]
} from 'lucide-react';

const publishDate = new Date('YYYY-MM-DD');
const lastModified = new Date('YYYY-MM-DD');

// Article Schema pour SEO (OBLIGATOIRE)
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[TITRE PRINCIPAL - 60 caractères max]",
  "description": "[DESCRIPTION - 155 caractères max]",
  "image": "https://agencevoglans.fr/images/blog/[NOM-IMAGE].jpg",
  "author": {
    "@type": "Organization",
    "name": "L'Agence de Voglans",
    "url": "https://agencevoglans.fr"
  },
  "publisher": {
    "@type": "Organization",
    "name": "L'Agence de Voglans",
    "logo": {
      "@type": "ImageObject",
      "url": "https://agencevoglans.fr/images/logo-agence-voglans.png"
    }
  },
  "datePublished": "[DATE_PUBLICATION]T10:00:00+02:00",
  "dateModified": "[DATE_MODIFICATION]T10:00:00+02:00",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://agencevoglans.fr/blog/[SLUG-ARTICLE]"
  },
  "articleSection": "[CATEGORIE]",
  "keywords": ["[MOT-CLE-1]", "[MOT-CLE-2]", "[MOT-CLE-3]", "[MOT-CLE-4]", "[MOT-CLE-5]"]
};
---

<Base
  title="[TITRE SEO - 60 caractères max] - L'Agence de Voglans"
  description="[META DESCRIPTION - 155 caractères max]"
>
  <Fragment slot="head">
    <script type="application/ld+json" set:html={JSON.stringify(articleSchema)} />
  </Fragment>
```

---

## 📋 **Checklist SEO Obligatoire**

### ✅ **Avant d'écrire**
- [ ] Recherche de mots-clés (Google Keyword Planner, Ubersuggest)
- [ ] Analyse de la concurrence (Top 3 Google)
- [ ] Définir l'intention de recherche (informationnelle, transactionnelle)
- [ ] Créer un plan détaillé (H2, H3)

### ✅ **Pendant l'écriture**
- [ ] Titre principal (H1) : 60 caractères max, mot-clé principal au début
- [ ] Meta description : 155 caractères max, call-to-action
- [ ] URL slug : court, descriptif, mots-clés (ex: prix-immobilier-savoie-2025)
- [ ] Introduction : 100-150 mots, mot-clé principal dans les 100 premiers mots
- [ ] Structure H2/H3 : hiérarchie logique, mots-clés secondaires
- [ ] Densité mots-clés : 1-2% (naturel, pas de keyword stuffing)
- [ ] Liens internes : 3-5 vers pages estimation, services, autres articles
- [ ] Liens externes : 2-3 vers sources fiables (INSEE, DVF, notaires)
- [ ] Images : alt text descriptif, format WebP, <100KB
- [ ] Call-to-action : tous les 300-400 mots

### ✅ **Après l'écriture**
- [ ] Relecture orthographe/grammaire
- [ ] Vérification liens (internes + externes)
- [ ] Test mobile (responsive)
- [ ] Vérification Schema.org (Google Rich Results Test)
- [ ] Partage réseaux sociaux (Open Graph)

---

## 🏗️ **Structure Type d'Article**

### **1. Hero Section (Above the fold)**

```astro
<HeroUltra>
  <div slot="badge">
    <BadgeUltra text="[CATEGORIE ou DATE]" />
  </div>

  <div slot="title">
    [TITRE PRINCIPAL ACCROCHEUR]<br>
    <span class="font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
      [PARTIE MISE EN VALEUR]
    </span>
  </div>

  <div slot="subtitle">
    [SOUS-TITRE EXPLICATIF - Bénéfice pour le lecteur]
  </div>

  <div slot="cta">
    <ButtonUltra href="/estimation" text="Estimer mon bien gratuitement" />
  </div>
</HeroUltra>
```

### **2. Introduction (100-150 mots)**

```html
<section class="py-24 bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      
      <!-- Navigation retour -->
      <div class="mb-12">
        <a href="/blog" class="inline-flex items-center gap-3 ...">
          <ArrowLeft className="w-4 h-4" />
          <span>Retour au blog</span>
        </a>
      </div>

      <!-- Article Header -->
      <header class="mb-16 text-center">
        <div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <Calendar className="w-4 h-4" />
          <span>Publié le [DATE]</span>
        </div>

        <h1 class="text-4xl md:text-5xl font-black mb-6 text-foreground">
          [TITRE H1 - Mot-clé principal]
        </h1>

        <p class="text-xl text-muted leading-relaxed">
          [INTRODUCTION - Présenter le problème, annoncer la solution, inclure mot-clé principal]
        </p>
      </header>

      <!-- Introduction paragraph -->
      <div class="prose prose-lg max-w-none mb-12">
        <p class="text-lg leading-relaxed text-muted">
          [Paragraphe d'introduction - Contexte, enjeux, ce que le lecteur va apprendre]
        </p>
      </div>
```

### **3. Table des Matières (Optionnel mais recommandé pour articles >1500 mots)**

```html
      <!-- Table des matières -->
      <div class="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <List className="w-6 h-6 text-primary" />
          <span>Au sommaire</span>
        </h2>
        <ul class="space-y-3">
          <li><a href="#section-1" class="text-primary hover:underline">→ [Titre Section 1]</a></li>
          <li><a href="#section-2" class="text-primary hover:underline">→ [Titre Section 2]</a></li>
          <li><a href="#section-3" class="text-primary hover:underline">→ [Titre Section 3]</a></li>
          <li><a href="#section-4" class="text-primary hover:underline">→ [Titre Section 4]</a></li>
        </ul>
      </div>
```

### **4. Sections de Contenu (3-5 sections H2)**

```html
      <!-- Section 1 -->
      <article id="section-1" class="mb-20">
        <h2 class="text-3xl font-bold mb-8 flex items-center gap-4">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <span>[TITRE H2 - Mot-clé secondaire]</span>
        </h2>

        <div class="prose prose-lg max-w-none">
          <p class="text-lg leading-relaxed text-muted mb-6">
            [Paragraphe introductif de la section - 100-150 mots]
          </p>

          <!-- Sous-section H3 -->
          <h3 class="text-2xl font-semibold mb-4 text-foreground">
            [TITRE H3 - Mot-clé longue traîne]
          </h3>

          <p class="text-lg leading-relaxed text-muted mb-6">
            [Contenu détaillé - 150-200 mots]
          </p>

          <!-- Liste à puces (améliore la lisibilité) -->
          <ul class="space-y-3 mb-8">
            <li class="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span class="text-muted">[Point clé 1]</span>
            </li>
            <li class="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span class="text-muted">[Point clé 2]</span>
            </li>
            <li class="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span class="text-muted">[Point clé 3]</span>
            </li>
          </ul>

          <!-- Encadré statistique (Featured Snippet) -->
          <div class="bg-gradient-to-br from-primary/10 to-primary/5 border-l-4 border-primary rounded-r-xl p-6 my-8">
            <div class="flex items-start gap-4">
              <Award className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h4 class="font-bold text-lg mb-2 text-foreground">💡 Chiffre clé</h4>
                <p class="text-muted">
                  [Statistique importante avec source - Optimisé pour Featured Snippet Google]
                </p>
                <p class="text-sm text-muted mt-2 italic">
                  Source : [Nom source + lien]
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- CTA intermédiaire (tous les 300-400 mots) -->
      <div class="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center mb-20">
        <h3 class="text-2xl font-bold text-white mb-4">
          Besoin d'une estimation précise ?
        </h3>
        <p class="text-white/90 mb-6 text-lg">
          Notre expertise locale vous garantit une estimation fiable sous 48h
        </p>
        <ButtonUltra href="/estimation" text="Estimer gratuitement" variant="white" />
      </div>
```

### **5. Tableau de Données (Optimisé SEO)**

```html
      <!-- Tableau (très bon pour SEO) -->
      <div class="overflow-x-auto mb-12">
        <table class="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
          <thead class="bg-primary text-white">
            <tr>
              <th class="px-6 py-4 text-left font-semibold">[Colonne 1]</th>
              <th class="px-6 py-4 text-left font-semibold">[Colonne 2]</th>
              <th class="px-6 py-4 text-left font-semibold">[Colonne 3]</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr class="hover:bg-primary/5 transition-colors">
              <td class="px-6 py-4 font-medium text-foreground">[Donnée 1]</td>
              <td class="px-6 py-4 text-muted">[Donnée 2]</td>
              <td class="px-6 py-4 text-muted">[Donnée 3]</td>
            </tr>
            <!-- Répéter pour chaque ligne -->
          </tbody>
        </table>
        <p class="text-sm text-muted mt-4 italic">
          Source : [Nom source] - Données [DATE]
        </p>
      </div>
```

### **6. FAQ Section (Optimisé Featured Snippet)**

```html
      <!-- FAQ (excellent pour SEO + Featured Snippets) -->
      <section class="mb-20">
        <h2 class="text-3xl font-bold mb-12 text-center">
          Questions fréquentes
        </h2>

        <div class="space-y-6">
          <!-- Question 1 -->
          <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 class="text-xl font-semibold mb-3 text-foreground flex items-start gap-3">
              <span class="text-primary">Q:</span>
              <span>[Question précise avec mot-clé longue traîne ?]</span>
            </h3>
            <div class="pl-8">
              <p class="text-muted leading-relaxed">
                <span class="font-semibold text-primary">R:</span> [Réponse concise et complète - 50-100 mots]
              </p>
            </div>
          </div>

          <!-- Répéter pour 5-8 questions -->
        </div>
      </section>
```

### **7. Conclusion + CTA Final**

```html
      <!-- Conclusion -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8">Conclusion</h2>
        <div class="prose prose-lg max-w-none">
          <p class="text-lg leading-relaxed text-muted mb-6">
            [Résumé des points clés - 100-150 mots]
          </p>
          <p class="text-lg leading-relaxed text-muted">
            [Call-to-action naturel vers vos services]
          </p>
        </div>
      </section>

      <!-- CTA Final -->
      <div class="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 text-center">
        <h3 class="text-3xl font-bold mb-4 text-foreground">
          Prêt à passer à l'action ?
        </h3>
        <p class="text-xl text-muted mb-8 max-w-2xl mx-auto">
          Notre équipe locale vous accompagne dans votre projet immobilier en Savoie
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <ButtonUltra href="/estimation" text="Estimer mon bien" />
          <ButtonUltra href="/contact" text="Nous contacter" variant="secondary" />
        </div>
      </div>
```

### **8. Liens Internes (Obligatoire)**

```html
      <!-- Articles connexes -->
      <section class="mt-20 pt-12 border-t border-gray-200">
        <h2 class="text-2xl font-bold mb-8">Articles connexes</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Article 1 -->
          <a href="/blog/[slug-article-1]" class="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-primary transition-all">
            <h3 class="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
              [Titre Article 1]
            </h3>
            <p class="text-muted text-sm">
              [Extrait court]
            </p>
          </a>

          <!-- Répéter pour 2-3 articles -->
        </div>
      </section>

    </div>
  </div>
</section>
```

---

## 🎨 **Éléments Visuels Recommandés**

### **Images**

```html
<!-- Image avec alt text optimisé -->
<figure class="my-12">
  <img 
    src="/images/blog/[nom-image].webp" 
    alt="[Description détaillée avec mots-clés - 125 caractères max]"
    class="w-full rounded-2xl shadow-xl"
    loading="lazy"
    width="1200"
    height="675"
  />
  <figcaption class="text-sm text-muted mt-4 text-center italic">
    [Légende descriptive]
  </figcaption>
</figure>
```

### **Cartes Statistiques**

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
  <div class="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 text-center">
    <div class="text-4xl font-black text-primary mb-2">[CHIFFRE]</div>
    <div class="text-sm text-muted">[Description]</div>
  </div>
  <!-- Répéter pour 2-3 stats -->
</div>
```

---

## 📊 **Mots-Clés : Stratégie d'Intégration**

### **Densité Optimale**

- **Mot-clé principal** : 1-2% (10-20 fois dans un article de 1500 mots)
- **Mots-clés secondaires** : 0.5-1% (5-10 fois)
- **Mots-clés longue traîne** : 2-3 fois

### **Emplacements Stratégiques**

1. ✅ Titre H1 (début si possible)
2. ✅ URL slug
3. ✅ Meta description
4. ✅ 100 premiers mots de l'introduction
5. ✅ Titres H2/H3 (au moins 2-3)
6. ✅ Alt text images (1-2 images)
7. ✅ Conclusion
8. ✅ Liens internes (anchor text)

### **Exemple de Distribution**
Pour un article sur "Prix immobilier Savoie 2025" :

- **Mot-clé principal** : "prix immobilier Savoie 2025" (15 fois)
- **Secondaires** :
  - "marché immobilier Savoie" (8 fois)
  - "estimation immobilière Savoie" (6 fois)
  - "tendances immobilier 2025" (5 fois)
- **Longue traîne** :
  - "combien coûte une maison en Savoie" (2 fois)
  - "évolution prix immobilier Chambéry" (2 fois)

---

## 🔗 **Stratégie de Liens**

### **Liens Internes (3-5 minimum)**

```html
<!-- Lien vers page estimation -->
<a href="/estimation" class="text-primary hover:underline font-semibold">
  estimation immobilière gratuite
</a>

<!-- Lien vers commune -->
<a href="/estimation/chambery" class="text-primary hover:underline">
  estimer votre bien à Chambéry
</a>

<!-- Lien vers autre article -->
<a href="/blog/investir-voglans-savoie" class="text-primary hover:underline">
  investir à Voglans
</a>
```

### **Liens Externes (2-3 vers sources fiables)**

```html
<!-- Source officielle -->
<a href="https://www.data.gouv.fr/fr/datasets/demandes-de-valeurs-foncieres/" 
   target="_blank" 
   rel="noopener noreferrer"
   class="text-primary hover:underline">
  données DVF (Demandes de Valeurs Foncières)
</a>

<!-- Organisme reconnu -->
<a href="https://www.notaires.fr/fr/immobilier-fiscalit%C3%A9" 
   target="_blank" 
   rel="noopener noreferrer"
   class="text-primary hover:underline">
  Chambre des Notaires
</a>
```

---

## ✍️ **Bonnes Pratiques Rédactionnelles**

### **Style d'Écriture**
- ✅ Phrases courtes (15-20 mots max)
- ✅ Paragraphes courts (3-4 lignes max)
- ✅ Voix active plutôt que passive
- ✅ Ton professionnel mais accessible
- ✅ Tutoiement ou vouvoiement cohérent
- ✅ Éviter le jargon technique (ou l'expliquer)

### **Lisibilité**
- ✅ Listes à puces fréquentes
- ✅ Sous-titres tous les 200-300 mots
- ✅ Encadrés pour points importants
- ✅ Gras pour mots-clés importants (avec modération)
- ✅ Espaces blancs généreux

### **Engagement**
- ✅ Questions rhétoriques
- ✅ Exemples concrets et locaux
- ✅ Chiffres et statistiques
- ✅ Témoignages ou cas pratiques
- ✅ Call-to-action clairs

---

## 📱 **Optimisation Mobile**

```html
<!-- Responsive design -->
<div class="text-base md:text-lg"> <!-- Taille texte adaptative -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> <!-- Grille responsive -->
<div class="px-4 md:px-6 lg:px-8"> <!-- Padding adaptatif -->
```

---

## 🚀 **Checklist Publication**

### **Avant Publication**
- [ ] Relecture complète (orthographe, grammaire)
- [ ] Vérification liens (tous fonctionnels)
- [ ] Images optimisées (<100KB, WebP)
- [ ] Alt text sur toutes les images
- [ ] Schema.org validé (Google Rich Results Test)
- [ ] Meta description accrocheuse
- [ ] URL slug optimisé
- [ ] Test mobile (responsive)

### **Après Publication**
- [ ] Soumettre URL à Google Search Console
- [ ] Partager sur réseaux sociaux
- [ ] Ajouter aux articles connexes d'autres posts
- [ ] Créer liens internes depuis anciennes pages
- [ ] Surveiller performances (Google Analytics)
- [ ] Mettre à jour régulièrement (tous les 6 mois)

---

## 📈 **KPIs à Suivre**

### **Métriques SEO**
- Position moyenne Google (objectif : Top 3)
- Impressions (vues dans résultats Google)
- CTR (taux de clic, objectif : >3%)
- Backlinks (liens entrants)

### **Métriques Engagement**
- Temps de lecture moyen (objectif : >3 min)
- Taux de rebond (objectif : <60%)
- Pages par session (objectif : >2)
- Conversions (demandes d'estimation)

---

## 💡 **Idées d'Articles pour L'Agence de Voglans**

### **Priorité 1 (Mots-clés forte recherche)**
1. "Prix immobilier 2025 en Savoie : analyse par commune"
2. "Vendre sa maison à Chambéry : 10 conseils d'expert"
3. "Investir à Aix-les-Bains : opportunités et rendements"
4. "Comment estimer la valeur de son bien immobilier ?"
5. "Marché immobilier Savoie : bilan 2024 et prévisions 2025"

### **Priorité 2 (Longue traîne)**
6. "Acheter au bord du lac du Bourget : guide complet"
7. "Quartiers de Chambéry : où investir en 2025 ?"
8. "Frais de notaire en Savoie : calcul et optimisation"
9. "DPE et rénovation énergétique : impact sur la valeur"
10. "Technopôle Savoie Technolac : investir près des emplois"

### **Priorité 3 (Saisonnier)**
11. "Vendre en hiver ou au printemps ? Meilleure période en Savoie"
12. "Marché immobilier été 2025 : tendances lac du Bourget"
13. "Rentrée scolaire : acheter près des écoles en Savoie"

---

## 🎯 **Objectifs par Article**

- **Trafic organique** : 100-300 visiteurs/mois après 3 mois
- **Position Google** : Top 5 sur mot-clé principal après 6 mois
- **Conversions** : 2-5 demandes d'estimation/mois par article
- **Backlinks** : 1-3 liens entrants après 6 mois

---

**Prêt à créer votre premier article ? Utilisez ce template et suivez la checklist ! 🚀**

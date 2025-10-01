#!/bin/bash

# Script de génération automatique des pages individuelles par ville
# Utilisation: ./generate-pages.sh

set -e

# Répertoire de destination (absolu)
PAGES_DIR="/Users/zazouino/Downloads/voglansastro-main/src/pages"

# Données pour les fonds de commerce
declare -A FONDS_COMMERCE_DATA=(
    ["chambery"]="280k€ CA • 18% rentabilité"
    ["aix-les-bains"]="320k€ CA • 22% rentabilité"
    ["le-bourget-du-lac"]="380k€ CA • 25% rentabilité"
    ["la-motte-servolex"]="220k€ CA • 16% rentabilité"
    ["bassens"]="190k€ CA • 14% rentabilité"
    ["la-ravoire"]="160k€ CA • 12% rentabilité"
    ["cognin"]="140k€ CA • 11% rentabilité"
    ["barberaz"]="150k€ CA • 13% rentabilité"
    ["saint-alban-leysse"]="170k€ CA • 15% rentabilité"
    ["voglans"]="145k€ CA • 14% rentabilité"
    ["tresserve"]="290k€ CA • 20% rentabilité"
    ["viviers-du-lac"]="260k€ CA • 18% rentabilité"
    ["bourdeau"]="340k€ CA • 24% rentabilité"
    ["montmelian"]="120k€ CA • 10% rentabilité"
    ["saint-pierre-d-albigny"]="95k€ CA • 8% rentabilité"
)

# Données pour les immeubles de rapport
declare -A IMMEUBLES_RAPPORT_DATA=(
    ["chambery"]="3 200 €/m² • 7.5% rendement"
    ["aix-les-bains"]="3 800 €/m² • 8.2% rendement"
    ["le-bourget-du-lac"]="4 500 €/m² • 9.1% rendement"
    ["la-motte-servolex"]="2 900 €/m² • 6.8% rendement"
    ["bassens"]="2 700 €/m² • 6.2% rendement"
    ["la-ravoire"]="2 500 €/m² • 5.9% rendement"
    ["cognin"]="2 300 €/m² • 5.5% rendement"
    ["barberaz"]="2 400 €/m² • 5.8% rendement"
    ["saint-alban-leysse"]="2 600 €/m² • 6.3% rendement"
    ["voglans"]="2 450 €/m² • 6.1% rendement"
    ["tresserve"]="3 500 €/m² • 8.0% rendement"
    ["viviers-du-lac"]="3 200 €/m² • 7.3% rendement"
    ["bourdeau"]="4 200 €/m² • 8.8% rendement"
    ["montmelian"]="2 100 €/m² • 5.2% rendement"
    ["saint-pierre-d-albigny"]="1 900 €/m² • 4.8% rendement"
)

# Données pour les propriétés de prestige
declare -A PROPRIETES_PRESTIGE_DATA=(
    ["chambery"]="1.2M€ • Vue montagnes"
    ["aix-les-bains"]="1.8M€ • Bord du lac"
    ["le-bourget-du-lac"]="2.5M€ • Domaine privé"
    ["la-motte-servolex"]="950k€ • Villa moderne"
    ["bassens"]="880k€ • Jardin paysager"
    ["cognin"]="820k€ • Contemporaine"
    ["barberaz"]="890k€ • Vue dégagée"
    ["saint-alban-leysse"]="1.1M€ • Parc arboré"
    ["voglans"]="860k€ • Architecture design"
    ["tresserve"]="1.6M€ • Pied du lac"
    ["viviers-du-lac"]="1.4M€ • Vue panoramique"
    ["bourdeau"]="2.2M€ • Propriété vignoble"
    ["montmelian"]="780k€ • Maison bourgeoise"
    ["challes-les-eaux"]="920k€ • Villa thermale"
)

# Liste des villes
VILLES=(
    "chambery" "aix-les-bains" "le-bourget-du-lac" "la-motte-servolex" "bassens"
    "la-ravoire" "cognin" "barberaz" "saint-alban-leysse" "voglans"
    "tresserve" "viviers-du-lac" "bourdeau" "montmelian" "saint-pierre-d-albigny"
    "challes-les-eaux"
)

# Création du répertoire s'il n'existe pas
mkdir -p "$PAGES_DIR"

echo "🚀 Génération des pages individuelles par ville..."
echo ""

# Fonction pour créer une page fonds de commerce
create_fonds_commerce_page() {
    local ville=$1
    local ville_display=$(echo $ville | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
    local data=${FONDS_COMMERCE_DATA[$ville]}

    if [[ -n "$data" ]]; then
        cat > "$PAGES_DIR/fonds-commerce-$ville.astro" << EOF
---
import Base from '@/layouts/Base.astro';
import Section from '@/components/ui/Section.astro';
import Badge from '@/components/ui/Badge.astro';
import { Calculator, Euro, TrendingUp } from 'lucide-react';

const meta = {
  title: "Fonds de Commerce $ville_display | Cession Entreprise Savoie",
  description: "Cédez votre fonds de commerce à $ville_display au meilleur prix. Expertise locale et réseau d'acquéreurs qualifiés.",
  keywords: ["fonds commerce $ville", "cession entreprise $ville"]
};
---

<Base title={meta.title} description={meta.description}>
  <Fragment slot="head">
    <meta name="keywords" content={meta.keywords.join(', ')} />
  </Fragment>

  <Section size="lg" className="bg-gradient-to-b from-primary/5 to-background">
    <div class="text-center mb-16">
      <Badge variant="success" className="mb-6">
        $ville_display
      </Badge>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        Fonds de Commerce <span class="gradient-text">$ville_display</span>
      </h1>
      <p class="text-xl text-muted max-w-3xl mx-auto mb-12">
        Cédez votre activité commerciale à $ville_display avec notre expertise du marché local.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Euro className="w-6 h-6 text-primary" />
          </div>
          <div class="text-3xl font-bold text-primary mb-2">$(echo $data | cut -d'•' -f1 | sed 's/ //g')</div>
          <div class="text-sm text-muted font-medium">CA moyen</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <div class="text-3xl font-bold text-primary mb-2">$(echo $data | cut -d'•' -f2 | sed 's/ //g')</div>
          <div class="text-sm text-muted font-medium">Rentabilité</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Calculator className="w-6 h-6 text-primary" />
          </div>
          <div class="text-3xl font-bold text-primary mb-2">45j</div>
          <div class="text-sm text-muted font-medium">Délai cession</div>
        </div>
      </div>
    </div>
  </Section>

  <Section className="bg-gradient-to-br from-primary to-primary/90">
    <div class="text-center text-white">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        Évaluer votre fonds de commerce à $ville_display
      </h2>
      <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        Estimation précise basée sur votre chiffre d'affaires et le marché local.
      </p>
      <a href="/estimation" class="btn bg-white text-primary hover:bg-white/90">
        <Calculator className="w-5 h-5" />
        Estimation gratuite
      </a>
    </div>
  </Section>
</Base>
EOF
        echo "✅ Créée: fonds-commerce-$ville.astro"
    fi
}

# Fonction pour créer une page immeuble de rapport
create_immeuble_rapport_page() {
    local ville=$1
    local ville_display=$(echo $ville | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
    local data=${IMMEUBLES_RAPPORT_DATA[$ville]}

    if [[ -n "$data" ]]; then
        cat > "$PAGES_DIR/immeuble-rapport-$ville.astro" << EOF
---
import Base from '@/layouts/Base.astro';
import Section from '@/components/ui/Section.astro';
import Badge from '@/components/ui/Badge.astro';
import { Calculator, Euro, TrendingUp } from 'lucide-react';

const meta = {
  title: "Immeuble de Rapport $ville_display | Investissement Locatif Savoie",
  description: "Investissez dans un immeuble de rapport à $ville_display. Rendement attractif et gestion locative simplifiée.",
  keywords: ["immeuble rapport $ville", "investissement locatif $ville"]
};
---

<Base title={meta.title} description={meta.description}>
  <Fragment slot="head">
    <meta name="keywords" content={meta.keywords.join(', ')} />
  </Fragment>

  <Section size="lg" className="bg-gradient-to-b from-primary/5 to-background">
    <div class="text-center mb-16">
      <Badge variant="success" className="mb-6">
        $ville_display
      </Badge>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        Immeuble de Rapport <span class="gradient-text">$ville_display</span>
      </h1>
      <p class="text-xl text-muted max-w-3xl mx-auto mb-12">
        Investissez dans l'immobilier locatif à $ville_display avec des rendements attractifs.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Euro className="w-6 h-6 text-primary" />
          </div>
          <div class="text-3xl font-bold text-primary mb-2">$(echo $data | cut -d'•' -f1 | sed 's/ //g')</div>
          <div class="text-sm text-muted font-medium">Prix au m²</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <div class="text-3xl font-bold text-primary mb-2">$(echo $data | cut -d'•' -f2 | sed 's/ //g')</div>
          <div class="text-sm text-muted font-medium">Rendement</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Calculator className="w-6 h-6 text-primary" />
          </div>
          <div class="text-3xl font-bold text-primary mb-2">850k€</div>
          <div class="text-sm text-muted font-medium">Prix moyen</div>
        </div>
      </div>
    </div>
  </Section>

  <Section className="bg-gradient-to-br from-primary to-primary/90">
    <div class="text-center text-white">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        Étude d'investissement à $ville_display
      </h2>
      <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        Analyse personnalisée de rentabilité et accompagnement complet.
      </p>
      <a href="/estimation" class="btn bg-white text-primary hover:bg-white/90">
        <Calculator className="w-5 h-5" />
        Étude gratuite
      </a>
    </div>
  </Section>
</Base>
EOF
        echo "✅ Créée: immeuble-rapport-$ville.astro"
    fi
}

# Fonction pour créer une page propriété de prestige
create_propriete_prestige_page() {
    local ville=$1
    local ville_display=$(echo $ville | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
    local data=${PROPRIETES_PRESTIGE_DATA[$ville]}

    if [[ -n "$data" ]]; then
        cat > "$PAGES_DIR/propriete-prestige-$ville.astro" << EOF
---
import Base from '@/layouts/Base.astro';
import Section from '@/components/ui/Section.astro';
import Badge from '@/components/ui/Badge.astro';
import { Calculator, Euro, Crown } from 'lucide-react';

const meta = {
  title: "Propriété de Prestige $ville_display | Demeure d'Exception Savoie",
  description: "Découvrez les propriétés de prestige à $ville_display. Villas haut de gamme et demeures d'exception.",
  keywords: ["propriete prestige $ville", "demeure caractere $ville"]
};
---

<Base title={meta.title} description={meta.description}>
  <Fragment slot="head">
    <meta name="keywords" content={meta.keywords.join(', ')} />
  </Fragment>

  <Section size="lg" className="bg-gradient-to-b from-primary/5 to-background">
    <div class="text-center mb-16">
      <Badge variant="success" className="mb-6">
        $ville_display
      </Badge>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        Propriété de Prestige <span class="gradient-text">$ville_display</span>
      </h1>
      <p class="text-xl text-muted max-w-3xl mx-auto mb-12">
        Découvrez les demeures d'exception à $ville_display, véritables joyaux immobiliers.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Euro className="w-6 h-6 text-primary" />
          </div>
          <div class="text-3xl font-bold text-primary mb-2">$(echo $data | cut -d'•' -f1 | sed 's/ //g')</div>
          <div class="text-sm text-muted font-medium">Prix moyen</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Crown className="w-6 h-6 text-primary" />
          </div>
          <div class="text-3xl font-bold text-primary mb-2">15</div>
          <div class="text-sm text-muted font-medium">Biens d'exception</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Calculator className="w-6 h-6 text-primary" />
          </div>
          <div class="text-3xl font-bold text-primary mb-2">8 mois</div>
          <div class="text-sm text-muted font-medium">Délai de vente</div>
        </div>
      </div>
    </div>
  </Section>

  <Section className="bg-gradient-to-br from-primary to-primary/90">
    <div class="text-center text-white">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        Découvrir les propriétés d'exception à $ville_display
      </h2>
      <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        Présentation confidentielle et visite privée des demeures les plus remarquables.
      </p>
      <a href="/estimation" class="btn bg-white text-primary hover:bg-white/90">
        <Crown className="w-5 h-5" />
        Demande de présentation
      </a>
    </div>
  </Section>
</Base>
EOF
        echo "✅ Créée: propriete-prestige-$ville.astro"
    fi
}

# Compteurs pour le résumé
fonds_count=0
immeuble_count=0
prestige_count=0

# Génération des pages fonds de commerce
echo "📄 Génération des pages Fonds de Commerce..."
for ville in "${VILLES[@]}"; do
    if [[ -n "${FONDS_COMMERCE_DATA[$ville]}" ]]; then
        create_fonds_commerce_page "$ville"
        ((fonds_count++))
    fi
done

echo ""

# Génération des pages immeubles de rapport
echo "📄 Génération des pages Immeubles de Rapport..."
for ville in "${VILLES[@]}"; do
    if [[ -n "${IMMEUBLES_RAPPORT_DATA[$ville]}" ]]; then
        create_immeuble_rapport_page "$ville"
        ((immeuble_count++))
    fi
done

echo ""

# Génération des pages propriétés de prestige
echo "📄 Génération des pages Propriétés de Prestige..."
for ville in "${VILLES[@]}"; do
    if [[ -n "${PROPRIETES_PRESTIGE_DATA[$ville]}" ]]; then
        create_propriete_prestige_page "$ville"
        ((prestige_count++))
    fi
done

echo ""
echo "🎉 Génération terminée !"
echo ""
echo "📊 Résumé :"
echo "   • Fonds de Commerce : $fonds_count pages créées"
echo "   • Immeubles de Rapport : $immeuble_count pages créées"
echo "   • Propriétés de Prestige : $prestige_count pages créées"
echo ""
echo "🔗 Total : $(($fonds_count + $immeuble_count + $prestige_count)) pages individuelles créées"
echo ""
echo "✅ Toutes les pages sont maintenant accessibles depuis les liens du site !"

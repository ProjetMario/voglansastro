#!/bin/bash

echo '🚀 Génération des pages de fonds-commerce manquantes...'
echo ''

# Liste des villes manquantes pour fonds-commerce
MISSING_VILLES=('chambery' 'le-bourget-du-lac' 'la-motte-servolex' 'bassens' 'la-ravoire' 'cognin' 'saint-alban-leysse' 'voglans' 'tresserve' 'viviers-du-lac' 'bourdeau' 'saint-pierre-d-albigny' 'challes-les-eaux')

# Données pour chaque ville
declare -A VILLE_DATA=(
    ['chambery']='280k€ CA • 18% rentabilité • Chambéry Centre'
    ['le-bourget-du-lac']='380k€ CA • 25% rentabilité • Le Bourget-du-Lac'
    ['la-motte-servolex']='220k€ CA • 16% rentabilité • La Motte-Servolex'
    ['bassens']='190k€ CA • 14% rentabilité • Bassens'
    ['la-ravoire']='160k€ CA • 12% rentabilité • La Ravoire'
    ['cognin']='140k€ CA • 11% rentabilité • Cognin'
    ['saint-alban-leysse']='170k€ CA • 15% rentabilité • Saint-Alban-Leysse'
    ['voglans']='145k€ CA • 14% rentabilité • Voglans'
    ['tresserve']='290k€ CA • 20% rentabilité • Tresserve'
    ['viviers-du-lac']='260k€ CA • 18% rentabilité • Viviers-du-Lac'
    ['bourdeau']='340k€ CA • 24% rentabilité • Bourdeau'
    ['saint-pierre-d-albigny']='95k€ CA • 8% rentabilité • Saint-Pierre-d\'Albigny'
    ['challes-les-eaux']='130k€ CA • 11% rentabilité • Challes-les-Eaux'
)

declare -A VILLE_CA=(
    ['chambery']='280k€'
    ['le-bourget-du-lac']='380k€'
    ['la-motte-servolex']='220k€'
    ['bassens']='190k€'
    ['la-ravoire']='160k€'
    ['cognin']='140k€'
    ['saint-alban-leysse']='170k€'
    ['voglans']='145k€'
    ['tresserve']='290k€'
    ['viviers-du-lac']='260k€'
    ['bourdeau']='340k€'
    ['saint-pierre-d-albigny']='95k€'
    ['challes-les-eaux']='130k€'
)

declare -A VILLE_RENTABILITE=(
    ['chambery']='18%'
    ['le-bourget-du-lac']='25%'
    ['la-motte-servolex']='16%'
    ['bassens']='14%'
    ['la-ravoire']='12%'
    ['cognin']='11%'
    ['saint-alban-leysse']='15%'
    ['voglans']='14%'
    ['tresserve']='20%'
    ['viviers-du-lac']='18%'
    ['bourdeau']='24%'
    ['saint-pierre-d-albigny']='8%'
    ['challes-les-eaux']='11%'
)

declare -A VILLE_SPECIALITE=(
    ['chambery']='Chambéry Centre'
    ['le-bourget-du-lac']='Le Bourget-du-Lac'
    ['la-motte-servolex']='La Motte-Servolex'
    ['bassens']='Bassens'
    ['la-ravoire']='La Ravoire'
    ['cognin']='Cognin'
    ['saint-alban-leysse']='Saint-Alban-Leysse'
    ['voglans']='Voglans'
    ['tresserve']='Tresserve'
    ['viviers-du-lac']='Viviers-du-Lac'
    ['bourdeau']='Bourdeau'
    ['saint-pierre-d-albigny']='Saint-Pierre-d\'Albigny'
    ['challes-les-eaux']='Challes-les-Eaux'
)

declare -A VILLE_DESCRIPTION=(
    ['chambery']='Cédez votre fonds de commerce à Chambéry avec notre expertise du marché local.'
    ['le-bourget-du-lac']='Cédez votre activité au Bourget-du-Lac avec notre connaissance du secteur nautique.'
    ['la-motte-servolex']='Cédez votre commerce à La Motte-Servolex avec notre réseau d\'acquéreurs qualifiés.'
    ['bassens']='Cédez votre fonds de commerce à Bassens au meilleur prix du marché.'
    ['la-ravoire']='Cédez votre activité à La Ravoire avec notre expertise locale.'
    ['cognin']='Cédez votre commerce à Cognin avec notre connaissance du marché local.'
    ['saint-alban-leysse']='Cédez votre fonds de commerce à Saint-Alban-Leysse avec notre réseau d\'acquéreurs.'
    ['voglans']='Cédez votre activité à Voglans avec notre expertise du marché local.'
    ['tresserve']='Cédez votre commerce à Tresserve avec notre connaissance du secteur haut-de-gamme.'
    ['viviers-du-lac']='Cédez votre fonds de commerce à Viviers-du-Lac avec notre réseau d\'acquéreurs qualifiés.'
    ['bourdeau']='Cédez votre activité à Bourdeau avec notre expertise du marché vigneron.'
    ['saint-pierre-d-albigny']='Cédez votre commerce à Saint-Pierre-d\'Albigny au meilleur prix.'
    ['challes-les-eaux']='Cédez votre fonds de commerce à Challes-les-Eaux avec notre connaissance du marché thermal.'
)

declare -A VILLE_EVALUATION=(
    ['chambery']='Estimation précise basée sur votre chiffre d\'affaires et le marché de Chambéry.'
    ['le-bourget-du-lac']='Estimation précise basée sur votre activité nautique et le marché du Bourget-du-Lac.'
    ['la-motte-servolex']='Estimation précise basée sur votre chiffre d\'affaires et le marché de La Motte-Servolex.'
    ['bassens']='Estimation précise basée sur votre fonds de commerce et le marché de Bassens.'
    ['la-ravoire']='Estimation précise basée sur votre activité et le marché de La Ravoire.'
    ['cognin']='Estimation précise basée sur votre commerce et le marché de Cognin.'
    ['saint-alban-leysse']='Estimation précise basée sur votre fonds de commerce et le marché de Saint-Alban-Leysse.'
    ['voglans']='Estimation précise basée sur votre activité et le marché de Voglans.'
    ['tresserve']='Estimation précise basée sur votre commerce haut-de-gamme et le marché de Tresserve.'
    ['viviers-du-lac']='Estimation précise basée sur votre fonds de commerce et le marché de Viviers-du-Lac.'
    ['bourdeau']='Estimation précise basée sur votre activité vigneronne et le marché de Bourdeau.'
    ['saint-pierre-d-albigny']='Estimation précise basée sur votre commerce et le marché de Saint-Pierre-d\'Albigny.'
    ['challes-les-eaux']='Estimation précise basée sur votre fonds de commerce thermal et le marché de Challes-les-Eaux.'
)

# Fonction pour créer une page fonds-commerce
create_fonds_commerce_page() {
    local ville=$1
    local ville_display=$(echo $ville | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
    local ville_kebab=$ville
    local filename="fonds-commerce-${ville_kebab}.astro"

    # Convertir les noms avec caractères spéciaux
    if [[ $ville == "saint-pierre-d-albigny" ]]; then
        ville_display="Saint-Pierre-d'Albigny"
    elif [[ $ville == "challes-les-eaux" ]]; then
        ville_display="Challes-les-Eaux"
    elif [[ $ville == "le-bourget-du-lac" ]]; then
        ville_display="Le Bourget-du-Lac"
    elif [[ $ville == "la-motte-servolex" ]]; then
        ville_display="La Motte-Servolex"
    elif [[ $ville == "saint-alban-leysse" ]]; then
        ville_display="Saint-Alban-Leysse"
    elif [[ $ville == "viviers-du-lac" ]]; then
        ville_display="Viviers-du-Lac"
    fi

    cat > "../src/pages/$filename" << EOF
---
import Base from '@/layouts/Base.astro';
import Section from '@/components/ui/Section.astro';
import Badge from '@/components/ui/Badge.astro';
import { Calculator, Euro, TrendingUp } from 'lucide-react';

const meta = {
  title: "Fonds de Commerce ${ville_display} | Cession Entreprise Savoie",
  description: "Cédez votre fonds de commerce à ${ville_display} au meilleur prix. Expertise locale et réseau d'acquéreurs qualifiés.",
  keywords: ["fonds commerce ${ville_kebab}", "cession entreprise ${ville_kebab}"]
};
---

<Base title={meta.title} description={meta.description}>
  <Fragment slot="head">
    <meta name="keywords" content={meta.keywords.join(', ')} />
  </Fragment>

  <Section size="lg" className="bg-gradient-to-b from-primary/5 to-background">
    <div class="text-center mb-16">
      <Badge variant="success" className="mb-6">
        ${VILLE_SPECIALITE[$ville]}
      </Badge>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        Fonds de Commerce <span class="gradient-text">${ville_display}</span>
      </h1>
      <p class="text-xl text-muted max-w-3xl mx-auto mb-12">
        ${VILLE_DESCRIPTION[$ville]}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Euro className="w-6 h-6 text-primary" />
          </div>
          <div class="text-3xl font-bold text-primary mb-2">${VILLE_CA[$ville]}</div>
          <div class="text-sm text-muted font-medium">CA moyen</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <div class="text-3xl font-bold text-primary mb-2">${VILLE_RENTABILITE[$ville]}</div>
          <div class="text-sm text-muted font-medium">Rentabilité</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Calculator className="w-6 h-6 text-primary" />
          </div>
          <div class="text-3xl font-bold text-primary mb-2">38j</div>
          <div class="text-sm text-muted font-medium">Délai cession</div>
        </div>
      </div>
    </div>
  </Section>

  <Section className="bg-gradient-to-br from-primary to-primary/90">
    <div class="text-center text-white">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        Évaluer votre fonds de commerce à ${ville_display}
      </h2>
      <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        ${VILLE_EVALUATION[$ville]}
      </p>
      <a href="/estimation" class="btn bg-white text-primary hover:bg-white/90">
        <Calculator className="w-5 h-5" />
        Estimation gratuite
      </a>
    </div>
  </Section>
</Base>

<style>
  .gradient-text {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
</style>
EOF

    echo "✅ Créée: $filename"
}

# Créer les pages manquantes
for ville in "${MISSING_VILLES[@]}"; do
    create_fonds_commerce_page "$ville"
done

echo ''
echo '🎉 Toutes les pages de fonds-commerce manquantes ont été créées !'
echo "📊 Total: ${#MISSING_VILLES[@]} nouvelles pages"
echo ''
echo '🔗 URLs maintenant disponibles:'
for ville in "${MISSING_VILLES[@]}"; do
    echo "✅ http://localhost:4321/fonds-commerce-$ville"
done

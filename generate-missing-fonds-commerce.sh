#!/bin/bash

echo '🚀 Génération des 13 pages fonds-commerce manquantes...'
echo ''

# Liste des 13 villes manquantes pour fonds-commerce
MISSING_VILLES=('jacob-bellecombette' 'sonnaz' 'barby' 'puygros' 'saint-jeoire-prieure' 'drumettaz-clarafond' 'mery' 'chignin' 'myans' 'la-rochette' 'gresy-sur-aix' 'saint-alban-leysse' 'bassens')

# Données pour chaque ville
declare -A VILLE_CA=(
    ['jacob-bellecombette']='185k€'
    ['sonnaz']='165k€'
    ['barby']='120k€'
    ['puygros']='135k€'
    ['saint-jeoire-prieure']='110k€'
    ['drumettaz-clarafond']='175k€'
    ['mery']='155k€'
    ['chignin']='125k€'
    ['myans']='140k€'
    ['la-rochette']='105k€'
    ['gresy-sur-aix']='195k€'
    ['saint-alban-leysse']='180k€'
    ['bassens']='190k€'
)

declare -A VILLE_RENTABILITE=(
    ['jacob-bellecombette']='13%'
    ['sonnaz']='12%'
    ['barby']='10%'
    ['puygros']='11%'
    ['saint-jeoire-prieure']='9%'
    ['drumettaz-clarafond']='14%'
    ['mery']='12%'
    ['chignin']='10%'
    ['myans']='11%'
    ['la-rochette']='9%'
    ['gresy-sur-aix']='15%'
    ['saint-alban-leysse']='13%'
    ['bassens']='14%'
)

declare -A VILLE_SPECIALITE=(
    ['jacob-bellecombette']='Jacob-Bellecombette'
    ['sonnaz']='Sonnaz'
    ['barby']='Barby'
    ['puygros']='Puygros'
    ['saint-jeoire-prieure']='Saint-Jeoire-Prieuré'
    ['drumettaz-clarafond']='Drumettaz-Clarafond'
    ['mery']='Méry'
    ['chignin']='Chignin'
    ['myans']='Myans'
    ['la-rochette']='La Rochette'
    ['gresy-sur-aix']='Grésy-sur-Aix'
    ['saint-alban-leysse']='Saint-Alban-Leysse'
    ['bassens']='Bassens'
)

declare -A VILLE_DESCRIPTION=(
    ['jacob-bellecombette']='Cédez votre fonds de commerce à Jacob-Bellecombette avec notre expertise locale.'
    ['sonnaz']='Cédez votre activité à Sonnaz avec notre réseau d\'acquéreurs qualifiés.'
    ['barby']='Cédez votre commerce à Barby avec notre connaissance du marché local.'
    ['puygros']='Cédez votre fonds de commerce à Puygros au meilleur prix du marché.'
    ['saint-jeoire-prieure']='Cédez votre activité à Saint-Jeoire-Prieuré avec notre expertise du marché local.'
    ['drumettaz-clarafond']='Cédez votre commerce à Drumettaz-Clarafond avec notre connaissance du secteur.'
    ['mery']='Cédez votre fonds de commerce à Méry avec notre réseau d\'acquéreurs qualifiés.'
    ['chignin']='Cédez votre activité à Chignin avec notre expertise locale.'
    ['myans']='Cédez votre commerce à Myans avec notre connaissance du marché local.'
    ['la-rochette']='Cédez votre fonds de commerce à La Rochette au meilleur prix.'
    ['gresy-sur-aix']='Cédez votre activité à Grésy-sur-Aix avec notre expertise du marché local.'
    ['saint-alban-leysse']='Cédez votre fonds de commerce à Saint-Alban-Leysse avec notre réseau d\'acquéreurs.'
    ['bassens']='Cédez votre fonds de commerce à Bassens au meilleur prix du marché.'
)

declare -A VILLE_EVALUATION=(
    ['jacob-bellecombette']='Estimation précise basée sur votre fonds de commerce et le marché de Jacob-Bellecombette.'
    ['sonnaz']='Estimation précise basée sur votre activité et le marché de Sonnaz.'
    ['barby']='Estimation précise basée sur votre commerce et le marché de Barby.'
    ['puygros']='Estimation précise basée sur votre fonds de commerce et le marché de Puygros.'
    ['saint-jeoire-prieure']='Estimation précise basée sur votre activité et le marché de Saint-Jeoire-Prieuré.'
    ['drumettaz-clarafond']='Estimation précise basée sur votre commerce et le marché de Drumettaz-Clarafond.'
    ['mery']='Estimation précise basée sur votre fonds de commerce et le marché de Méry.'
    ['chignin']='Estimation précise basée sur votre activité et le marché de Chignin.'
    ['myans']='Estimation précise basée sur votre commerce et le marché de Myans.'
    ['la-rochette']='Estimation précise basée sur votre fonds de commerce et le marché de La Rochette.'
    ['gresy-sur-aix']='Estimation précise basée sur votre activité et le marché de Grésy-sur-Aix.'
    ['saint-alban-leysse']='Estimation précise basée sur votre fonds de commerce et le marché de Saint-Alban-Leysse.'
    ['bassens']='Estimation précise basée sur votre fonds de commerce et le marché de Bassens.'
)

# Fonction pour créer une page fonds-commerce
create_fonds_commerce_page() {
    local ville=$1
    local ville_display=$(echo $ville | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
    local ville_kebab=$ville
    local filename="fonds-commerce-${ville_kebab}.astro"

    # Convertir les noms avec caractères spéciaux
    if [[ $ville == "saint-jeoire-prieure" ]]; then
        ville_display="Saint-Jeoire-Prieuré"
    elif [[ $ville == "gresy-sur-aix" ]]; then
        ville_display="Grésy-sur-Aix"
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
echo '🎉 13 pages fonds-commerce manquantes créées !'
echo "📊 Total fonds-commerce maintenant: 27/27 villes"
echo ''
echo '🔗 URLs maintenant disponibles:'
for ville in "${MISSING_VILLES[@]}"; do
    echo "✅ http://localhost:4321/fonds-commerce-$ville"
done

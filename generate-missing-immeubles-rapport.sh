#!/bin/bash

echo '🚀 Génération des 25 pages immeubles-rapport manquantes...'
echo ''

# Liste des 25 villes manquantes pour immeubles-rapport (toutes sauf chambery et montmelian)
MISSING_VILLES=('aix-les-bains' 'le-bourget-du-lac' 'la-motte-servolex' 'bassens' 'la-ravoire' 'cognin' 'barberaz' 'saint-alban-leysse' 'voglans' 'tresserve' 'viviers-du-lac' 'bourdeau' 'saint-pierre-d-albigny' 'challes-les-eaux' 'jacob-bellecombette' 'sonnaz' 'barby' 'puygros' 'saint-jeoire-prieure' 'drumettaz-clarafond' 'mery' 'chignin' 'myans' 'la-rochette' 'gresy-sur-aix')

# Données pour chaque ville
declare -A VILLE_PRIX=(
    ['aix-les-bains']='450k€'
    ['le-bourget-du-lac']='520k€'
    ['la-motte-servolex']='380k€'
    ['bassens']='320k€'
    ['la-ravoire']='290k€'
    ['cognin']='280k€'
    ['barberaz']='310k€'
    ['saint-alban-leysse']='420k€'
    ['voglans']='300k€'
    ['tresserve']='480k€'
    ['viviers-du-lac']='460k€'
    ['bourdeau']='550k€'
    ['saint-pierre-d-albigny']='240k€'
    ['challes-les-eaux']='330k€'
    ['jacob-bellecombette']='360k€'
    ['sonnaz']='270k€'
    ['barby']='220k€'
    ['puygros']='250k€'
    ['saint-jeoire-prieure']='210k€'
    ['drumettaz-clarafond']='340k€'
    ['mery']='260k€'
    ['chignin']='230k€'
    ['myans']='240k€'
    ['la-rochette']='200k€'
    ['gresy-sur-aix']='370k€'
)

declare -A VILLE_RENTABILITE=(
    ['aix-les-bains']='8.5%'
    ['le-bourget-du-lac']='9.2%'
    ['la-motte-servolex']='7.8%'
    ['bassens']='7.2%'
    ['la-ravoire']='6.9%'
    ['cognin']='6.8%'
    ['barberaz']='7.1%'
    ['saint-alban-leysse']='8.1%'
    ['voglans']='7.0%'
    ['tresserve']='8.8%'
    ['viviers-du-lac']='8.6%'
    ['bourdeau']='9.5%'
    ['saint-pierre-d-albigny']='6.2%'
    ['challes-les-eaux']='7.3%'
    ['jacob-bellecombette']='7.6%'
    ['sonnaz']='6.7%'
    ['barby']='6.1%'
    ['puygros']='6.4%'
    ['saint-jeoire-prieure']='6.0%'
    ['drumettaz-clarafond']='7.4%'
    ['mery']='6.6%'
    ['chignin']='6.3%'
    ['myans']='6.4%'
    ['la-rochette']='5.9%'
    ['gresy-sur-aix']='7.7%'
)

declare -A VILLE_SPECIALITE=(
    ['aix-les-bains']='Aix-les-Bains Bord du lac'
    ['le-bourget-du-lac']='Le Bourget-du-Lac Domaine privé'
    ['la-motte-servolex']='La Motte-Servolex Centre-ville'
    ['bassens']='Bassens Résidentiel'
    ['la-ravoire']='La Ravoire Contemporain'
    ['cognin']='Cognin Vue dégagée'
    ['barberaz']='Barberaz Architecture moderne'
    ['saint-alban-leysse']='Saint-Alban-Leysse Parc arboré'
    ['voglans']='Voglans Contemporain'
    ['tresserve']='Tresserve Pied du lac'
    ['viviers-du-lac']='Viviers-du-Lac Vue panoramique'
    ['bourdeau']='Bourdeau Propriété vignoble'
    ['saint-pierre-d-albigny']='Saint-Pierre-d\'Albigny Maison bourgeoise'
    ['challes-les-eaux']='Challes-les-Eaux Domaine thermal'
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
)

declare -A VILLE_DESCRIPTION=(
    ['aix-les-bains']='Découvrez les immeubles de rapport à Aix-les-Bains, investissement locatif haut de gamme.'
    ['le-bourget-du-lac']='Découvrez les immeubles de rapport au Bourget-du-Lac, dans un environnement privilégié.'
    ['la-motte-servolex']='Découvrez les immeubles de rapport à La Motte-Servolex, au cœur de la ville.'
    ['bassens']='Découvrez les immeubles de rapport à Bassens, secteur résidentiel calme.'
    ['la-ravoire']='Découvrez les immeubles contemporains à La Ravoire, architecture moderne.'
    ['cognin']='Découvrez les immeubles avec vue à Cognin, panorama exceptionnel sur les Alpes.'
    ['barberaz']='Découvrez l\'architecture moderne à Barberaz, immeubles design et fonctionnels.'
    ['saint-alban-leysse']='Découvrez les immeubles avec parc à Saint-Alban-Leysse, écrin de verdure privatif.'
    ['voglans']='Découvrez les immeubles contemporains à Voglans, lignes épurées et prestations haut de gamme.'
    ['tresserve']='Découvrez les immeubles pied du lac à Tresserve, accès direct au lac du Bourget.'
    ['viviers-du-lac']='Découvrez les immeubles panoramiques à Viviers-du-Lac, vue à 180° sur le lac.'
    ['bourdeau']='Découvrez les immeubles vignoble à Bourdeau, domaine viticole d\'exception.'
    ['saint-pierre-d-albigny']='Découvrez les maisons bourgeoises à Saint-Pierre-d\'Albigny, charme de l\'ancien revisité.'
    ['challes-les-eaux']='Découvrez les immeubles thermaux à Challes-les-Eaux, propriétés spa et bien-être.'
    ['jacob-bellecombette']='Découvrez les immeubles de rapport à Jacob-Bellecombette avec notre expertise locale.'
    ['sonnaz']='Découvrez les immeubles de rapport à Sonnaz avec notre réseau d\'investisseurs qualifiés.'
    ['barby']='Découvrez les immeubles de rapport à Barby avec notre connaissance du marché local.'
    ['puygros']='Découvrez les immeubles de rapport à Puygros au meilleur prix du marché.'
    ['saint-jeoire-prieure']='Découvrez les immeubles de rapport à Saint-Jeoire-Prieuré avec notre expertise du marché local.'
    ['drumettaz-clarafond']='Découvrez les immeubles de rapport à Drumettaz-Clarafond avec notre connaissance du secteur.'
    ['mery']='Découvrez les immeubles de rapport à Méry avec notre réseau d\'investisseurs qualifiés.'
    ['chignin']='Découvrez les immeubles de rapport à Chignin avec notre expertise locale.'
    ['myans']='Découvrez les immeubles de rapport à Myans avec notre connaissance du marché local.'
    ['la-rochette']='Découvrez les immeubles de rapport à La Rochette au meilleur prix.'
    ['gresy-sur-aix']='Découvrez les immeubles de rapport à Grésy-sur-Aix avec notre expertise du marché local.'
)

declare -A VILLE_PRESENTATION=(
    ['aix-les-bains']='Présentation confidentielle et visite privée des immeubles de rapport d\'Aix-les-Bains.'
    ['le-bourget-du-lac']='Présentation confidentielle et visite privée des immeubles du Bourget-du-Lac.'
    ['la-motte-servolex']='Présentation confidentielle et visite privée des immeubles du centre-ville de La Motte-Servolex.'
    ['bassens']='Présentation confidentielle et visite privée des immeubles résidentiels de Bassens.'
    ['la-ravoire']='Présentation confidentielle et visite privée des immeubles contemporains de La Ravoire.'
    ['cognin']='Présentation confidentielle et visite privée des immeubles avec vue de Cognin.'
    ['barberaz']='Présentation confidentielle et visite privée des immeubles design de Barberaz.'
    ['saint-alban-leysse']='Présentation confidentielle et visite privée des immeubles avec parc de Saint-Alban-Leysse.'
    ['voglans']='Présentation confidentielle et visite privée des immeubles contemporains de Voglans.'
    ['tresserve']='Présentation confidentielle et visite privée des immeubles pied du lac de Tresserve.'
    ['viviers-du-lac']='Présentation confidentielle et visite privée des immeubles panoramiques de Viviers-du-Lac.'
    ['bourdeau']='Présentation confidentielle et visite privée des immeubles vignoble de Bourdeau.'
    ['saint-pierre-d-albigny']='Présentation confidentielle et visite privée des maisons bourgeoises de Saint-Pierre-d\'Albigny.'
    ['challes-les-eaux']='Présentation confidentielle et visite privée des immeubles thermaux de Challes-les-Eaux.'
    ['jacob-bellecombette']='Présentation confidentielle et visite privée des immeubles de rapport de Jacob-Bellecombette.'
    ['sonnaz']='Présentation confidentielle et visite privée des immeubles de rapport de Sonnaz.'
    ['barby']='Présentation confidentielle et visite privée des immeubles de rapport de Barby.'
    ['puygros']='Présentation confidentielle et visite privée des immeubles de rapport de Puygros.'
    ['saint-jeoire-prieure']='Présentation confidentielle et visite privée des immeubles de rapport de Saint-Jeoire-Prieuré.'
    ['drumettaz-clarafond']='Présentation confidentielle et visite privée des immeubles de rapport de Drumettaz-Clarafond.'
    ['mery']='Présentation confidentielle et visite privée des immeubles de rapport de Méry.'
    ['chignin']='Présentation confidentielle et visite privée des immeubles de rapport de Chignin.'
    ['myans']='Présentation confidentielle et visite privée des immeubles de rapport de Myans.'
    ['la-rochette']='Présentation confidentielle et visite privée des immeubles de rapport de La Rochette.'
    ['gresy-sur-aix']='Présentation confidentielle et visite privée des immeubles de rapport de Grésy-sur-Aix.'
)

# Fonction pour créer une page immeuble-rapport
create_immeuble_rapport_page() {
    local ville=$1
    local ville_display=$(echo $ville | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
    local ville_kebab=$ville
    local filename="immeuble-rapport-${ville_kebab}.astro"

    # Convertir les noms avec caractères spéciaux
    if [[ $ville == "saint-pierre-d-albigny" ]]; then
        ville_display="Saint-Pierre-d'Albigny"
    elif [[ $ville == "saint-jeoire-prieure" ]]; then
        ville_display="Saint-Jeoire-Prieuré"
    elif [[ $ville == "gresy-sur-aix" ]]; then
        ville_display="Grésy-sur-Aix"
    fi

    cat > "../src/pages/$filename" << EOF
---
import Base from '@/layouts/Base.astro';
import Section from '@/components/ui/Section.astro';
import Badge from '@/components/ui/Badge.astro';
import { Calculator, Euro, Building } from 'lucide-react';

const meta = {
  title: "Immeuble de Rapport ${ville_display} | Investissement Locatif Savoie",
  description: "Découvrez les immeubles de rapport à ${ville_display}. Opportunités d'investissement locatif rentables.",
  keywords: ["immeuble rapport ${ville_kebab}", "investissement locatif ${ville_kebab}"]
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
        Immeuble de Rapport <span class="gradient-text">${ville_display}</span>
      </h1>
      <p class="text-xl text-muted max-w-3xl mx-auto mb-12">
        ${VILLE_DESCRIPTION[$ville]}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Euro className="w-6 h-6 text-primary" />
          </div>
          <div class="text-3xl font-bold text-primary mb-2">${VILLE_PRIX[$ville]}</div>
          <div class="text-sm text-muted font-medium">Prix moyen</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Building className="w-6 h-6 text-primary" />
          </div>
          <div class="text-3xl font-bold text-primary mb-2">${VILLE_RENTABILITE[$ville]}</div>
          <div class="text-sm text-muted font-medium">Rentabilité</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Calculator className="w-6 h-6 text-primary" />
          </div>
          <div class="text-3xl font-bold text-primary mb-2">6 mois</div>
          <div class="text-sm text-muted font-medium">Délai vente</div>
        </div>
      </div>
    </div>
  </Section>

  <Section className="bg-gradient-to-br from-primary to-primary/90">
    <div class="text-center text-white">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        Découvrir les immeubles de rapport à ${ville_display}
      </h2>
      <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        ${VILLE_PRESENTATION[$ville]}
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
    create_immeuble_rapport_page "$ville"
done

echo ''
echo '🎉 25 pages immeubles-rapport manquantes créées !'
echo "📊 Total immeubles-rapport maintenant: 27/27 villes"
echo ''
echo '🔗 URLs maintenant disponibles:'
for ville in "${MISSING_VILLES[@]}"; do
    echo "✅ http://localhost:4321/immeuble-rapport-$ville"
done

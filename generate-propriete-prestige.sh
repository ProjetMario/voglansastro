#!/bin/bash

echo '🚀 Génération des pages de propriétés-prestige manquantes...'
echo ''

# Liste des villes manquantes pour propriétés-prestige
MISSING_VILLES=('chambery' 'aix-les-bains' 'le-bourget-du-lac' 'la-motte-servolex' 'bassens' 'la-ravoire' 'cognin' 'barberaz' 'saint-alban-leysse' 'voglans' 'tresserve' 'viviers-du-lac' 'bourdeau' 'saint-pierre-d-albigny' 'challes-les-eaux')

# Données pour chaque ville
declare -A VILLE_PRIX=(
    ['chambery']='1.2M€'
    ['aix-les-bains']='1.8M€'
    ['le-bourget-du-lac']='2.5M€'
    ['la-motte-servolex']='950k€'
    ['bassens']='880k€'
    ['la-ravoire']='820k€'
    ['cognin']='820k€'
    ['barberaz']='890k€'
    ['saint-alban-leysse']='1.1M€'
    ['voglans']='860k€'
    ['tresserve']='1.6M€'
    ['viviers-du-lac']='1.4M€'
    ['bourdeau']='2.2M€'
    ['saint-pierre-d-albigny']='780k€'
    ['challes-les-eaux']='920k€'
)

declare -A VILLE_SPECIALITE=(
    ['chambery']='Chambéry Vue montagnes'
    ['aix-les-bains']='Aix-les-Bains Bord du lac'
    ['le-bourget-du-lac']='Le Bourget-du-Lac Domaine privé'
    ['la-motte-servolex']='La Motte-Servolex Villa moderne'
    ['bassens']='Bassens Jardin paysager'
    ['la-ravoire']='La Ravoire Contemporaine'
    ['cognin']='Cognin Vue dégagée'
    ['barberaz']='Barberaz Architecture design'
    ['saint-alban-leysse']='Saint-Alban-Leysse Parc arboré'
    ['voglans']='Voglans Contemporaine'
    ['tresserve']='Tresserve Pied du lac'
    ['viviers-du-lac']='Viviers-du-Lac Vue panoramique'
    ['bourdeau']='Bourdeau Propriété vignoble'
    ['saint-pierre-d-albigny']='Saint-Pierre-d\'Albigny Maison bourgeoise'
    ['challes-les-eaux']='Challes-les-Eaux Domaine thermal'
)

declare -A VILLE_DESCRIPTION=(
    ['chambery']='Découvrez les propriétés de prestige à Chambéry, véritables joyaux immobiliers avec vue sur les montagnes.'
    ['aix-les-bains']='Découvrez les demeures d\'exception à Aix-les-Bains, bord du lac du Bourget.'
    ['le-bourget-du-lac']='Découvrez les propriétés haut de gamme au Bourget-du-Lac, dans un domaine privé exclusif.'
    ['la-motte-servolex']='Découvrez les villas modernes à La Motte-Servolex, architecture contemporaine haut de gamme.'
    ['bassens']='Découvrez les propriétés de prestige à Bassens avec jardin paysager exceptionnel.'
    ['la-ravoire']='Découvrez les demeures contemporaines à La Ravoire, design architectural unique.'
    ['cognin']='Découvrez les propriétés avec vue dégagée à Cognin, panorama exceptionnel sur les Alpes.'
    ['barberaz']='Découvrez l\'architecture design à Barberaz, propriétés modernes et épurées.'
    ['saint-alban-leysse']='Découvrez les propriétés avec parc arboré à Saint-Alban-Leysse, écrin de verdure privatif.'
    ['voglans']='Découvrez les demeures contemporaines à Voglans, lignes épurées et prestations haut de gamme.'
    ['tresserve']='Découvrez les propriétés pied du lac à Tresserve, accès direct au lac du Bourget.'
    ['viviers-du-lac']='Découvrez les propriétés avec vue panoramique à Viviers-du-Lac, panorama à 180° sur le lac.'
    ['bourdeau']='Découvrez les propriétés vignoble à Bourdeau, domaine viticole d\'exception.'
    ['saint-pierre-d-albigny']='Découvrez les maisons bourgeoises à Saint-Pierre-d\'Albigny, charme de l\'ancien revisité.'
    ['challes-les-eaux']='Découvrez les domaines thermaux à Challes-les-Eaux, propriétés spa et bien-être.'
)

declare -A VILLE_PRESENTATION=(
    ['chambery']='Présentation confidentielle et visite privée des demeures les plus remarquables de Chambéry.'
    ['aix-les-bains']='Présentation confidentielle et visite privée des propriétés d\'exception d\'Aix-les-Bains.'
    ['le-bourget-du-lac']='Présentation confidentielle et visite privée des domaines privés du Bourget-du-Lac.'
    ['la-motte-servolex']='Présentation confidentielle et visite privée des villas modernes de La Motte-Servolex.'
    ['bassens']='Présentation confidentielle et visite privée des propriétés avec jardin paysager de Bassens.'
    ['la-ravoire']='Présentation confidentielle et visite privée des demeures contemporaines de La Ravoire.'
    ['cognin']='Présentation confidentielle et visite privée des propriétés avec vue de Cognin.'
    ['barberaz']='Présentation confidentielle et visite privée des architectures design de Barberaz.'
    ['saint-alban-leysse']='Présentation confidentielle et visite privée des propriétés avec parc de Saint-Alban-Leysse.'
    ['voglans']='Présentation confidentielle et visite privée des demeures contemporaines de Voglans.'
    ['tresserve']='Présentation confidentielle et visite privée des propriétés pied du lac de Tresserve.'
    ['viviers-du-lac']='Présentation confidentielle et visite privée des propriétés panoramiques de Viviers-du-Lac.'
    ['bourdeau']='Présentation confidentielle et visite privée des propriétés vignoble de Bourdeau.'
    ['saint-pierre-d-albigny']='Présentation confidentielle et visite privée des maisons bourgeoises de Saint-Pierre-d\'Albigny.'
    ['challes-les-eaux']='Présentation confidentielle et visite privée des domaines thermaux de Challes-les-Eaux.'
)

# Fonction pour créer une page propriété-prestige
create_propriete_prestige_page() {
    local ville=$1
    local ville_display=$(echo $ville | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
    local ville_kebab=$ville
    local filename="propriete-prestige-${ville_kebab}.astro"

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
import { Calculator, Euro, Crown } from 'lucide-react';

const meta = {
  title: "Propriété de Prestige ${ville_display} | Demeure d'Exception Savoie",
  description: "Découvrez les propriétés de prestige à ${ville_display}. Villas haut de gamme et demeures d'exception.",
  keywords: ["propriete prestige ${ville_kebab}", "demeure caractere ${ville_kebab}"]
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
        Propriété de Prestige <span class="gradient-text">${ville_display}</span>
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
            <Crown className="w-6 h-6 text-primary" />
          </div>
          <div class="text-3xl font-bold text-primary mb-2">8</div>
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
        Découvrir les propriétés d'exception à ${ville_display}
      </h2>
      <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        ${VILLE_PRESENTATION[$ville]}
      </p>
      <a href="/estimation" class="btn bg-white text-primary hover:bg-white/90">
        <Crown className="w-5 h-5" />
        Demande de présentation
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
    create_propriete_prestige_page "$ville"
done

echo ''
echo '🎉 Toutes les pages de propriétés-prestige manquantes ont été créées !'
echo "📊 Total: ${#MISSING_VILLES[@]} nouvelles pages"
echo ''
echo '🔗 URLs maintenant disponibles:'
for ville in "${MISSING_VILLES[@]}"; do
    echo "✅ http://localhost:4321/propriete-prestige-$ville"
done

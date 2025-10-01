#!/bin/bash

echo '🚀 Génération des 22 pages propriétés-prestige manquantes...'
echo ''

# Liste des 22 villes manquantes pour propriétés-prestige (toutes sauf les 5 existantes : aix-les-bains, bassens, chambery, montmelian, tresserve)
MISSING_VILLES=('le-bourget-du-lac' 'la-motte-servolex' 'la-ravoire' 'cognin' 'barberaz' 'saint-alban-leysse' 'voglans' 'viviers-du-lac' 'bourdeau' 'saint-pierre-d-albigny' 'challes-les-eaux' 'jacob-bellecombette' 'sonnaz' 'barby' 'puygros' 'saint-jeoire-prieure' 'drumettaz-clarafond' 'mery' 'chignin' 'myans' 'la-rochette' 'gresy-sur-aix')

# Données pour chaque ville
declare -A VILLE_PRIX=(
    ['le-bourget-du-lac']='2.5M€'
    ['la-motte-servolex']='950k€'
    ['la-ravoire']='820k€'
    ['cognin']='820k€'
    ['barberaz']='890k€'
    ['saint-alban-leysse']='1.1M€'
    ['voglans']='860k€'
    ['viviers-du-lac']='1.4M€'
    ['bourdeau']='2.2M€'
    ['saint-pierre-d-albigny']='780k€'
    ['challes-les-eaux']='920k€'
    ['jacob-bellecombette']='1.3M€'
    ['sonnaz']='750k€'
    ['barby']='680k€'
    ['puygros']='720k€'
    ['saint-jeoire-prieure']='650k€'
    ['drumettaz-clarafond']='880k€'
    ['mery']='740k€'
    ['chignin']='700k€'
    ['myans']='720k€'
    ['la-rochette']='620k€'
    ['gresy-sur-aix']='1.0M€'
)

declare -A VILLE_SPECIALITE=(
    ['le-bourget-du-lac']='Le Bourget-du-Lac Domaine privé'
    ['la-motte-servolex']='La Motte-Servolex Villa moderne'
    ['la-ravoire']='La Ravoire Contemporaine'
    ['cognin']='Cognin Vue dégagée'
    ['barberaz']='Barberaz Architecture design'
    ['saint-alban-leysse']='Saint-Alban-Leysse Parc arboré'
    ['voglans']='Voglans Contemporaine'
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
    ['le-bourget-du-lac']='Découvrez les propriétés haut de gamme au Bourget-du-Lac, dans un domaine privé exclusif.'
    ['la-motte-servolex']='Découvrez les villas modernes à La Motte-Servolex, architecture contemporaine haut de gamme.'
    ['la-ravoire']='Découvrez les demeures contemporaines à La Ravoire, design architectural unique.'
    ['cognin']='Découvrez les propriétés avec vue dégagée à Cognin, panorama exceptionnel sur les Alpes.'
    ['barberaz']='Découvrez l\'architecture design à Barberaz, propriétés modernes et épurées.'
    ['saint-alban-leysse']='Découvrez les propriétés avec parc arboré à Saint-Alban-Leysse, écrin de verdure privatif.'
    ['voglans']='Découvrez les demeures contemporaines à Voglans, lignes épurées et prestations haut de gamme.'
    ['viviers-du-lac']='Découvrez les propriétés avec vue panoramique à Viviers-du-Lac, panorama à 180° sur le lac.'
    ['bourdeau']='Découvrez les propriétés vignoble à Bourdeau, domaine viticole d\'exception.'
    ['saint-pierre-d-albigny']='Découvrez les maisons bourgeoises à Saint-Pierre-d\'Albigny, charme de l\'ancien revisité.'
    ['challes-les-eaux']='Découvrez les domaines thermaux à Challes-les-Eaux, propriétés spa et bien-être.'
    ['jacob-bellecombette']='Découvrez les propriétés de prestige à Jacob-Bellecombette avec notre expertise locale.'
    ['sonnaz']='Découvrez les propriétés de prestige à Sonnaz avec notre réseau d\'acquéreurs qualifiés.'
    ['barby']='Découvrez les propriétés de prestige à Barby avec notre connaissance du marché local.'
    ['puygros']='Découvrez les propriétés de prestige à Puygros au meilleur prix du marché.'
    ['saint-jeoire-prieure']='Découvrez les propriétés de prestige à Saint-Jeoire-Prieuré avec notre expertise du marché local.'
    ['drumettaz-clarafond']='Découvrez les propriétés de prestige à Drumettaz-Clarafond avec notre connaissance du secteur.'
    ['mery']='Découvrez les propriétés de prestige à Méry avec notre réseau d\'acquéreurs qualifiés.'
    ['chignin']='Découvrez les propriétés de prestige à Chignin avec notre expertise locale.'
    ['myans']='Découvrez les propriétés de prestige à Myans avec notre connaissance du marché local.'
    ['la-rochette']='Découvrez les propriétés de prestige à La Rochette au meilleur prix.'
    ['gresy-sur-aix']='Découvrez les propriétés de prestige à Grésy-sur-Aix avec notre expertise du marché local.'
)

declare -A VILLE_PRESENTATION=(
    ['le-bourget-du-lac']='Présentation confidentielle et visite privée des domaines privés du Bourget-du-Lac.'
    ['la-motte-servolex']='Présentation confidentielle et visite privée des villas modernes de La Motte-Servolex.'
    ['la-ravoire']='Présentation confidentielle et visite privée des demeures contemporaines de La Ravoire.'
    ['cognin']='Présentation confidentielle et visite privée des propriétés avec vue de Cognin.'
    ['barberaz']='Présentation confidentielle et visite privée des architectures design de Barberaz.'
    ['saint-alban-leysse']='Présentation confidentielle et visite privée des propriétés avec parc de Saint-Alban-Leysse.'
    ['voglans']='Présentation confidentielle et visite privée des demeures contemporaines de Voglans.'
    ['viviers-du-lac']='Présentation confidentielle et visite privée des propriétés panoramiques de Viviers-du-Lac.'
    ['bourdeau']='Présentation confidentielle et visite privée des propriétés vignoble de Bourdeau.'
    ['saint-pierre-d-albigny']='Présentation confidentielle et visite privée des maisons bourgeoises de Saint-Pierre-d\'Albigny.'
    ['challes-les-eaux']='Présentation confidentielle et visite privée des domaines thermaux de Challes-les-Eaux.'
    ['jacob-bellecombette']='Présentation confidentielle et visite privée des propriétés de prestige de Jacob-Bellecombette.'
    ['sonnaz']='Présentation confidentielle et visite privée des propriétés de prestige de Sonnaz.'
    ['barby']='Présentation confidentielle et visite privée des propriétés de prestige de Barby.'
    ['puygros']='Présentation confidentielle et visite privée des propriétés de prestige de Puygros.'
    ['saint-jeoire-prieure']='Présentation confidentielle et visite privée des propriétés de prestige de Saint-Jeoire-Prieuré.'
    ['drumettaz-clarafond']='Présentation confidentielle et visite privée des propriétés de prestige de Drumettaz-Clarafond.'
    ['mery']='Présentation confidentielle et visite privée des propriétés de prestige de Méry.'
    ['chignin']='Présentation confidentielle et visite privée des propriétés de prestige de Chignin.'
    ['myans']='Présentation confidentielle et visite privée des propriétés de prestige de Myans.'
    ['la-rochette']='Présentation confidentielle et visite privée des propriétés de prestige de La Rochette.'
    ['gresy-sur-aix']='Présentation confidentielle et visite privée des propriétés de prestige de Grésy-sur-Aix.'
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
echo '🎉 22 pages propriétés-prestige manquantes créées !'
echo "📊 Total propriétés-prestige maintenant: 27/27 villes"
echo ''
echo '🔗 URLs maintenant disponibles:'
for ville in "${MISSING_VILLES[@]}"; do
    echo "✅ http://localhost:4321/propriete-prestige-$ville"
done

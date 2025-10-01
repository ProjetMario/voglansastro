#!/bin/bash

# Liste des 27 villes pour les pages vende-garage
VILLES=(
    "aix-les-bains"
    "barberaz"
    "barby"
    "bassens"
    "bourdeau"
    "challes-les-eaux"
    "chambery"
    "chignin"
    "cognin"
    "drumettaz-clarafond"
    "gresy-sur-aix"
    "jacob-bellecombette"
    "la-motte-servolex"
    "la-ravoire"
    "la-rochette"
    "le-bourget-du-lac"
    "mery"
    "montmelian"
    "myans"
    "puygros"
    "saint-alban-leysse"
    "saint-jeoire-prieure"
    "saint-pierre-d-albigny"
    "sonnaz"
    "tresserve"
    "viviers-du-lac"
    "voglans"
)

# Données spécifiques pour chaque ville (prix moyen, délai, hausse)
# Format : "prix_moyen délai hausse"
DONNEES_VILLES=(
    "32000 35 +15"  # aix-les-bains
    "19000 45 +8"   # barberaz
    "18000 45 +10"  # barby
    "20000 42 +9"   # bassens
    "28000 32 +14"  # bourdeau
    "21000 40 +11"  # challes-les-eaux
    "25000 28 +12"  # chambery
    "19500 46 +9"   # chignin
    "21000 40 +10"  # cognin
    "22000 38 +11"  # drumettaz-clarafond
    "26000 33 +13"  # gresy-sur-aix
    "19500 44 +9"   # jacob-bellecombette
    "22000 38 +11"  # la-motte-servolex
    "20500 41 +10"  # la-ravoire
    "17500 48 +8"   # la-rochette
    "28000 32 +14"  # le-bourget-du-lac
    "18500 47 +8"   # mery
    "19000 46 +9"   # montmelian
    "18500 47 +8"   # myans
    "17500 49 +7"   # puygros
    "20000 43 +9"   # saint-alban-leysse
    "17000 52 +7"   # saint-jeoire-prieure
    "16500 55 +6"   # saint-pierre-d-albigny
    "17500 50 +7"   # sonnaz
    "29000 30 +15"  # tresserve
    "26000 33 +13"  # viviers-du-lac
    "22500 37 +12"  # voglans
)

# Quartiers types pour chaque ville (6 quartiers par ville)
QUARTIERS_VILLES=(
    "Centre thermal,Laffay,Marlioz,Mouxy,Grésy-sur-Aix,Tresserve"
    "Centre-ville,Résidentiel,Commerçant,Périphérie,Nord,Sud"
    "Centre-ville,Résidentiel,Périphérie,Zone industrielle,Nord,Sud"
    "Centre-ville,Résidentiel,Commerçant,Périphérie,Nord,Sud"
    "Centre-ville,Port,Résidentiel,Lac,Haut,Bas"
    "Centre-ville,Résidentiel,Thermal,Périphérie,Nord,Sud"
    "Centre-Ville,Faubourg Montmélian,Biolay,Curial,Vétraz-Monthoux,Challes-les-Eaux"
    "Centre-ville,Vignoble,Résidentiel,Périphérie,Nord,Sud"
    "Centre-ville,Résidentiel,Périphérie,Zone industrielle,Nord,Sud"
    "Centre-ville,Lac,Résidentiel,Périphérie,Nord,Sud"
    "Centre-ville,Proximité Aix,Résidentiel,Périphérie,Nord,Sud"
    "Centre-ville,Résidentiel,Université,Périphérie,Nord,Sud"
    "Centre-ville,Résidentiel,Commerçant,Périphérie,Nord,Sud"
    "Centre-ville,Résidentiel,Périphérie,Zone industrielle,Nord,Sud"
    "Centre-ville,Vallée,Résidentiel,Périphérie,Nord,Sud"
    "Centre-ville,Port,Résidentiel,Périphérie,Nord,Sud"
    "Centre-ville,Authentique,Résidentiel,Périphérie,Nord,Sud"
    "Centre-ville,Combe,Résidentiel,Périphérie,Nord,Sud"
    "Centre-ville,Naturel,Résidentiel,Périphérie,Nord,Sud"
    "Centre-ville,Rural,Résidentiel,Périphérie,Nord,Sud"
    "Centre-ville,Résidentiel,Université,Périphérie,Nord,Sud"
    "Centre-ville,Rural,Résidentiel,Périphérie,Nord,Sud"
    "Centre-ville,Combe,Résidentiel,Périphérie,Nord,Sud"
    "Centre-ville,Calme,Résidentiel,Périphérie,Nord,Sud"
    "Centre-ville,Lac,Résidentiel,Périphérie,Nord,Sud"
    "Centre-ville,Lac,Résidentiel,Périphérie,Nord,Sud"
    "Centre-ville,Résidentiel,Local,Résidentiel,Périphérie,Nord,Sud"
)

# Prix des garages par quartier (6 prix par ville)
PRIX_QUARTIERS_VILLES=(
    "45000,38000,28000,25000,22000,35000"
    "22000,19000,16000,14000,13000,18000"
    "22000,18000,15000,13000,12000,16000"
    "25000,20000,16000,14000,13000,18000"
    "35000,40000,25000,22000,20000,30000"
    "28000,21000,18000,16000,15000,19000"
    "35000,28000,22000,18000,15000,20000"
    "26000,19000,16000,14000,13000,17000"
    "26000,21000,17000,15000,14000,18000"
    "28000,22000,18000,16000,15000,19000"
    "33000,26000,22000,19000,17000,21000"
    "26000,19000,16000,14000,13000,17000"
    "28000,22000,18000,16000,15000,19000"
    "26000,20000,17000,15000,14000,18000"
    "22000,17000,14000,12000,11000,15000"
    "35000,40000,25000,22000,20000,28000"
    "23000,18000,15000,13000,12000,16000"
    "24000,19000,15000,13000,12000,16000"
    "23000,18000,15000,13000,12000,16000"
    "21000,17000,14000,12000,11000,15000"
    "26000,20000,17000,15000,14000,18000"
    "20000,17000,14000,12000,11000,15000"
    "20000,16000,13000,11000,10000,14000"
    "21000,17000,14000,12000,11000,15000"
    "35000,29000,24000,21000,19000,26000"
    "33000,26000,22000,19000,17000,24000"
    "28000,22000,19000,17000,16000,20000"
)

# Fonction pour créer une page vende-garage
creer_page_garage() {
    local ville=$1
    local ville_formatee=$(echo "$ville" | sed 's/-/ /g' | sed 's/\b\(.\)/\u\1/g')
    local donnees=$2
    local quartiers=$3
    local prix_quartiers=$4

    IFS=' ' read -r prix_moyen delai hausse <<< "$donnees"
    IFS=',' read -ra quartier_array <<< "$quartiers"
    IFS=',' read -ra prix_array <<< "$prix_quartiers"

    cat > "src/pages/vendre-garage-${ville}.astro" << EOF
---
import Base from '@/layouts/Base.astro';
import { Phone, Calculator, MapPin, TrendingUp, Car, Star } from 'lucide-react';

const meta = {
  title: "Vendre un Garage à ${ville_formatee} | Estimation Gratuite | Agence de Voglans",
  description: "Vendez votre garage à ${ville_formatee} au meilleur prix. Prix par secteur, expertise locale, vente rapide. Estimation gratuite sous 48h !",
  keywords: ["vendre garage ${ville_formatee}", "estimation garage ${ville_formatee}", "prix garage ${ville_formatee}", "parking ${ville_formatee}"]
};
---

<Base title={meta.title} description={meta.description}>
  <Fragment slot="head">
    <meta name="keywords" content={meta.keywords.join(', ')} />
  </Fragment>

  <section class="relative bg-gradient-to-br from-primary/10 via-white to-primary/5 py-24 md:py-32 overflow-hidden">
    <div class="absolute inset-0 opacity-[0.03]">
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-5xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold shadow-lg mb-8">
          <MapPin className="w-5 h-5" />
          <span>Expert Immobilier à ${ville_formatee}</span>
        </div>

        <h1 class="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight text-foreground leading-[1.1]">
          Vendez Votre Garage à<br/>
          <span class="font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">${ville_formatee}</span>
        </h1>

        <p class="text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed font-light mb-12">
          Notre <span class="text-primary font-medium">expertise locale</span> vous garantit le <span class="text-primary font-medium">meilleur prix</span> et une <span class="text-primary font-medium">vente rapide</span> de votre garage.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#formulaire" class="group relative bg-gradient-to-r from-primary to-primary/90 text-white px-10 py-5 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <Calculator className="w-6 h-6 relative z-10" />
            <span class="relative z-10">Estimation Gratuite</span>
          </a>
          <a href="tel:+33757830262" class="group bg-white/80 backdrop-blur-sm border-2 border-primary/30 text-primary px-10 py-5 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-3 hover:bg-primary hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300">
            <Phone className="w-6 h-6" />
            <span>07 57 83 02 62</span>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
            <div class="text-3xl font-bold text-primary mb-2">${prix_moyen} €</div>
            <div class="text-sm text-muted font-medium">Prix moyen ${ville_formatee}</div>
          </div>
          <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
            <div class="text-3xl font-bold text-primary mb-2">${delai} jours</div>
            <div class="text-sm text-muted font-medium">Délai de vente moyen</div>
          </div>
          <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
            <div class="text-3xl font-bold text-primary mb-2">${hausse}</div>
            <div class="text-sm text-muted font-medium">Hausse sur 1 an</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-light mb-6 text-foreground">
            Prix par <span class="font-semibold text-primary">Secteur</span>
          </h2>
          <p class="text-xl text-muted max-w-3xl mx-auto">
            Données actualisées 2024 pour chaque quartier de ${ville_formatee}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
EOF

    # Ajouter les 6 quartiers avec leurs prix
    for i in {0..5}; do
        quartier="${quartier_array[$i]}"
        prix="${prix_array[$i]}"
        cat >> "src/pages/vendre-garage-${ville}.astro" << EOF
          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">${quartier}</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">${prix} €</div>
              <div class="text-sm text-muted">Prix moyen garage</div>
            </div>
          </div>
EOF
    done

    # Continuer avec le reste du fichier
    cat >> "src/pages/vendre-garage-${ville}.astro" << EOF
        </div>
      </div>
    </div>
  </section>

  <section id="formulaire" class="py-20 bg-gradient-to-br from-primary/5 to-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-light mb-6 text-foreground">
            Estimation <span class="font-semibold text-primary">Gratuite</span> de votre Garage
          </h2>
          <p class="text-xl text-muted max-w-2xl mx-auto">
            Recevez une estimation précise de votre garage sous 48h
          </p>
        </div>

        <div class="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-primary/10">
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Nom *</label>
                <input type="text" required class="w-full px-4 py-3 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm">
              </div>
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Téléphone *</label>
                <input type="tel" required class="w-full px-4 py-3 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm">
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Adresse du garage *</label>
                <input type="text" required class="w-full px-4 py-3 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm">
              </div>
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Superficie (m²) *</label>
                <input type="number" required class="w-full px-4 py-3 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm">
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-foreground mb-2">Type de garage</label>
              <select class="w-full px-4 py-3 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm">
                <option>Garage fermé</option>
                <option>Box fermé</option>
                <option>Parking couvert</option>
                <option>Emplacement extérieur</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-foreground mb-2">Informations complémentaires</label>
              <textarea rows="4" class="w-full px-4 py-3 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm" placeholder="Étage, accès, sécurité, etc."></textarea>
            </div>

            <button type="submit" class="w-full bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300">
              Recevoir mon estimation gratuite
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-light mb-6 text-foreground">
            Pourquoi vendre avec <span class="font-semibold text-primary">L'Agence de Voglans</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center group">
            <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-300">
              <Calculator className="w-8 h-8 text-primary" />
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-4">Estimation précise</h3>
            <p class="text-muted">Évaluation basée sur les ventes récentes et spécificités locales</p>
          </div>

          <div class="text-center group">
            <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-4">Vente rapide</h3>
            <p class="text-muted">Réseau d'acheteurs qualifiés et stratégie marketing optimale</p>
          </div>

          <div class="text-center group">
            <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-300">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-4">Accompagnement complet</h3>
            <p class="text-muted">Suivi personnalisé de A à Z jusqu'à la signature</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
    <div class="container mx-auto px-4 text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-light mb-6">
          Prêt à vendre votre garage à ${ville_formatee} ?
        </h2>
        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Contactez-nous dès aujourd'hui pour une estimation gratuite et confidentielle
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+33757830262" class="bg-white text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center gap-3">
            <Phone className="w-6 h-6" />
            Appelez-nous
          </a>
          <a href="/estimation" class="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
            Estimation en ligne
          </a>
        </div>
      </div>
    </div>
  </section>
</Base>
EOF

    echo "✅ Page vende-garage-${ville}.astro créée avec succès"
}

# Créer toutes les pages vende-garage
echo "🚀 Création de toutes les pages vende-garage..."

for i in "${!VILLES[@]}"; do
    ville="${VILLES[$i]}"
    donnees="${DONNEES_VILLES[$i]}"
    quartiers="${QUARTIERS_VILLES[$i]}"
    prix_quartiers="${PRIX_QUARTIERS_VILLES[$i]}"

    creer_page_garage "$ville" "$donnees" "$quartiers" "$prix_quartiers"
done

echo ""
echo "🎉 Toutes les 27 pages vende-garage ont été créées avec succès !"
echo ""
echo "📋 Résumé :"
echo "✅ 27 pages vende-garage créées"
echo "✅ Chaque page contient :"
echo "   - Hero section personnalisée"
echo "   - 3 statistiques locales"
echo "   - 6 quartiers avec prix spécifiques"
echo "   - Formulaire d'estimation intégré"
echo "   - Avantages de l'agence"
echo "   - CTA final optimisé"
echo "✅ SEO optimisé avec métadonnées complètes"
echo "✅ Design cohérent avec la charte graphique"

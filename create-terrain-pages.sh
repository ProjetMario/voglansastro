#!/bin/bash

# Script pour créer les 27 pages terrain automatiquement

# Données des villes : nom|slug|prix_terrain|delai|hausse
declare -a villes=(
  "Chambéry|chambery|450|65|12"
  "Aix-les-Bains|aix-les-bains|520|55|15"
  "Le Bourget-du-Lac|le-bourget-du-lac|680|45|18"
  "La Motte-Servolex|la-motte-servolex|380|70|10"
  "Bassens|bassens|350|75|9"
  "La Ravoire|la-ravoire|320|80|8"
  "Cognin|cognin|280|85|7"
  "Barberaz|barberaz|300|82|8"
  "Saint-Alban-Leysse|saint-alban-leysse|320|78|9"
  "Voglans|voglans|300|82|8"
  "Jacob-Bellecombette|jacob-bellecombette|380|72|10"
  "Sonnaz|sonnaz|310|80|8"
  "Challes-les-Eaux|challes-les-eaux|340|76|9"
  "Barby|barby|270|88|7"
  "Puygros|puygros|250|92|6"
  "Saint-Jeoire-Prieuré|saint-jeoire-prieure|290|84|7"
  "Tresserve|tresserve|480|60|14"
  "Viviers-du-Lac|viviers-du-lac|420|68|12"
  "Drumettaz-Clarafond|drumettaz-clarafond|340|76|9"
  "Méry|mery|310|80|8"
  "Bourdeau|bourdeau|620|48|17"
  "Saint-Pierre-d'Albigny|saint-pierre-d-albigny|220|95|6"
  "Montmélian|montmelian|240|90|6"
  "Chignin|chignin|260|86|7"
  "Myans|myans|240|90|6"
  "La Rochette|la-rochette|200|100|5"
  "Grésy-sur-Aix|gresy-sur-aix|360|74|10"
)

for ville_data in "${villes[@]}"; do
  IFS='|' read -r nom slug prix delai hausse <<< "$ville_data"
  
  echo "Création de vendre-terrain-${slug}.astro..."
  
  cat > "src/pages/vendre-terrain-${slug}.astro" << 'EOFPAGE'
---
import Base from '../layouts/Base.astro';
import { Phone, Calculator, MapPin, TrendingUp, Home, Ruler, Trees, Mountain } from 'lucide-react';

const meta = {
  title: "Vendre un Terrain à VILLE_NOM | Estimation Gratuite | Agence de Voglans",
  description: "Vendez votre terrain à VILLE_NOM au meilleur prix. Prix par type, expertise locale, vente rapide. Estimation gratuite sous 48h !",
  keywords: ["vendre terrain VILLE_NOM", "estimation terrain VILLE_NOM", "prix terrain VILLE_NOM", "terrain constructible VILLE_NOM"]
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
          <span>Expert Foncier à VILLE_NOM</span>
        </div>

        <h1 class="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight text-foreground leading-[1.1]">
          Vendez Votre Terrain à<br/>
          <span class="font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">VILLE_NOM</span>
        </h1>

        <p class="text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed font-light mb-12">
          Notre <span class="text-primary font-medium">expertise foncière</span> du marché de VILLE_NOM vous garantit le <span class="text-primary font-medium">meilleur prix</span> pour votre terrain.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#formulaire" class="group relative bg-gradient-to-r from-primary to-primary/90 text-white px-10 py-5 rounded-full text-lg font-semibold inline-flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
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
            <div class="text-3xl font-bold text-primary mb-2">PRIX_MOYEN €/m²</div>
            <div class="text-sm text-muted font-medium">Prix moyen terrain</div>
          </div>
          <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
            <div class="text-3xl font-bold text-primary mb-2">DELAI_MOYEN jours</div>
            <div class="text-sm text-muted font-medium">Délai de vente moyen</div>
          </div>
          <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
            <div class="text-3xl font-bold text-primary mb-2">+HAUSSE_MOYEN%</div>
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
            Prix par <span class="font-semibold text-primary">Type de Terrain</span>
          </h2>
          <p class="text-xl text-muted max-w-3xl mx-auto">Données actualisées 2024 pour VILLE_NOM</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">Constructible</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">PRIX_CONSTRUCTIBLE €/m²</div>
              <div class="text-sm text-muted">Viabilisé</div>
              <div class="text-sm text-muted">Délai : DELAI_CONSTRUCTIBLE jours</div>
              <div class="inline-flex items-center gap-1 text-xs text-primary mt-2">
                <TrendingUp className="w-4 h-4" />
                <span>Très demandé</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Ruler className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">À Viabiliser</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">PRIX_VIABILISER €/m²</div>
              <div class="text-sm text-muted">Raccordements à prévoir</div>
              <div class="text-sm text-muted">Délai : DELAI_VIABILISER jours</div>
              <div class="inline-flex items-center gap-1 text-xs text-primary mt-2">
                <Calculator className="w-4 h-4" />
                <span>Potentiel</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Trees className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">Agricole</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">PRIX_AGRICOLE €/m²</div>
              <div class="text-sm text-muted">Zone agricole</div>
              <div class="text-sm text-muted">Délai : DELAI_AGRICOLE jours</div>
              <div class="inline-flex items-center gap-1 text-xs text-primary mt-2">
                <Trees className="w-4 h-4" />
                <span>Investissement</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Mountain className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">Vue Panoramique</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">PRIX_VUE €/m²</div>
              <div class="text-sm text-muted">Vue dégagée</div>
              <div class="text-sm text-muted">Délai : DELAI_VUE jours</div>
              <div class="inline-flex items-center gap-1 text-xs text-primary mt-2">
                <Mountain className="w-4 h-4" />
                <span>Premium</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">Lotissement</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">PRIX_LOTISSEMENT €/m²</div>
              <div class="text-sm text-muted">Prêt à construire</div>
              <div class="text-sm text-muted">Délai : DELAI_LOTISSEMENT jours</div>
              <div class="inline-flex items-center gap-1 text-xs text-primary mt-2">
                <TrendingUp className="w-4 h-4" />
                <span>Clé en main</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Ruler className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">Grande Surface</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">PRIX_GRANDE €/m²</div>
              <div class="text-sm text-muted">+ 2000 m²</div>
              <div class="text-sm text-muted">Délai : DELAI_GRANDE jours</div>
              <div class="inline-flex items-center gap-1 text-xs text-primary mt-2">
                <Ruler className="w-4 h-4" />
                <span>Projet d'envergure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="formulaire" class="py-20 bg-gradient-to-br from-primary/5 to-white">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-light mb-6 text-foreground">
            Estimation <span class="font-semibold text-primary">Gratuite</span>
          </h2>
          <p class="text-xl text-muted">Recevez une estimation précise de votre terrain sous 48h</p>
        </div>

        <div class="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Surface du terrain</label>
                <input type="number" placeholder="800 m²" class="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Type de terrain</label>
                <select class="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option>Constructible viabilisé</option>
                  <option>Constructible à viabiliser</option>
                  <option>Agricole</option>
                  <option>Lotissement</option>
                  <option>Autre</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Viabilisation</label>
                <select class="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option>Viabilisé (eau, électricité, assainissement)</option>
                  <option>Partiellement viabilisé</option>
                  <option>Non viabilisé</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Accès</label>
                <select class="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option>Route goudronnée</option>
                  <option>Chemin carrossable</option>
                  <option>Accès à créer</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-foreground mb-2">Votre nom</label>
              <input type="text" placeholder="Nom complet" class="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Téléphone</label>
                <input type="tel" placeholder="06 12 34 56 78" class="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Email</label>
                <input type="email" placeholder="votre@email.com" class="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
            </div>

            <button type="submit" class="w-full bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-5 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3">
              <Calculator className="w-6 h-6" />
              <span>Recevoir Mon Estimation Gratuite</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 bg-gradient-to-br from-primary to-primary/90">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center text-white">
        <h2 class="text-4xl md:text-5xl font-light mb-6">
          Expert Foncier à <span class="font-semibold">VILLE_NOM</span>
        </h2>
        <p class="text-xl text-white/90 mb-8">Notre connaissance du marché foncier local garantit votre réussite</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+33757830262" class="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300">
            <Phone className="w-6 h-6" />
            <span>07 57 83 02 62</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</Base>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-20px) scale(1.05); }
  }
  .animate-float { animation: float 20s ease-in-out infinite; }
</style>
EOFPAGE

  # Remplacer les placeholders
  sed -i "" "s/VILLE_NOM/${nom}/g" "src/pages/vendre-terrain-${slug}.astro"
  sed -i "" "s/PRIX_MOYEN/${prix}/g" "src/pages/vendre-terrain-${slug}.astro"
  sed -i "" "s/DELAI_MOYEN/${delai}/g" "src/pages/vendre-terrain-${slug}.astro"
  sed -i "" "s/HAUSSE_MOYEN/${hausse}/g" "src/pages/vendre-terrain-${slug}.astro"
  sed -i "" "s/PRIX_CONSTRUCTIBLE/$((prix + 50))/g" "src/pages/vendre-terrain-${slug}.astro"
  sed -i "" "s/PRIX_VIABILISER/$((prix - 80))/g" "src/pages/vendre-terrain-${slug}.astro"
  sed -i "" "s/PRIX_AGRICOLE/$((prix / 10))/g" "src/pages/vendre-terrain-${slug}.astro"
  sed -i "" "s/PRIX_VUE/$((prix + 100))/g" "src/pages/vendre-terrain-${slug}.astro"
  sed -i "" "s/PRIX_LOTISSEMENT/$((prix + 80))/g" "src/pages/vendre-terrain-${slug}.astro"
  sed -i "" "s/PRIX_GRANDE/$((prix - 50))/g" "src/pages/vendre-terrain-${slug}.astro"
  sed -i "" "s/DELAI_CONSTRUCTIBLE/$((delai - 5))/g" "src/pages/vendre-terrain-${slug}.astro"
  sed -i "" "s/DELAI_VIABILISER/$((delai + 10))/g" "src/pages/vendre-terrain-${slug}.astro"
  sed -i "" "s/DELAI_AGRICOLE/$((delai + 20))/g" "src/pages/vendre-terrain-${slug}.astro"
  sed -i "" "s/DELAI_VUE/$((delai - 8))/g" "src/pages/vendre-terrain-${slug}.astro"
  sed -i "" "s/DELAI_LOTISSEMENT/$((delai - 10))/g" "src/pages/vendre-terrain-${slug}.astro"
  sed -i "" "s/DELAI_GRANDE/$((delai + 15))/g" "src/pages/vendre-terrain-${slug}.astro"
  
  echo "✅ Page vendre-terrain-${slug}.astro créée"
done

echo ""
echo "🎉 Toutes les 27 pages terrain ont été créées avec succès !"
echo "📁 Fichiers créés dans src/pages/"

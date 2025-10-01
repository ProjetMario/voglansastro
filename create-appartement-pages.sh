#!/bin/bash

# Script pour créer les 27 pages appartement automatiquement

# Données des villes : nom|slug|prix_appart|delai|hausse
declare -a villes=(
  "Chambéry|chambery|3700|38|18"
  "Aix-les-Bains|aix-les-bains|4000|35|20"
  "Le Bourget-du-Lac|le-bourget-du-lac|4500|32|22"
  "La Motte-Servolex|la-motte-servolex|3400|38|17"
  "Bassens|bassens|3200|40|16"
  "La Ravoire|la-ravoire|3100|45|15"
  "Cognin|cognin|2900|50|14"
  "Barberaz|barberaz|3000|48|15"
  "Saint-Alban-Leysse|saint-alban-leysse|3100|44|16"
  "Voglans|voglans|3000|48|15"
  "Jacob-Bellecombette|jacob-bellecombette|3300|42|17"
  "Sonnaz|sonnaz|3100|46|16"
  "Challes-les-Eaux|challes-les-eaux|3200|44|17"
  "Barby|barby|2900|50|14"
  "Puygros|puygros|2800|52|13"
  "Saint-Jeoire-Prieuré|saint-jeoire-prieure|3000|48|15"
  "Tresserve|tresserve|3800|38|21"
  "Viviers-du-Lac|viviers-du-lac|3600|40|20"
  "Drumettaz-Clarafond|drumettaz-clarafond|3200|44|17"
  "Méry|mery|3100|46|16"
  "Bourdeau|bourdeau|4200|36|24"
  "Saint-Pierre-d'Albigny|saint-pierre-d-albigny|2700|53|13"
  "Montmélian|montmelian|2800|50|14"
  "Chignin|chignin|2900|48|15"
  "Myans|myans|2800|50|14"
  "La Rochette|la-rochette|2600|56|12"
  "Grésy-sur-Aix|gresy-sur-aix|3300|42|18"
)

for ville_data in "${villes[@]}"; do
  IFS='|' read -r nom slug prix delai hausse <<< "$ville_data"
  
  echo "Création de vendre-appartement-${slug}.astro..."
  
  cat > "src/pages/vendre-appartement-${slug}.astro" << 'EOFPAGE'
---
import Base from '../layouts/Base.astro';
import { Phone, Calculator, MapPin, TrendingUp, Home, Star, Building2 } from 'lucide-react';

const meta = {
  title: "Vendre un Appartement à VILLE_NOM | Estimation Gratuite | Agence de Voglans",
  description: "Vendez votre appartement à VILLE_NOM au meilleur prix. Prix par type, expertise locale, vente rapide. Estimation gratuite sous 48h !",
  keywords: ["vendre appartement VILLE_NOM", "estimation appartement VILLE_NOM", "prix appartement VILLE_NOM", "agence immobilière VILLE_NOM"]
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
          <span>Expert Immobilier à VILLE_NOM</span>
        </div>

        <h1 class="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight text-foreground leading-[1.1]">
          Vendez Votre Appartement à<br/>
          <span class="font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">VILLE_NOM</span>
        </h1>

        <p class="text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed font-light mb-12">
          Notre <span class="text-primary font-medium">connaissance parfaite</span> du marché de VILLE_NOM vous garantit le <span class="text-primary font-medium">meilleur prix</span> pour votre appartement.
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
            <div class="text-sm text-muted font-medium">Prix moyen appartement</div>
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
            Prix par <span class="font-semibold text-primary">Type d'Appartement</span>
          </h2>
          <p class="text-xl text-muted max-w-3xl mx-auto">Données actualisées 2024 pour VILLE_NOM</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">Studio</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">PRIX_STUDIO €/m²</div>
              <div class="text-sm text-muted">25-35 m²</div>
              <div class="text-sm text-muted">Délai : DELAI_STUDIO jours</div>
              <div class="inline-flex items-center gap-1 text-xs text-primary mt-2">
                <TrendingUp className="w-4 h-4" />
                <span>Très demandé</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">T2</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">PRIX_T2 €/m²</div>
              <div class="text-sm text-muted">40-50 m²</div>
              <div class="text-sm text-muted">Délai : DELAI_T2 jours</div>
              <div class="inline-flex items-center gap-1 text-xs text-primary mt-2">
                <Star className="w-4 h-4" />
                <span>Populaire</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">T3</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">PRIX_MOYEN €/m²</div>
              <div class="text-sm text-muted">60-75 m²</div>
              <div class="text-sm text-muted">Délai : DELAI_MOYEN jours</div>
              <div class="inline-flex items-center gap-1 text-xs text-primary mt-2">
                <Home className="w-4 h-4" />
                <span>Familial</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">T4</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">PRIX_T4 €/m²</div>
              <div class="text-sm text-muted">80-95 m²</div>
              <div class="text-sm text-muted">Délai : DELAI_T4 jours</div>
              <div class="inline-flex items-center gap-1 text-xs text-primary mt-2">
                <Home className="w-4 h-4" />
                <span>Spacieux</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">T5+</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">PRIX_T5 €/m²</div>
              <div class="text-sm text-muted">100+ m²</div>
              <div class="text-sm text-muted">Délai : DELAI_T5 jours</div>
              <div class="inline-flex items-center gap-1 text-xs text-primary mt-2">
                <Star className="w-4 h-4" />
                <span>Prestige</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">Avec Balcon</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">PRIX_BALCON €/m²</div>
              <div class="text-sm text-muted">Extérieur</div>
              <div class="text-sm text-muted">Délai : DELAI_BALCON jours</div>
              <div class="inline-flex items-center gap-1 text-xs text-primary mt-2">
                <Star className="w-4 h-4" />
                <span>Plus-value</span>
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
          <p class="text-xl text-muted">Recevez une estimation précise de votre appartement sous 48h</p>
        </div>

        <div class="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Surface habitable</label>
                <input type="number" placeholder="65 m²" class="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Type d'appartement</label>
                <select class="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option>Studio</option>
                  <option>T2</option>
                  <option>T3</option>
                  <option>T4</option>
                  <option>T5 et +</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Étage</label>
                <input type="number" placeholder="3" class="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Ascenseur</label>
                <select class="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option>Oui</option>
                  <option>Non</option>
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
          Expert Appartements à <span class="font-semibold">VILLE_NOM</span>
        </h2>
        <p class="text-xl text-white/90 mb-8">Notre connaissance du marché local garantit votre réussite</p>
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
  sed -i "" "s/VILLE_NOM/${nom}/g" "src/pages/vendre-appartement-${slug}.astro"
  sed -i "" "s/PRIX_MOYEN/${prix}/g" "src/pages/vendre-appartement-${slug}.astro"
  sed -i "" "s/DELAI_MOYEN/${delai}/g" "src/pages/vendre-appartement-${slug}.astro"
  sed -i "" "s/HAUSSE_MOYEN/${hausse}/g" "src/pages/vendre-appartement-${slug}.astro"
  sed -i "" "s/PRIX_STUDIO/$((prix + 200))/g" "src/pages/vendre-appartement-${slug}.astro"
  sed -i "" "s/PRIX_T2/$((prix + 100))/g" "src/pages/vendre-appartement-${slug}.astro"
  sed -i "" "s/PRIX_T4/$((prix - 100))/g" "src/pages/vendre-appartement-${slug}.astro"
  sed -i "" "s/PRIX_T5/$((prix - 200))/g" "src/pages/vendre-appartement-${slug}.astro"
  sed -i "" "s/PRIX_BALCON/$((prix + 150))/g" "src/pages/vendre-appartement-${slug}.astro"
  sed -i "" "s/DELAI_STUDIO/$((delai - 3))/g" "src/pages/vendre-appartement-${slug}.astro"
  sed -i "" "s/DELAI_T2/$((delai - 2))/g" "src/pages/vendre-appartement-${slug}.astro"
  sed -i "" "s/DELAI_T4/$((delai + 2))/g" "src/pages/vendre-appartement-${slug}.astro"
  sed -i "" "s/DELAI_T5/$((delai + 4))/g" "src/pages/vendre-appartement-${slug}.astro"
  sed -i "" "s/DELAI_BALCON/$((delai - 2))/g" "src/pages/vendre-appartement-${slug}.astro"
  
  echo "✅ Page vendre-appartement-${slug}.astro créée"
done

echo ""
echo "🎉 Toutes les 27 pages appartement ont été créées avec succès !"
echo "📁 Fichiers créés dans src/pages/"

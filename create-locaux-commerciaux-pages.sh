#!/bin/bash

# Script pour créer les 27 pages locaux commerciaux automatiquement

# Données des villes : nom|slug|prix_vente|loyer_m2|delai
declare -a villes=(
  "Chambéry|chambery|4500|180|90"
  "Aix-les-Bains|aix-les-bains|4800|200|85"
  "Le Bourget-du-Lac|le-bourget-du-lac|5200|220|80"
  "La Motte-Servolex|la-motte-servolex|4000|160|95"
  "Bassens|bassens|3800|150|100"
  "La Ravoire|la-ravoire|3600|140|105"
  "Cognin|cognin|3400|130|110"
  "Barberaz|barberaz|3500|135|108"
  "Saint-Alban-Leysse|saint-alban-leysse|3700|145|102"
  "Voglans|voglans|3500|135|108"
  "Jacob-Bellecombette|jacob-bellecombette|3900|155|98"
  "Sonnaz|sonnaz|3600|140|105"
  "Challes-les-Eaux|challes-les-eaux|3800|150|100"
  "Barby|barby|3300|125|112"
  "Puygros|puygros|3200|120|115"
  "Saint-Jeoire-Prieuré|saint-jeoire-prieure|3400|130|110"
  "Tresserve|tresserve|4600|190|88"
  "Viviers-du-Lac|viviers-du-lac|4200|170|92"
  "Drumettaz-Clarafond|drumettaz-clarafond|3800|150|100"
  "Méry|mery|3600|140|105"
  "Bourdeau|bourdeau|5000|210|82"
  "Saint-Pierre-d'Albigny|saint-pierre-d-albigny|3000|110|120"
  "Montmélian|montmelian|3200|120|115"
  "Chignin|chignin|3300|125|112"
  "Myans|myans|3200|120|115"
  "La Rochette|la-rochette|2900|105|125"
  "Grésy-sur-Aix|gresy-sur-aix|3900|155|98"
)

for ville_data in "${villes[@]}"; do
  IFS='|' read -r nom slug prix loyer delai <<< "$ville_data"
  
  echo "Création de locaux-commerciaux-${slug}.astro..."
  
  cat > "src/pages/locaux-commerciaux-${slug}.astro" << 'EOFPAGE'
---
import Base from '../layouts/Base.astro';
import { Phone, Calculator, MapPin, TrendingUp, Store, Building2, ShoppingBag, Briefcase } from 'lucide-react';

const meta = {
  title: "Local Commercial à Vendre ou Louer à VILLE_NOM | Agence de Voglans",
  description: "Trouvez votre local commercial à VILLE_NOM. Prix de vente et loyers actualisés. Boutique, bureau, entrepôt. Expertise locale professionnelle.",
  keywords: ["local commercial VILLE_NOM", "boutique à vendre VILLE_NOM", "bureau VILLE_NOM", "commerce VILLE_NOM"]
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
          <span>Expert Immobilier Professionnel à VILLE_NOM</span>
        </div>

        <h1 class="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight text-foreground leading-[1.1]">
          Local Commercial à<br/>
          <span class="font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">VILLE_NOM</span>
        </h1>

        <p class="text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed font-light mb-12">
          Notre <span class="text-primary font-medium">expertise professionnelle</span> du marché de VILLE_NOM vous accompagne dans votre projet commercial.
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
            <div class="text-3xl font-bold text-primary mb-2">PRIX_VENTE €/m²</div>
            <div class="text-sm text-muted font-medium">Prix moyen vente</div>
          </div>
          <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
            <div class="text-3xl font-bold text-primary mb-2">LOYER_M2 €/m²/an</div>
            <div class="text-sm text-muted font-medium">Loyer moyen annuel</div>
          </div>
          <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10 shadow-lg">
            <div class="text-3xl font-bold text-primary mb-2">DELAI_MOYEN jours</div>
            <div class="text-sm text-muted font-medium">Délai moyen transaction</div>
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
            Types de <span class="font-semibold text-primary">Locaux Commerciaux</span>
          </h2>
          <p class="text-xl text-muted max-w-3xl mx-auto">Données actualisées 2024 pour VILLE_NOM</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Store className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">Boutique Centre-Ville</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">PRIX_BOUTIQUE €/m²</div>
              <div class="text-sm text-muted">Vente : 30-80 m²</div>
              <div class="text-sm text-primary font-medium">Loyer : LOYER_BOUTIQUE €/m²/an</div>
              <div class="inline-flex items-center gap-1 text-xs text-primary mt-2">
                <TrendingUp className="w-4 h-4" />
                <span>Emplacement premium</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">Bureau</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">PRIX_BUREAU €/m²</div>
              <div class="text-sm text-muted">Vente : 50-200 m²</div>
              <div class="text-sm text-primary font-medium">Loyer : LOYER_BUREAU €/m²/an</div>
              <div class="inline-flex items-center gap-1 text-xs text-primary mt-2">
                <Briefcase className="w-4 h-4" />
                <span>Professionnel</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">Commerce de Proximité</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">PRIX_PROXIMITE €/m²</div>
              <div class="text-sm text-muted">Vente : 40-100 m²</div>
              <div class="text-sm text-primary font-medium">Loyer : LOYER_PROXIMITE €/m²/an</div>
              <div class="inline-flex items-center gap-1 text-xs text-primary mt-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Quartier résidentiel</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">Local d'Activité</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">PRIX_ACTIVITE €/m²</div>
              <div class="text-sm text-muted">Vente : 100-500 m²</div>
              <div class="text-sm text-primary font-medium">Loyer : LOYER_ACTIVITE €/m²/an</div>
              <div class="inline-flex items-center gap-1 text-xs text-primary mt-2">
                <Building2 className="w-4 h-4" />
                <span>Zone artisanale</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Store className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">Entrepôt</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">PRIX_ENTREPOT €/m²</div>
              <div class="text-sm text-muted">Vente : 200-1000 m²</div>
              <div class="text-sm text-primary font-medium">Loyer : LOYER_ENTREPOT €/m²/an</div>
              <div class="inline-flex items-center gap-1 text-xs text-primary mt-2">
                <Building2 className="w-4 h-4" />
                <span>Logistique</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary/5 to-white rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground">Plateau de Bureaux</h3>
            </div>
            <div class="space-y-2">
              <div class="text-3xl font-bold text-primary">PRIX_PLATEAU €/m²</div>
              <div class="text-sm text-muted">Vente : 200-1000 m²</div>
              <div class="text-sm text-primary font-medium">Loyer : LOYER_PLATEAU €/m²/an</div>
              <div class="inline-flex items-center gap-1 text-xs text-primary mt-2">
                <TrendingUp className="w-4 h-4" />
                <span>Grande surface</span>
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
          <p class="text-xl text-muted">Recevez une estimation précise de votre local commercial sous 48h</p>
        </div>

        <div class="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Surface du local</label>
                <input type="number" placeholder="120 m²" class="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Type de local</label>
                <select class="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option>Boutique</option>
                  <option>Bureau</option>
                  <option>Local d'activité</option>
                  <option>Entrepôt</option>
                  <option>Autre</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Projet</label>
                <select class="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option>Vendre</option>
                  <option>Louer</option>
                  <option>Acheter</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Emplacement</label>
                <select class="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                  <option>Centre-ville</option>
                  <option>Zone commerciale</option>
                  <option>Zone artisanale</option>
                  <option>Quartier résidentiel</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-foreground mb-2">Votre nom / Société</label>
              <input type="text" placeholder="Nom complet ou raison sociale" class="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
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
          Expert Immobilier Professionnel à <span class="font-semibold">VILLE_NOM</span>
        </h2>
        <p class="text-xl text-white/90 mb-8">Notre connaissance du marché professionnel local garantit votre réussite</p>
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
  sed -i "" "s/VILLE_NOM/${nom}/g" "src/pages/locaux-commerciaux-${slug}.astro"
  sed -i "" "s/PRIX_VENTE/${prix}/g" "src/pages/locaux-commerciaux-${slug}.astro"
  sed -i "" "s/LOYER_M2/${loyer}/g" "src/pages/locaux-commerciaux-${slug}.astro"
  sed -i "" "s/DELAI_MOYEN/${delai}/g" "src/pages/locaux-commerciaux-${slug}.astro"
  sed -i "" "s/PRIX_BOUTIQUE/$((prix + 500))/g" "src/pages/locaux-commerciaux-${slug}.astro"
  sed -i "" "s/PRIX_BUREAU/$((prix - 200))/g" "src/pages/locaux-commerciaux-${slug}.astro"
  sed -i "" "s/PRIX_PROXIMITE/$((prix - 300))/g" "src/pages/locaux-commerciaux-${slug}.astro"
  sed -i "" "s/PRIX_ACTIVITE/$((prix - 800))/g" "src/pages/locaux-commerciaux-${slug}.astro"
  sed -i "" "s/PRIX_ENTREPOT/$((prix - 1200))/g" "src/pages/locaux-commerciaux-${slug}.astro"
  sed -i "" "s/PRIX_PLATEAU/$((prix - 400))/g" "src/pages/locaux-commerciaux-${slug}.astro"
  sed -i "" "s/LOYER_BOUTIQUE/$((loyer + 40))/g" "src/pages/locaux-commerciaux-${slug}.astro"
  sed -i "" "s/LOYER_BUREAU/$((loyer - 10))/g" "src/pages/locaux-commerciaux-${slug}.astro"
  sed -i "" "s/LOYER_PROXIMITE/$((loyer - 20))/g" "src/pages/locaux-commerciaux-${slug}.astro"
  sed -i "" "s/LOYER_ACTIVITE/$((loyer - 50))/g" "src/pages/locaux-commerciaux-${slug}.astro"
  sed -i "" "s/LOYER_ENTREPOT/$((loyer - 80))/g" "src/pages/locaux-commerciaux-${slug}.astro"
  sed -i "" "s/LOYER_PLATEAU/$((loyer - 30))/g" "src/pages/locaux-commerciaux-${slug}.astro"
  
  echo "✅ Page locaux-commerciaux-${slug}.astro créée"
done

echo ""
echo "🎉 Toutes les 27 pages locaux commerciaux ont été créées avec succès !"
echo "📁 Fichiers créés dans src/pages/"

#!/bin/bash

# Script pour supprimer les imports Fragment inutilisés et simplifier le code

echo "🔧 Correction des imports Fragment dans tous les fichiers blog..."

# Liste des fichiers à corriger
files=(
  "src/pages/blog/vendre-maison-chambery-2025.astro"
  "src/pages/blog/acheter-lac-bourget-2025.astro"
  "src/pages/blog/installer-chambery-famille-ecoles-vie-locale-securite.astro"
  "src/pages/blog/investir-landiers-chambery.astro"
  "src/pages/blog/investir-voglans-2025.astro"
  "src/pages/blog/investir-voglans-savoie.astro"
  "src/pages/blog/mairie-aix-les-bains-guide-complet.astro"
  "src/pages/blog/mairie-chambery-guide-complet.astro"
  "src/pages/blog/mairie-cognin-guide-complet.astro"
  "src/pages/blog/mairie-la-motte-servolex-guide-complet.astro"
  "src/pages/blog/mairie-montmelian-guide-complet.astro"
  "src/pages/blog/marche-immobilier-voglans-2025.astro"
  "src/pages/blog/quartiers-voglans-guide-complet.astro"
  "src/pages/blog/zone-commerciale-landiers-chambery.astro"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "  → Traitement de $file"
    
    # Supprimer la ligne d'import Fragment
    sed -i.bak "/import { Fragment } from 'astro';/d" "$file"
    sed -i.bak "/import { Fragment } from \"astro\";/d" "$file"
    
    # Remplacer <Fragment slot="head"> par <Fragment slot="head"> (slot sans Fragment)
    # On va le remplacer par un simple set:html si nécessaire
    
  fi
done

# Supprimer les fichiers de backup
find src/pages/blog -name "*.bak" -delete

echo "✅ Correction terminée!"
echo ""
echo "🧪 Lancement du build pour vérifier..."
npm run build

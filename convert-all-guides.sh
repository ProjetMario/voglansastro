#!/bin/bash

echo "📚 Conversion des guides en PDF..."
echo "=================================="
echo ""

# Créer le dossier si besoin
mkdir -p public/guides

# Liste des guides
guides=(
  "guide-vendre-2025:Guide Complet de la Vente Immobilière 2025"
  "guide-diagnostics-obligatoires:Checklist Diagnostics Obligatoires 2025"
  "guide-estimation-bien:Comment Estimer Son Bien Immobilier"
  "guide-fiscalite-vente:Fiscalité de la Vente Immobilière 2025"
  "guide-preparer-maison:Préparer Sa Maison Pour La Vente"
)

# Compteurs
total=0
success=0
errors=0

for guide_info in "${guides[@]}"; do
  # Séparer nom et titre
  guide=$(echo "$guide_info" | cut -d: -f1)
  title=$(echo "$guide_info" | cut -d: -f2)
  
  total=$((total + 1))
  
  echo "[$total/5] 📄 Conversion de $guide.md..."
  
  # Vérifier que le fichier Markdown existe
  if [ ! -f "$guide.md" ]; then
    echo "   ❌ Fichier $guide.md non trouvé, skippé"
    errors=$((errors + 1))
    continue
  fi
  
  # Étape 1 : Markdown → HTML
  echo "   → Génération HTML..."
  pandoc "$guide.md" \
    -o "public/guides/${guide#guide-}.html" \
    --standalone \
    --toc \
    --toc-depth=2 \
    -V title="$title" \
    2>/dev/null
  
  if [ $? -ne 0 ]; then
    echo "   ❌ Erreur conversion HTML"
    errors=$((errors + 1))
    continue
  fi
  
  # Étape 2 : HTML → PDF (Chrome headless)
  echo "   → Génération PDF..."
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
    --headless \
    --disable-gpu \
    --no-sandbox \
    --print-to-pdf="$(pwd)/public/guides/${guide#guide-}.pdf" \
    "file://$(pwd)/public/guides/${guide#guide-}.html" \
    2>/dev/null
  
  if [ $? -eq 0 ] && [ -f "public/guides/${guide#guide-}.pdf" ]; then
    size=$(ls -lh "public/guides/${guide#guide-}.pdf" | awk '{print $5}')
    echo "   ✅ PDF généré : $size"
    success=$((success + 1))
  else
    echo "   ❌ Erreur génération PDF"
    errors=$((errors + 1))
  fi
  
  echo ""
done

# Résumé
echo "=================================="
echo "📊 RÉSUMÉ"
echo "=================================="
echo "✅ Succès : $success/$total"
echo "❌ Erreurs : $errors/$total"
echo ""

if [ $success -gt 0 ]; then
  echo "📁 Fichiers générés dans : public/guides/"
  echo ""
  ls -lh public/guides/*.pdf 2>/dev/null | awk '{print "  ��", $9, "-", $5}'
fi

echo ""
echo "🎉 Conversion terminée !"

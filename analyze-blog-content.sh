#!/bin/bash

# Script d'analyse des articles de blog manquants
echo "🔍 ANALYSE DES ARTICLES DE BLOG"
echo "================================"
echo ""

# Pages existantes
echo "📁 PAGES EXISTANTES (${#EXISTING_PAGES[@]}):"
EXISTING_PAGES=(
  "installer-chambery-famille-ecoles-vie-locale-securite"
  "zone-commerciale-landiers-chambery"
  "investir-landiers-chambery"
  "acheter-lac-bourget-2025"
  "investir-voglans-2025"
  "investir-voglans-savoie"
  "marche-immobilier-voglans-2025"
  "quartiers-voglans-guide-complet"
  "vendre-maison-chambery-2025"
)

for page in "${EXISTING_PAGES[@]}"; do
  echo "  ✅ $page"
done

echo ""
echo "📋 ARTICLES DANS POSTS.JS (${#POSTS_IN_JS[@]}):"

# Extraire les hrefs de posts.js
grep 'href.*blog' src/data/posts.js | head -50 | sed 's/.*href: "\([^"]*\)".*/  \1/' | sed 's|/blog/||'

echo ""
echo "🚨 ARTICLES MANQUANTS:"
echo "  (Articles dans posts.js mais pages non créées)"
echo ""

# Liste complète des articles dans posts.js
ALL_POSTS=$(grep 'href.*blog' src/data/posts.js | sed 's/.*href: "\([^"]*\)".*/\1/' | sed 's|/blog/||')

MISSING_COUNT=0
for post in $ALL_POSTS; do
  PAGE_EXISTS=false
  for existing in "${EXISTING_PAGES[@]}"; do
    if [ "$post" = "$existing" ]; then
      PAGE_EXISTS=true
      break
    fi
  done

  if [ "$PAGE_EXISTS" = false ]; then
    echo "  ❌ $post"
    ((MISSING_COUNT++))
  fi
done

echo ""
echo "📊 RÉSUMÉ:"
echo "  ✅ Pages existantes: ${#EXISTING_PAGES[@]}"
echo "  ❌ Articles manquants: $MISSING_COUNT"
echo "  📈 Total posts.js: $(echo "$ALL_POSTS" | wc -l)"

echo ""
echo "🎯 TOP 10 ARTICLES À CRÉER EN PRIORITÉ:"
echo "  (Classés par potentiel SEO et trafic)"
echo ""

# Top articles manquants par trafic potentiel
PRIORITY_ARTICLES=(
  "mairie-chambery-guide-complet"
  "mairie-aix-les-bains-guide-complet"
  "mairie-la-motte-servolex-guide-complet"
  "mairie-cognin-guide-complet"
  "mairie-montmelian-guide-complet"
  "mairie-bassens-guide-complet"
  "mairie-jacob-bellecombette-guide-complet"
  "mairie-saint-alban-leysse-guide-complet"
  "mairie-viviers-du-lac-guide-complet"
  "mairie-bourget-du-lac-guide-complet"
)

for i in "${!PRIORITY_ARTICLES[@]}"; do
  echo "  $((i+1)). ${PRIORITY_ARTICLES[i]}"
done

echo ""
echo "💡 RECOMMANDATIONS:"
echo "  1. Créer les 10 articles mairies en priorité (SEO local)"
echo "  2. Enrichir les articles courts existants"
echo "  3. Ajouter des FAQ à tous les articles"
echo "  4. Créer des headers personnalisés"
echo "  5. Optimiser le maillage interne"

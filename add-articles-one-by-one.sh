#!/bin/bash

# Script pour ajouter les articles de mairies un par un et tester le build
# Couleurs pour les logs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fichiers
INDEX_FILE="src/pages/blog/index.astro"
LOG_FILE="build-test-log.txt"
SUCCESS_FILE="articles-success.txt"
FAILED_FILE="articles-failed.txt"

echo "🚀 Début du test des articles de mairies"
echo "=========================================="
echo "" > $LOG_FILE
echo "" > $SUCCESS_FILE
echo "" > $FAILED_FILE

# Liste des articles à ajouter (format: titre|description|href|date|readingTime)
articles=(
  "Mairie d'Aix-les-Bains : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie d'Aix-les-Bains : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-aix-les-bains-guide-complet|20 janvier 2025|15 min|mairie Aix-les-Bains"
  
  "Mairie de La Motte-Servolex : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de La Motte-Servolex : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-la-motte-servolex-guide-complet|29 janvier 2025|13 min|mairie La Motte-Servolex"
  
  "Mairie de Cognin : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Cognin : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-cognin-guide-complet|27 janvier 2025|12 min|mairie Cognin"
  
  "Mairie de Montmélian : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Montmélian : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-montmelian-guide-complet|30 janvier 2025|13 min|mairie Montmélian"
  
  "Mairie de Bassens : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Bassens : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-bassens-guide-complet|26 janvier 2025|12 min|mairie Bassens"
  
  "Mairie de Jacob-Bellecombette : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Jacob-Bellecombette : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-jacob-bellecombette-guide-complet|28 janvier 2025|12 min|mairie Jacob-Bellecombette"
  
  "Mairie de Saint-Alban-Leysse : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Saint-Alban-Leysse : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-saint-alban-leysse-guide-complet|31 janvier 2025|12 min|mairie Saint-Alban-Leysse"
  
  "Mairie de Saint-Baldoph : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Saint-Baldoph : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-saint-baldoph-guide-complet|1 février 2025|12 min|mairie Saint-Baldoph"
  
  "Mairie de Viviers-du-Lac : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Viviers-du-Lac : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-viviers-du-lac-guide-complet|17 janvier 2025|12 min|mairie Viviers-du-Lac"
  
  "Mairie du Bourget-du-Lac : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie du Bourget-du-Lac : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-bourget-du-lac-guide-complet|21 janvier 2025|12 min|mairie Bourget-du-Lac"
  
  "Mairie de Drumettaz : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Drumettaz : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-drumettaz-guide-complet|22 janvier 2025|12 min|mairie Drumettaz"
  
  "Mairie de Méry : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Méry : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-mery-guide-complet|16 janvier 2025|12 min|mairie Méry"
  
  "Mairie de Sonnaz : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Sonnaz : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-sonnaz-guide-complet|18 janvier 2025|12 min|mairie Sonnaz"
  
  "Mairie d'Aiguebelette-le-Lac : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie d'Aiguebelette-le-Lac : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-aiguebelette-le-lac-guide-complet|24 janvier 2025|12 min|mairie Aiguebelette-le-Lac"
  
  "Mairie d'Albens : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie d'Albens : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-albens-guide-complet|25 janvier 2025|12 min|mairie Albens"
  
  "Mairie d'Aillon-le-Jeune : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie d'Aillon-le-Jeune : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-aillon-le-jeune-guide-complet|3 février 2025|12 min|mairie Aillon-le-Jeune"
  
  "Mairie d'Aillon-le-Vieux : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie d'Aillon-le-Vieux : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-aillon-le-vieux-guide-complet|4 février 2025|12 min|mairie Aillon-le-Vieux"
  
  "Mairie d'Arith : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie d'Arith : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-arith-guide-complet|5 février 2025|12 min|mairie Arith"
  
  "Mairie d'Attignat-Oncin : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie d'Attignat-Oncin : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-attignat-oncin-guide-complet|6 février 2025|12 min|mairie Attignat-Oncin"
  
  "Mairie d'Avressieux : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie d'Avressieux : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-avressieux-guide-complet|7 février 2025|12 min|mairie Avressieux"
  
  "Mairie de Barraux : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Barraux : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-barraux-guide-complet|8 février 2025|12 min|mairie Barraux"
  
  "Mairie de Bellecombe-en-Bauges : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Bellecombe-en-Bauges : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-bellecombe-en-bauges-guide-complet|9 février 2025|12 min|mairie Bellecombe-en-Bauges"
  
  "Mairie de Belmont-Tramonet : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Belmont-Tramonet : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-belmont-tramonet-guide-complet|10 février 2025|12 min|mairie Belmont-Tramonet"
  
  "Mairie de La Bauche : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de La Bauche : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-la-bauche-guide-complet|11 février 2025|12 min|mairie La Bauche"
  
  "Mairie de Chignin : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Chignin : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-chignin-guide-complet|12 février 2025|12 min|mairie Chignin"
  
  "Mairie de Corbel : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Corbel : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-corbel-guide-complet|13 février 2025|12 min|mairie Corbel"
  
  "Mairie de Cruet : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Cruet : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-cruet-guide-complet|14 février 2025|12 min|mairie Cruet"
  
  "Mairie de Curienne : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Curienne : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-curienne-guide-complet|15 février 2025|12 min|mairie Curienne"
  
  "Mairie de Saint-Cassin : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Saint-Cassin : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-saint-cassin-guide-complet|2 février 2025|12 min|mairie Saint-Cassin"
  
  "Mairie de Voglans : Guide Complet 2025 - Services et Démarches|Tout savoir sur la mairie de Voglans : horaires d'ouverture, services administratifs, démarches en ligne, état civil, urbanisme et contact mairie.|/blog/mairie-voglans-guide-complet|23 janvier 2025|12 min|mairie Voglans"
)

total=${#articles[@]}
counter=1
success_count=0
failed_count=0

for article_data in "${articles[@]}"; do
  # Parse article data
  IFS='|' read -r title description href date readingTime tags <<< "$article_data"
  
  article_name=$(echo "$href" | sed 's|/blog/||')
  
  echo -e "\n${YELLOW}[${counter}/${total}] Test de: ${article_name}${NC}"
  echo "=========================================="
  
  # Créer un backup du fichier index.astro
  cp $INDEX_FILE "${INDEX_FILE}.backup"
  
  # Ajouter l'article dans index.astro (avant la ligne "];")
  article_json="  {
    title: \"${title}\",
    description: \"${description}\",
    href: \"${href}\",
    date: \"${date}\",
    readingTime: \"${readingTime}\",
    category: \"Services publics\",
    featured: true,
    image: \"https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop&q=80\",
    tags: [\"${tags}\", \"services administratifs\", \"démarches en ligne\", \"état civil\", \"urbanisme\"]
  },"
  
  # Insérer l'article avant le dernier "];"
  sed -i '' "/^];$/i\\
$article_json
" $INDEX_FILE
  
  echo "📝 Article ajouté dans index.astro"
  
  # Tester le build
  echo "🔨 Test du build..."
  if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✅ BUILD RÉUSSI${NC}"
    echo "$article_name" >> $SUCCESS_FILE
    echo "[$(date)] SUCCESS: $article_name" >> $LOG_FILE
    
    # Commit et push
    git add $INDEX_FILE
    git commit -m "test: Ajout article ${article_name} (${counter}/${total}) - BUILD OK ✅" > /dev/null 2>&1
    git push origin main > /dev/null 2>&1
    
    echo "🚀 Commit et push effectués"
    ((success_count++))
    
  else
    echo -e "${RED}❌ BUILD ÉCHOUÉ${NC}"
    echo "$article_name" >> $FAILED_FILE
    echo "[$(date)] FAILED: $article_name" >> $LOG_FILE
    
    # Restaurer le backup
    mv "${INDEX_FILE}.backup" $INDEX_FILE
    echo "🔄 Rollback effectué"
    ((failed_count++))
  fi
  
  # Nettoyer le backup si build réussi
  rm -f "${INDEX_FILE}.backup"
  
  ((counter++))
  sleep 2
done

echo -e "\n${GREEN}=========================================="
echo "RÉSUMÉ DU TEST"
echo "==========================================${NC}"
echo -e "✅ Articles réussis: ${GREEN}${success_count}/${total}${NC}"
echo -e "❌ Articles échoués: ${RED}${failed_count}/${total}${NC}"

if [ $failed_count -gt 0 ]; then
  echo -e "\n${RED}Articles problématiques:${NC}"
  cat $FAILED_FILE
fi

echo -e "\nDétails dans: $LOG_FILE"

#!/bin/bash

# Script pour identifier le fichier problématique
echo "🔍 Test des fichiers blog un par un..."

# Créer un dossier temporaire pour les fichiers
mkdir -p src/pages/blog_backup
mv src/pages/blog/*.astro src/pages/blog_backup/ 2>/dev/null

# Tester chaque fichier
for file in src/pages/blog_backup/*.astro; do
    filename=$(basename "$file")
    echo "Testing: $filename"
    
    # Copier uniquement index.astro et le fichier de test
    cp src/pages/blog_backup/index.astro src/pages/blog/
    cp "$file" src/pages/blog/
    
    # Tester le build
    if npm run build > /dev/null 2>&1; then
        echo "✅ $filename - OK"
    else
        echo "❌ $filename - ERREUR TROUVÉE!"
        echo "Le fichier problématique est: $filename"
        break
    fi
    
    # Nettoyer
    rm src/pages/blog/*.astro
done

# Restaurer tous les fichiers
mv src/pages/blog_backup/*.astro src/pages/blog/
rmdir src/pages/blog_backup

echo "✅ Test terminé"

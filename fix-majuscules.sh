#!/bin/bash

# Script de correction des majuscules inappropriées en français
# L'Agence de Voglans - Octobre 2025

echo "🔧 Correction des majuscules inappropriées..."
echo ""

# Compteur de fichiers modifiés
count=0

# Fonction de remplacement
replace_in_files() {
    local search="$1"
    local replace="$2"
    local description="$3"
    
    echo "📝 Correction : $description"
    
    # Trouver et remplacer dans tous les fichiers .astro
    find src -name "*.astro" -type f -exec sed -i '' "s/$search/$replace/g" {} +
    
    count=$((count + 1))
}

# Liste des corrections à effectuer
replace_in_files "Estimation Gratuite" "Estimation gratuite" "Estimation Gratuite → Estimation gratuite"
replace_in_files "Recevoir Mon Estimation Gratuite" "Recevoir mon estimation gratuite" "Recevoir Mon Estimation Gratuite"
replace_in_files "Obtenir Mon Estimation Gratuite" "Obtenir mon estimation gratuite" "Obtenir Mon Estimation Gratuite"
replace_in_files "Nous Appeler" "Nous appeler" "Nous Appeler"
replace_in_files "Nous Contacter" "Nous contacter" "Nous Contacter"
replace_in_files "Services Premium" "Services premium" "Services Premium"
replace_in_files "Guide Pratique" "Guide pratique" "Guide Pratique"
replace_in_files "Expertise Locale" "Expertise locale" "Expertise Locale"
replace_in_files "Accompagnement Personnalisé" "Accompagnement personnalisé" "Accompagnement Personnalisé"
replace_in_files "Votre Projet" "Votre projet" "Votre Projet"

echo ""
echo "✅ $count types de corrections effectuées !"
echo "🎉 Toutes les majuscules ont été corrigées !"
echo ""
echo "Pour vérifier les changements :"
echo "  git diff src/"

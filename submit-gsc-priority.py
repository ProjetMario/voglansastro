#!/usr/bin/env python3
"""
Script pour générer la liste des URLs prioritaires à soumettre à Google Search Console
Limite : 10 URLs/jour recommandée par Google
"""

# URLs prioritaires basées sur l'analyse GSC (mémoires système)
# Pages avec le plus de potentiel de mandats de vente
PRIORITY_URLS = [
    # Niveau 1 - Ultra urgent (estimation grandes villes)
    "https://agencevoglans.fr/estimation/chambery",          # 880 recherches/mois
    "https://agencevoglans.fr/estimation/aix-les-bains",      # 590 recherches/mois
    "https://agencevoglans.fr/estimation/voglans",            # 325 impressions
    "https://agencevoglans.fr/estimation/la-ravoire",         # 120 recherches/mois
    "https://agencevoglans.fr/estimation/bassens",            # 90 recherches/mois
    
    # Niveau 2 - Très urgent (pages vente + estimation secondaires)
    "https://agencevoglans.fr/vendre-maison-chambery",        # 260 recherches/mois
    "https://agencevoglans.fr/vendre",                        # 320 recherches/mois
    "https://agencevoglans.fr/estimation/cognin",             # 80 recherches/mois
    "https://agencevoglans.fr/estimation/la-motte-servolex",  # 70 recherches/mois
    "https://agencevoglans.fr/immeuble-rapport-chambery",     # 90 recherches/mois
    
    # Niveau 3 - Homepage + blog
    "https://agencevoglans.fr/",                              # Homepage
    "https://agencevoglans.fr/blog",                          # Index blog
    "https://agencevoglans.fr/blog/estimation-maison-voglans-2025",
    "https://agencevoglans.fr/blog/vendre-maison-chambery-2025",
    "https://agencevoglans.fr/blog/investir-voglans-2025",
    
    # Niveau 4 - Autres communes importantes
    "https://agencevoglans.fr/estimation/jacob-bellecombette",
    "https://agencevoglans.fr/estimation/saint-alban-leysse",
    "https://agencevoglans.fr/estimation/barberaz",
    "https://agencevoglans.fr/estimation/le-bourget-du-lac",
    "https://agencevoglans.fr/estimation/viviers-du-lac",
]

def main():
    print("📋 URLs Prioritaires pour Google Search Console")
    print("=" * 60)
    print(f"Total : {len(PRIORITY_URLS)} URLs")
    print(f"Limite GSC : 10 URLs/jour")
    print(f"Durée : {len(PRIORITY_URLS) // 10 + 1} jours")
    print()
    
    # Sauvegarder en blocs de 10
    for i in range(0, len(PRIORITY_URLS), 10):
        batch = PRIORITY_URLS[i:i+10]
        day = i // 10 + 1
        
        filename = f"gsc-priority-day-{day}.txt"
        with open(filename, "w") as f:
            for url in batch:
                f.write(url + "\n")
        
        print(f"📅 Jour {day} ({len(batch)} URLs) : {filename}")
        for url in batch:
            print(f"   - {url}")
        print()
    
    print("✅ Fichiers générés !")
    print()
    print("📝 Instructions :")
    print("1. Aller sur Google Search Console : https://search.google.com/search-console")
    print("2. Sélectionner la propriété agencevoglans.fr")
    print("3. Aller dans 'Inspection d'URL'")
    print("4. Soumettre chaque URL individuellement")
    print("5. OU utiliser l'API GSC pour soumission en lot")
    print()
    print("⚠️  Limite : 10 URLs/jour maximum")

if __name__ == "__main__":
    main()

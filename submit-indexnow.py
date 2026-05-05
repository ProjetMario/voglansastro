#!/usr/bin/env python3
"""
Script pour soumettre toutes les URLs du site à IndexNow
Accélère l'indexation sur Bing, Yandex et autres moteurs de recherche
"""

import json
import requests
from typing import List

# Configuration
DOMAIN = "agencevoglans.fr"
KEY = "b24a8878f5a82a03301f39f75d30b882"
INDEXNOW_ENDPOINTS = [
    "https://www.bing.com/indexnow",
    "https://yandex.com/indexnow"
]

# URLs principales
MAIN_PAGES = [
    "https://agencevoglans.fr/",
    "https://agencevoglans.fr/estimation",
    "https://agencevoglans.fr/vendre",
    "https://agencevoglans.fr/acheter",
    "https://agencevoglans.fr/contact",
    "https://agencevoglans.fr/a-propos",
    "https://agencevoglans.fr/cgv",
    "https://agencevoglans.fr/confidentialite",
    "https://agencevoglans.fr/blog",
]

# URLs des communes (estimation)
COMMUNES = [
    "chambery", "aix-les-bains", "voglans", "la-ravoire", "barberaz", "bassens",
    "cognin", "jacob-bellecombette", "saint-alban-leysse", "la-motte-servolex",
    "le-bourget-du-lac", "viviers-du-lac", "tresserve", "drumettaz-clarafond",
    "sonnaz", "mery", "challes-les-eaux", "montmelian", "saint-baldoph",
    "gresy-sur-aix", "mouxy", "brison-saint-innocent", "vimines", "montagnole",
    "chignin", "trevignin", "la-chapelle-du-mont-du-chat"
]

# URLs des fonds de commerce
FONDS_COMMERCE = [
    "aix-les-bains", "barberaz", "barby", "bassens", "bourdeau", "challes-les-eaux",
    "chambery", "chignin", "cognin", "drumettaz-clarafond", "gresy-sur-aix",
    "jacob-bellecombette", "la-motte-servolex", "la-ravoire", "le-bourget-du-lac",
    "montagnole", "montmelian", "mouxy", "sonnaz", "saint-alban-leysse",
    "saint-baldoph", "tresserve", "viviers-du-lac", "vimines", "voglans"
]

# URLs des immeubles de rapport
IMMEUBLES_RAPPORT = [
    "aix-les-bains", "barberaz", "barby", "bassens", "challes-les-eaux",
    "chambery", "chignin", "cognin", "drumettaz-clarafond", "gresy-sur-aix",
    "jacob-bellecombette", "la-motte-servolex", "la-ravoire", "le-bourget-du-lac",
    "montagnole", "montmelian", "mouxy", "sonnaz", "saint-alban-leysse",
    "saint-baldoph", "tresserve", "viviers-du-lac", "vimines", "voglans"
]

# URLs des locaux commerciaux
LOCAUX_COMMERCIAUX = [
    "aix-les-bains", "barberaz", "barby", "bassens", "challes-les-eaux",
    "chambery", "chignin", "cognin", "drumettaz-clarafond", "gresy-sur-aix",
    "jacob-bellecombette", "la-motte-servolex", "la-ravoire", "le-bourget-du-lac",
    "montagnole", "montmelian", "mouxy", "sonnaz", "saint-alban-leysse",
    "saint-baldoph", "tresserve", "viviers-du-lac", "vimines", "voglans"
]

# URLs des mairies (services publics)
MAIRIES = [
    "chambery", "aix-les-bains", "la-motte-servolex", "cognin", "montmelian",
    "bassens", "jacob-bellecombette", "saint-alban-leysse", "saint-baldoph",
    "viviers-du-lac", "bourget-du-lac", "drumettaz", "mery", "sonnaz",
    "aiguebelette-le-lac", "albens", "aillon-le-jeune", "aillon-le-vieux", "arith",
    "attignat-oncin", "avressieux", "barraux", "bellecombe-en-bauges",
    "belmont-tramonet", "la-bauche", "chignin", "corbel", "cruet", "curienne",
    "saint-cassin", "voglans"
]

def extract_blog_slugs() -> List[str]:
    """Extrait tous les slugs du fichier posts.js"""
    slugs = []
    try:
        with open("src/data/posts.js", "r", encoding="utf-8") as f:
            content = f.read()
            # Extraire tous les href: "/blog/..."
            import re
            matches = re.findall(r'href:\s*"/blog/([^"]+)"', content)
            slugs = matches
    except Exception as e:
        print(f"⚠️ Erreur lors de l'extraction des slugs: {e}")
    return slugs

def collect_all_urls() -> List[str]:
    """Collecte toutes les URLs du site"""
    urls = []
    
    # Pages principales
    urls.extend(MAIN_PAGES)
    
    # Pages estimation communes
    for commune in COMMUNES:
        urls.append(f"https://agencevoglans.fr/estimation/{commune}")
    
    # Pages fonds de commerce
    for ville in FONDS_COMMERCE:
        urls.append(f"https://agencevoglans.fr/fonds-commerce-{ville}")
    
    # Pages immeubles de rapport
    for ville in IMMEUBLES_RAPPORT:
        urls.append(f"https://agencevoglans.fr/immeuble-rapport-{ville}")
    
    # Pages locaux commerciaux
    for ville in LOCAUX_COMMERCIAUX:
        urls.append(f"https://agencevoglans.fr/locaux-commerciaux-{ville}")
    
    # Pages mairies
    for mairie in MAIRIES:
        urls.append(f"https://agencevoglans.fr/mairie-{mairie}")
    
    # Articles de blog (extraits automatiquement)
    blog_slugs = extract_blog_slugs()
    for slug in blog_slugs:
        urls.append(f"https://agencevoglans.fr/blog/{slug}")
    
    return urls

def submit_to_indexnow(urls: List[str]) -> None:
    """Soumet les URLs à IndexNow"""
    # IndexNow accepte jusqu'à 10 000 URLs par requête
    batch_size = 10000
    
    for i in range(0, len(urls), batch_size):
        batch = urls[i:i + batch_size]
        
        payload = {
            "host": DOMAIN,
            "key": KEY,
            "urlList": batch
        }
        
        print(f"📤 Soumission batch {i//batch_size + 1} ({len(batch)} URLs)...")
        
        for endpoint in INDEXNOW_ENDPOINTS:
            try:
                response = requests.post(
                    endpoint,
                    json=payload,
                    headers={"Content-Type": "application/json; charset=utf-8"},
                    timeout=30
                )
                
                if response.status_code == 200:
                    print(f"✅ {endpoint}: Succès (200)")
                elif response.status_code == 202:
                    print(f"⏳ {endpoint}: Accepté, validation en cours (202)")
                elif response.status_code == 429:
                    print(f"⚠️ {endpoint}: Trop de requêtes (429) - attendez avant de réessayer")
                else:
                    print(f"❌ {endpoint}: Erreur {response.status_code} - {response.text}")
                    
            except Exception as e:
                print(f"❌ {endpoint}: Exception - {str(e)}")
        
        print(f"✅ Batch {i//batch_size + 1} terminé\n")

def main():
    print("🚀 Collecte de toutes les URLs du site...")
    urls = collect_all_urls()
    
    print(f"📊 {len(urls)} URLs collectées")
    print(f"🔑 Clé IndexNow: {KEY}")
    print(f"🌐 Domaine: {DOMAIN}")
    print()
    
    # Sauvegarde des URLs dans un fichier
    with open("all-urls.txt", "w") as f:
        for url in urls:
            f.write(url + "\n")
    print(f"💾 URLs sauvegardées dans all-urls.txt")
    print()
    
    # Soumission à IndexNow
    print("📤 Soumission à IndexNow...")
    submit_to_indexnow(urls)
    
    print("\n✅ Terminé !")
    print(f"📈 {len(urls)} URLs soumises à IndexNow")
    print("⏱️ Indexation accélérée sur Bing, Yandex et autres moteurs")

if __name__ == "__main__":
    main()

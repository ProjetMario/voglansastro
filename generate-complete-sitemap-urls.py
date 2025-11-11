#!/usr/bin/env python3
"""
Script pour générer la liste complète des URLs du site
"""
import json
import os

def generate_complete_sitemap_urls():
    """Génère toutes les URLs qui devraient être dans le sitemap"""
    base_url = "https://agencevoglans.fr"
    urls = []

    # URLs principales (déjà dans customPages)
    main_pages = [
        f"{base_url}/",
        f"{base_url}/estimation",
        f"{base_url}/vendre",
        f"{base_url}/acheter",
        f"{base_url}/contact",
        f"{base_url}/blog",
    ]

    # Communes pour estimation
    communes_file = "src/data/communes.ts"
    communes = []

    # Lire le fichier communes.ts pour extraire les slugs
    try:
        with open(communes_file, 'r', encoding='utf-8') as f:
            content = f.read()
            # Extraire les slugs des communes (slug: "valeur")
            import re
            slug_pattern = r'slug:\s*["\']([^"\']+)["\']'
            matches = re.findall(slug_pattern, content)
            communes = [match for match in matches if match and match != 'slug']
            print(f"Communes trouvées: {len(communes)}")
    except Exception as e:
        print(f"Erreur lecture communes: {e}")
        # Liste de secours
        communes = []

    # URLs estimation par commune
    for commune in communes:
        urls.append(f"{base_url}/estimation/{commune}")

    # URLs blog depuis posts.js
    posts_file = "src/data/posts.js"
    try:
        with open(posts_file, 'r', encoding='utf-8') as f:
            content = f.read()
            lines = content.split('\n')
            blog_count = 0
            for line in lines:
                if 'href:' in line and '/blog/' in line:
                    # Chercher après href: 
                    href_part = line.split('href:')[1].strip()
                    if href_part.startswith('"'):
                        # Guillemets doubles
                        href_start = 1
                        href_end = href_part.find('"', 1)
                    elif href_part.startswith("'"):
                        # Guillemets simples
                        href_start = 1
                        href_end = href_part.find("'", 1)
                    if href_end > 0:
                        href = href_part[href_start:href_end]
                        if href.startswith('/blog/'):
                            urls.append(f"{base_url}{href}")
                            blog_count += 1
            print(f"Blog URLs extraites: {blog_count}")
    except Exception as e:
        print(f"Erreur lecture posts: {e}")

    # URLs spécialisées par ville (locaux-commerciaux, immeubles-rapport, etc.)
    categories = [
        'fonds-commerce',
        'immeuble-rapport',
        'locaux-commerciaux',
        'propriete-prestige',
        'vendre-appartement',
        'vendre-garage',
        'vendre-maison',
        'vendre-terrain'
    ]

    for category in categories:
        for commune in communes:
            urls.append(f"{base_url}/{category}-{commune}")

    # Pages principales supplémentaires
    additional_pages = [
        f"{base_url}/a-propos",
        f"{base_url}/services",
        f"{base_url}/zone-intervention",
        f"{base_url}/honoraires",
        f"{base_url}/contact",
        f"{base_url}/estimation",
        f"{base_url}/vendre",
        f"{base_url}/acheter",
        f"{base_url}/vente",
        f"{base_url}/services",
        f"{base_url}/guides/diagnostics-obligatoires",
        f"{base_url}/guides/estimation-bien",
        f"{base_url}/guides/fiscalite-vente",
        f"{base_url}/guides/preparer-maison",
        f"{base_url}/guides/vendre-2025",
        f"{base_url}/mentions-legales",
        f"{base_url}/confidentialite",
        f"{base_url}/politique-de-confidentialite",
        f"{base_url}/cgv",
        f"{base_url}/rgpd",
        f"{base_url}/sitemap"
    ]

    urls.extend(additional_pages)

    # Supprimer les doublons et trier
    urls = list(set(urls))
    urls.sort()

    return urls

if __name__ == "__main__":
    urls = generate_complete_sitemap_urls()
    print(f"Total URLs générées: {len(urls)}")

    # Sauvegarder dans un fichier
    with open('complete-sitemap-urls.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(urls))

    print("URLs sauvegardées dans complete-sitemap-urls.txt")

    # Afficher un échantillon
    print("\nÉchantillon des URLs:")
    for url in urls[:10]:
        print(f"  {url}")
    print("  ...")

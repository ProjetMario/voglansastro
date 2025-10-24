#!/usr/bin/env python3
"""
Script pour corriger tous les problèmes de Fragment dans les fichiers Astro.
Le Fragment n'est plus nécessaire - on met directement les meta dans le head slot.
"""

import os
import re
from pathlib import Path

def fix_fragment_in_file(filepath):
    """Corrige l'utilisation de Fragment dans un fichier Astro."""
    print(f"  → {filepath.name}")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # 1. Supprimer l'import de Fragment
    content = re.sub(r"import\s*\{\s*Fragment\s*\}\s*from\s*['\"]astro['\"]\s*;\s*\n?", "", content)
    
    # 2. Remplacer <Fragment slot="head">...</Fragment> par juste le contenu
    # Pattern: <Fragment slot="head">\n    <meta ... />\n  </Fragment>
    # On garde juste le slot="head" sur la meta directement
    
    # Chercher le pattern Fragment slot="head"
    fragment_pattern = r'<Fragment\s+slot="head">\s*\n\s*(<meta[^>]+/>)\s*\n\s*</Fragment>'
    match = re.search(fragment_pattern, content)
    
    if match:
        # Extraire la balise meta
        meta_tag = match.group(1)
        # Remplacer par meta avec slot="head" directement
        replacement = f'  <meta slot="head" {meta_tag[5:]}'  # Enlever '<meta' du début et ajouter slot
        content = re.sub(fragment_pattern, replacement, content)
    
    # Sauvegarder seulement si modifié
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    print("🔧 Correction automatique de tous les fichiers avec Fragment...\n")
    
    blog_dir = Path("src/pages/blog")
    
    if not blog_dir.exists():
        print("❌ Dossier src/pages/blog non trouvé!")
        return
    
    # Trouver tous les fichiers .astro
    astro_files = list(blog_dir.glob("*.astro"))
    
    fixed_count = 0
    for filepath in astro_files:
        if fix_fragment_in_file(filepath):
            fixed_count += 1
    
    print(f"\n✅ {fixed_count} fichiers corrigés!")
    print("\n🧪 Lancez 'npm run build' pour vérifier.")

if __name__ == "__main__":
    main()

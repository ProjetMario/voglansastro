# Articles de Mairies à Ajouter Un Par Un

## Stratégie de Test
1. Ajouter 1 article à la fois
2. Mettre à jour index.astro avec l'article
3. Tester le build local: `npm run build`
4. Si ça passe : commit + push
5. Si ça casse : identifier le problème dans cet article spécifique

## Liste des Articles (30 total)

### Batch 1 - Grandes Villes (6 articles)
- [ ] mairie-chambery-guide-complet.astro
- [ ] mairie-aix-les-bains-guide-complet.astro  
- [ ] mairie-la-motte-servolex-guide-complet.astro
- [ ] mairie-cognin-guide-complet.astro
- [ ] mairie-montmelian-guide-complet.astro
- [ ] mairie-bassens-guide-complet.astro

### Batch 2 - Communes Moyennes (8 articles)
- [ ] mairie-jacob-bellecombette-guide-complet.astro
- [ ] mairie-saint-alban-leysse-guide-complet.astro
- [ ] mairie-saint-baldoph-guide-complet.astro
- [ ] mairie-viviers-du-lac-guide-complet.astro
- [ ] mairie-le-bourget-du-lac-guide-complet.astro (anciennement problématique selon commit)
- [ ] mairie-drumettaz-guide-complet.astro
- [ ] mairie-mery-guide-complet.astro
- [ ] mairie-sonnaz-guide-complet.astro

### Batch 3 - Petites Communes (16 articles)
- [ ] mairie-aiguebelette-le-lac-guide-complet.astro
- [ ] mairie-albens-guide-complet.astro
- [ ] mairie-aillon-le-jeune-guide-complet.astro
- [ ] mairie-aillon-le-vieux-guide-complet.astro
- [ ] mairie-arith-guide-complet.astro
- [ ] mairie-attignat-oncin-guide-complet.astro
- [ ] mairie-avressieux-guide-complet.astro
- [ ] mairie-barraux-guide-complet.astro
- [ ] mairie-bellecombe-en-bauges-guide-complet.astro
- [ ] mairie-belmont-tramonet-guide-complet.astro
- [ ] mairie-chignin-guide-complet.astro
- [ ] mairie-corbel-guide-complet.astro
- [ ] mairie-cruet-guide-complet.astro
- [ ] mairie-curienne-guide-complet.astro
- [ ] mairie-la-bauche-guide-complet.astro
- [ ] mairie-voglans-guide-complet.astro

## Notes
- Commit e508f14 = base stable avec 7 articles
- Problème connu: compilateur Astro crash avec "Go program has already exited"
- Cause: probablement un article avec HTML mal formé ou trop complexe

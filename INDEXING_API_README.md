# Google Indexing API - Guide d'utilisation

## Vue d'ensemble

Ce système permet de notifier Google des nouvelles pages ou mises à jour via l'Indexing API.

**⚠️ Quota quotidien : 200 requêtes/jour** - Ne pas dépasser !

## Fichiers

| Fichier | Description |
|---------|-------------|
| `indexing_push_daily.py` | Script principal - exécuter 1x/jour max |
| `enqueue_url.py` | Ajouter des URLs à la file prioritaire |
| `urls.txt` | Liste maître de toutes les URLs du site |
| `urls_to_push.txt` | File prioritaire (nouvelles pages/mises à jour) |
| `indexing_state.json` | État de progression (ne pas modifier) |

## Usage quotidien

### 1. Ajouter une nouvelle page à indexer

```bash
# Une seule URL
python enqueue_url.py https://agencevoglans.fr/estimation/nouvelle-commune

# Plusieurs URLs
python enqueue_url.py /blog/nouvel-article /estimation/autre-commune

# Depuis un fichier
cat nouvelles_urls.txt | python enqueue_url.py --stdin
```

### 2. Lancer le push quotidien

```bash
# Avec les credentials Google
export GOOGLE_APPLICATION_CREDENTIALS=/chemin/vers/service-account.json
python indexing_push_daily.py
```

Le script :
1. Traite d'abord la file prioritaire (`urls_to_push.txt`)
2. Complète avec des URLs de la liste maître (`urls.txt`)
3. Respecte le quota de 40 URLs/jour par défaut

### 3. Modifier le batch size (optionnel)

```bash
# Augmenter temporairement (max 200)
INDEXING_BATCH_SIZE=80 python indexing_push_daily.py
```

## Automatisation (cron)

```bash
# Exécuter tous les jours à 6h
0 6 * * * cd /chemin/vers/voglansastro && GOOGLE_APPLICATION_CREDENTIALS=/chemin/creds.json python indexing_push_daily.py >> /var/log/indexing.log 2>&1
```

## Bonnes pratiques

1. **Ne jamais dépasser 200 req/jour** - Le script bloque automatiquement
2. **Utiliser la file prioritaire** pour les nouvelles pages importantes
3. **Vérifier dans GSC** après 24-48h si les pages sont indexées
4. **Ne pas spammer** - Google peut révoquer l'accès API

## Dépannage

### Erreur "quota exceeded"
Attendre 24h, le quota se réinitialise à minuit PT.

### Erreur "GOOGLE_APPLICATION_CREDENTIALS non défini"
```bash
export GOOGLE_APPLICATION_CREDENTIALS=/chemin/vers/votre-service-account.json
```

### Vérifier l'état actuel
```bash
cat indexing_state.json  # Voir le prochain index
wc -l urls_to_push.txt   # Voir la taille de la queue
```

## Configuration du Service Account

1. Créer un projet dans Google Cloud Console
2. Activer l'Indexing API
3. Créer un Service Account avec les droits
4. Télécharger le fichier JSON des credentials
5. Ajouter l'email du Service Account comme propriétaire dans GSC

# 🔗 Configuration HubSpot - Intégration API

## Étapes pour configurer l'intégration HubSpot

### 1. Obtenir vos clés API HubSpot

1. **Connectez-vous à HubSpot** avec votre compte administrateur
2. **Allez dans Paramètres** (engrenage) → **Intégrations** → **API**
3. **Créez une nouvelle clé API** avec les permissions suivantes :
   - `contacts` (créer et modifier des contacts)
   - `deals` (optionnel, pour créer des transactions)
   - `companies` (optionnel, pour les entreprises)

### 2. Configurer les variables d'environnement

Dans votre fichier `.env.local`, remplacez :

```bash
# HubSpot Configuration
HUBSPOT_API_KEY=votre_clé_api_hubspot_ici
HUBSPOT_PORTAL_ID=votre_portal_id_hubspot_ici
```

Par vos vraies valeurs :
- **HUBSPOT_API_KEY** : La clé API que vous avez générée
- **HUBSPOT_PORTAL_ID** : Votre ID de portail HubSpot (visible dans l'URL de votre compte)

### 3. Tester l'intégration

1. **Lancez votre serveur de développement** :
```bash
npm run dev
```

2. **Remplissez le formulaire d'estimation** sur votre site

3. **Vérifiez dans HubSpot** :
   - Un nouveau contact devrait apparaître dans votre CRM
   - Les propriétés personnalisées seront remplies avec les données du formulaire

## Propriétés HubSpot créées automatiquement

Le système crée automatiquement ces propriétés pour chaque demande d'estimation :

| Propriété | Description | Exemple |
|-----------|-------------|---------|
| `firstname` | Prénom du contact | Jean |
| `lastname` | Nom du contact | Dupont |
| `email` | Email | jean.dupont@email.fr |
| `phone` | Téléphone | 06 12 34 56 78 |
| `ville_interet` | Ville du bien | Chambéry |
| `type_de_bien` | Type de propriété | Maison |
| `surface` | Surface en m² | 120 |
| `valeur_estimee` | Estimation fournie | 350000 |
| `fourchette_basse` | Fourchette basse | 320000 |
| `fourchette_haute` | Fourchette haute | 380000 |
| `tendance_marche` | Tendance du marché | increasing |
| `type_estimation` | Type d'estimation | traditional |
| `date_demande` | Date de la demande | 2024-01-15T10:30:00Z |
| `statut` | Statut du lead | Nouveau |
| `source_lead` | Source du contact | Formulaire estimation site web |
| `notes` | Commentaires additionnels | Vue sur lac, jardin... |

## Fallback et sécurité

- **Si HubSpot n'est pas configuré** : Les données sont sauvegardées localement dans `src/data/estimation-requests.json`
- **Si HubSpot échoue** : Les données sont quand même sauvegardées localement comme backup
- **Logs détaillés** : Toutes les actions sont loggées dans la console du serveur

## Monitoring

Vérifiez les logs de votre serveur pour voir :
- ✅ `Contact créé dans HubSpot: [ID]`
- ⚠️ `Clés HubSpot manquantes - sauvegarde locale uniquement`
- ❌ `Erreur lors de l'envoi à HubSpot: [détails]`

## Support

En cas de problème :
1. Vérifiez que vos clés API sont correctes
2. Vérifiez les permissions de votre clé API dans HubSpot
3. Vérifiez les logs du serveur
4. Testez l'API directement : `POST /api/estimation-requests`

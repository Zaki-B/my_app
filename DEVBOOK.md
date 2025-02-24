# DEVBOOK - Projet BeKind

## Statut Global du Projet : 🟡 En cours

### Légende des statuts :
- ⚪ Non commencé
- 🟡 En cours
- 🟢 Terminé
- 🔴 Bloqué
- 🟣 En révision
- 🟤 En test

## 1. Phase de Préparation et Configuration 🟡

### A. Mise en place de l'environnement de développement
- [x] Configuration de React Native
- [x] Configuration de TypeScript
- [x] Installation des dépendances principales (React Navigation, Maps)
- [ ] Configuration de SQLite
- [ ] Mise en place de Jest pour les tests

### B. Architecture initiale 🟡
- [x] Structure des dossiers
  - [x] `/src`
  - [x] `/src/components`
  - [x] `/src/screens`
  - [x] `/src/services`
  - [x] `/src/utils`
  - [x] `/src/assets`
  - [x] `/src/navigation`
  - [x] `/src/types`
- [x] Configuration des types TypeScript
- [ ] Mise en place de l'intégration continue (CI/CD)

### C. Composants de base 🟡
- [x] Structure de navigation
  - [x] Bottom Tab Navigator
  - [x] Stack Navigator
- [x] Écrans principaux
  - [x] HomeScreen
  - [x] ProfileScreen
  - [x] CreateNeedScreen
- [x] Composants réutilisables
  - [x] InteractiveMap (structure)
  - [x] InteractiveMap (implémentation)

## 2. Phase 1 : Authentification et Profil Utilisateur ⚪

### Tests à développer
- [ ] Tests de création de compte local
- [ ] Tests de connexion locale
- [ ] Tests de validation des données utilisateur
- [ ] Tests des rôles (Aidant/Bénéficiaire)

### Développement
- [ ] Système d'authentification locale avec SQLite
- [x] Interface de profil utilisateur (structure)
- [ ] Gestion des profils utilisateurs
- [ ] Interface d'inscription/connexion

## 3. Phase 2 : Carte Interactive 🟡

### Tests à développer
- [ ] Tests d'initialisation de la carte
- [ ] Tests de géolocalisation
- [ ] Tests du clustering des marqueurs
- [ ] Tests des filtres
- [ ] Tests de la mise à jour en temps réel

### Développement
- [x] Structure du composant de carte
- [x] Intégration de la carte
- [ ] Système de géolocalisation
- [x] Gestion des marqueurs
- [ ] Système de clustering
- [ ] Filtres par catégorie et distance

## 4. Phase 3 : Système d'Alertes ⚪

### Tests à développer
- [ ] Tests de création d'alerte
- [ ] Tests de géolocalisation d'alerte
- [ ] Tests de mise à jour du statut
- [ ] Tests d'upload de photos (stockage local)
- [ ] Tests de persistence des données

### Développement
- [ ] Création d'alertes
- [ ] Gestion des photos (stockage local)
- [ ] Système de statuts
- [ ] Stockage SQLite

## 5. Phase 4 : Système de Notifications 🔴
Note : Cette phase sera reportée car elle nécessite une infrastructure serveur.

## 6. Phase 5 : Système de Récompenses ⚪

### Tests à développer
- [ ] Tests d'attribution des badges
- [ ] Tests de calcul des statistiques
- [ ] Tests d'affichage du tableau de bord

### Développement
- [ ] Système de badges
- [ ] Tableau de bord utilisateur
- [ ] Statistiques d'utilisation

## 7. Phase de Tests d'Intégration ⚪

### Tests à développer
- [ ] Tests de flux complet (inscription → alerte → résolution)
- [ ] Tests de performance
- [ ] Tests de charge
- [ ] Tests de synchronisation en temps réel

## 8. Phase de Déploiement ⚪

- [ ] Tests de déploiement sur iOS/Android
- [ ] Tests de production
- [ ] Déploiement sur les stores

## Notes de Développement

### Stack Technique
- Frontend : React Native avec TypeScript
- Base de données locale : SQLite (@react-native-sqlite-storage)
- Cartographie : react-native-maps
- Tests : Jest, React Native Testing Library
- Stockage local : AsyncStorage pour les préférences, SQLite pour les données

### Architecture de la Base de Données SQLite
Tables principales :
1. users
   - id (PRIMARY KEY)
   - email
   - password_hash
   - role
   - display_name
   - created_at
   - last_active

2. needs
   - id (PRIMARY KEY)
   - type
   - description
   - latitude
   - longitude
   - status
   - created_at
   - created_by (FOREIGN KEY -> users.id)

### Prochaines étapes
1. Installation des dépendances :
   ```bash
   npm install @react-native-sqlite-storage @react-native-async-storage/async-storage
   ```

2. Création des services :
   - DatabaseService : Gestion de SQLite
   - AuthService : Gestion de l'authentification locale
   - NeedService : Gestion des besoins
   - StorageService : Gestion du stockage local (images, etc.)

3. Implémentation des fonctionnalités de base :
   - Création de compte local
   - Authentification locale
   - CRUD des besoins
   - Stockage local des images

## Journal des Modifications

| Date | Description | Statut |
|------|-------------|--------|
| - | Création du DEVBOOK | 🟢 |
| $(date) | Structure initiale du projet | 🟡 |
| $(date) | Configuration de la navigation | 🟢 |
| $(date) | Création des écrans de base | 🟢 |
| $(date) | Installation des dépendances principales | 🟢 |
| $(date) | Implémentation de la carte interactive et création de besoins | 🟢 |
| $(date) | Changement de Firebase vers SQLite pour simplicité | 🟢 | 
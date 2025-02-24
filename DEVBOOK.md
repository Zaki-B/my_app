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
- Frontend : Expo (React Native) avec TypeScript
- Base de données locale : SQLite (expo-sqlite)
- Cartographie : react-native-maps
- Tests : Jest
- Stockage local : AsyncStorage (@react-native-async-storage/async-storage)

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
1. Configuration initiale :
   ```bash
   # Installation d'Expo
   npm install -g expo-cli
   
   # Création du projet
   npx create-expo-app -t expo-template-typescript
   
   # Installation des dépendances
   npx expo install expo-sqlite @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs react-native-maps expo-location @react-native-async-storage/async-storage react-native-screens react-native-safe-area-context
   ```

2. Création des services :
   - DatabaseService : Gestion de SQLite (expo-sqlite)
   - AuthService : Gestion de l'authentification locale
   - NeedService : Gestion des besoins
   - LocationService : Gestion de la géolocalisation (expo-location)

3. Migration du code existant :
   - Adapter les composants pour Expo
   - Mettre à jour les imports
   - Configurer la navigation
   - Adapter la carte pour utiliser expo-location

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
| $(date) | Migration vers Expo pour faciliter le développement | 🟡 | 
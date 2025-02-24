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
- [x] Configuration d'Expo

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
- [x] Configuration du point d'entrée App.tsx

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

## Tests Automatisés

### Configuration des Tests

Le projet utilise Jest et React Native Testing Library pour les tests automatisés. La configuration est la suivante :

```javascript
// jest.config.js
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation)/)',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
};
```

### Commandes de Test

Pour exécuter les tests, vous pouvez utiliser les commandes suivantes :

```bash
# Lancer tous les tests
npm test

# Lancer les tests en mode watch (relance automatique lors des modifications)
npm run test:watch

# Lancer les tests avec rapport de couverture
npm run test:coverage
```

### Tests de Vérification d'Environnement

Le projet inclut des tests automatiques pour vérifier que l'environnement de développement est correctement configuré :

1. **Tests Node.js** (`__tests__/node-version.test.ts`)
   - Vérifie que la version de Node.js est compatible (≥ 18)
   - Affiche la version actuelle de Node.js

2. **Tests des Dépendances** (`__tests__/environment.test.ts`)
   - Vérifie la présence et les versions des dépendances principales
   - Vérifie les dépendances React et React Native
   - Vérifie les dépendances de test
   - Affiche les versions des packages principaux

3. **Tests de Configuration** (`__tests__/App.test.tsx`)
   - Vérifie la configuration de base de React
   - Vérifie les dépendances de navigation
   - Vérifie les dépendances Firebase

### Bonnes Pratiques

1. **Exécution Régulière** :
   - Lancez les tests après chaque changement d'environnement
   - Exécutez les tests avant chaque commit important
   - Vérifiez les tests lors du passage d'un ordinateur à l'autre

2. **Maintenance** :
   - Mettez à jour les versions attendues dans les tests lorsque vous mettez à jour les dépendances
   - Ajoutez de nouveaux tests lors de l'ajout de nouvelles dépendances
   - Gardez les tests à jour avec les changements de configuration

3. **Dépannage** :
   Si les tests échouent :
   - Vérifiez que toutes les dépendances sont installées (`npm install`)
   - Vérifiez que les versions de Node.js et npm sont correctes
   - Consultez les logs de test pour des informations détaillées

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
| $(date) | Structure initiale du projet | 🟢 |
| $(date) | Configuration de la navigation | 🟢 |
| $(date) | Création des écrans de base | 🟢 |
| $(date) | Installation des dépendances principales | 🟢 |
| $(date) | Implémentation de la carte interactive et création de besoins | 🟢 |
| $(date) | Changement de Firebase vers SQLite pour simplicité | 🟢 |
| $(date) | Migration vers Expo pour faciliter le développement | 🟢 |
| 24/02/2024 | Configuration d'Expo et restructuration du point d'entrée | 🟢 |

## Prochaines étapes prioritaires

1. **Configuration de SQLite**
   ```bash
   npx expo install expo-sqlite
   ```

2. **Mise en place des tests**
   - Configurer Jest avec Expo
   - Créer les premiers tests unitaires

3. **Développement des fonctionnalités principales**
   - Implémenter l'authentification locale
   - Finaliser la carte interactive
   - Développer le système de besoins

## Notes techniques importantes

### Configuration Expo actuelle
```json
{
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  }
}
```

### Structure du point d'entrée
```typescript
// App.tsx (racine)
import App from './src/App';
export default App;

// src/App.tsx
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
``` 
import { Platform } from 'react-native';
import * as packageJson from '../package.json';

describe('Environnement de développement', () => {
  describe('Node.js et dépendances', () => {
    it('devrait avoir Node.js installé', () => {
      expect(process.version).toBeDefined();
      console.log(`Version de Node.js : ${process.version}`);
    });

    it('devrait avoir les bonnes versions des dépendances', () => {
      const packageJson = require('../package.json');
      
      expect(packageJson.dependencies['react']).toBeDefined();
      expect(packageJson.dependencies['react-native']).toBeDefined();
      expect(packageJson.dependencies['typescript']).toBeDefined();
      
      console.log('Versions des dépendances principales :');
      console.log(`React: ${packageJson.dependencies['react']}`);
      console.log(`React Native: ${packageJson.dependencies['react-native']}`);
      console.log(`TypeScript: ${packageJson.dependencies['typescript']}`);
    });
  });

  describe('Environnement de test', () => {
    it('devrait avoir Jest installé', () => {
      expect(jest).toBeDefined();
    });

    it('devrait avoir les dépendances de test', () => {
      const packageJson = require('../package.json');
      
      expect(packageJson.devDependencies['jest']).toBeDefined();
      expect(packageJson.devDependencies['@testing-library/react-native']).toBeDefined();
      
      console.log('Versions des dépendances de test :');
      console.log(`Jest: ${packageJson.devDependencies['jest']}`);
      console.log(`Testing Library: ${packageJson.devDependencies['@testing-library/react-native']}`);
    });
  });
}); 
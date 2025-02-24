import React from 'react';

describe('Configuration de base', () => {
  it('devrait avoir React installé', () => {
    expect(React).toBeDefined();
  });

  it('devrait avoir les bonnes versions de React', () => {
    const packageJson = require('../package.json');
    expect(packageJson.dependencies.react).toBeDefined();
    expect(packageJson.dependencies['react-native']).toBeDefined();
  });

  it('devrait avoir les dépendances de navigation', () => {
    const packageJson = require('../package.json');
    expect(packageJson.dependencies['@react-navigation/native']).toBeDefined();
    expect(packageJson.dependencies['@react-navigation/bottom-tabs']).toBeDefined();
    expect(packageJson.dependencies['@react-navigation/native-stack']).toBeDefined();
  });

  it('devrait avoir les dépendances Firebase', () => {
    const packageJson = require('../package.json');
    expect(packageJson.dependencies['@react-native-firebase/app']).toBeDefined();
    expect(packageJson.dependencies['@react-native-firebase/auth']).toBeDefined();
    expect(packageJson.dependencies['@react-native-firebase/firestore']).toBeDefined();
  });
}); 
import { registerRootComponent } from 'expo';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import Navigation from './src/navigation';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#2196F3" />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default registerRootComponent(App); 
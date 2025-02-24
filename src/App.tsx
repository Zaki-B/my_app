import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, ActivityIndicator } from 'react-native';
import Navigation from './navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        fallback={
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#2196F3" />
            <Text>Chargement...</Text>
          </View>
        }
        onError={(error) => {
          console.error('Navigation error:', error);
        }}
      >
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App; 
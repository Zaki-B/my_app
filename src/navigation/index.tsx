import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreateNeedScreen from '../screens/CreateNeedScreen';

// Types pour la navigation
export type RootStackParamList = {
  Main: undefined;
  NeedDetails: { needId: string };
  CreateNeed: { coordinates?: { latitude: number; longitude: number } };
};

export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: '#666',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Carte',
          // Ici nous ajouterons les icônes plus tard
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profil',
          // Ici nous ajouterons les icônes plus tard
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateNeed"
          component={CreateNeedScreen}
          options={{
            title: 'Nouveau signalement',
            headerTintColor: '#2196F3',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation; 
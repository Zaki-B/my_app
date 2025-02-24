import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import InteractiveMap from '../components/Map/InteractiveMap';
import { Need } from '../types';
import { RootStackParamList } from '../navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  // Données de test
  const mockNeeds: Need[] = [
    {
      id: '1',
      type: 'urgence',
      description: 'Besoin urgent de couvertures',
      location: {
        latitude: 48.8566,
        longitude: 2.3522
      },
      createdAt: new Date(),
      status: 'en_attente',
      createdBy: 'user1'
    },
    {
      id: '2',
      type: 'collecte',
      description: 'Collecte de nourriture',
      location: {
        latitude: 48.8606,
        longitude: 2.3376
      },
      createdAt: new Date(),
      status: 'en_cours',
      createdBy: 'user2'
    }
  ];

  const handleNeedPress = (need: Need) => {
    console.log('Need pressed:', need);
  };

  const handleMapLongPress = (coordinates: { latitude: number; longitude: number }) => {
    navigation.navigate('CreateNeed', { coordinates });
  };

  return (
    <View style={styles.container}>
      <InteractiveMap
        needs={mockNeeds}
        onNeedPress={handleNeedPress}
        onMapLongPress={handleMapLongPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen; 
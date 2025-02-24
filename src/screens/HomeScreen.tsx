import React from 'react';
import { StyleSheet, View } from 'react-native';
import InteractiveMap from '../components/Map/InteractiveMap';
import { Need } from '../types';

const HomeScreen = () => {
  const mockNeeds: Need[] = []; // À remplacer par les vrais besoins depuis Firebase

  const handleNeedPress = (need: Need) => {
    // À implémenter : afficher les détails du besoin
    console.log('Need pressed:', need);
  };

  const handleMapLongPress = (coordinates: { latitude: number; longitude: number }) => {
    // À implémenter : ouvrir le formulaire de création de besoin
    console.log('Map long pressed at:', coordinates);
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
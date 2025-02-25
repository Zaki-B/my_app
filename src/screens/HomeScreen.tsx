import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import InteractiveMap from '../components/Map/InteractiveMap';
import { Need } from '../types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [needs] = useState<Need[]>([]); // Pour le moment, tableau vide

  const handleNeedPress = (need: Need) => {
    // TODO: Afficher les détails du besoin
    console.log('Need pressed:', need);
  };

  const handleMapLongPress = (coordinates: { latitude: number; longitude: number }) => {
    navigation.navigate('CreateNeed', { coordinates });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BeKind</Text>
        <Text style={styles.subtitle}>Aidons-nous les uns les autres</Text>
      </View>
      <View style={styles.mapContainer}>
        <InteractiveMap
          needs={needs}
          onNeedPress={handleNeedPress}
          onMapLongPress={handleMapLongPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  mapContainer: {
    flex: 1,
  },
});

export default HomeScreen; 
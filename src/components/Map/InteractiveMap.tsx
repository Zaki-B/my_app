import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Platform, Text, Pressable, TouchableOpacity } from 'react-native';
import { Need } from '../../types';
import { Map as PigeonMap, Marker as PigeonMarker } from 'pigeon-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

interface InteractiveMapProps {
  needs: Need[];
  onNeedPress?: (need: Need) => void;
  onMapLongPress?: (coordinates: { latitude: number; longitude: number }) => void;
}

const INITIAL_CENTER: [number, number] = [48.8566, 2.3522];
const INITIAL_ZOOM = 11;

const InteractiveMap: React.FC<InteractiveMapProps> = ({
  needs,
  onNeedPress,
  onMapLongPress,
}) => {
  const [selectedNeed, setSelectedNeed] = useState<Need | null>(null);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        setUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      }
    } catch (err) {
      console.warn('Erreur lors de la récupération de la position:', err);
    }
  };

  const handleLocatePress = () => {
    requestLocationPermission();
  };

  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <PigeonMap
          height={600}
          defaultCenter={INITIAL_CENTER}
          defaultZoom={INITIAL_ZOOM}
          onClick={({ latLng }: { latLng: [number, number] }) => {
            onMapLongPress?.({
              latitude: latLng[0],
              longitude: latLng[1],
            });
          }}
        >
          {needs.map((need) => (
            <PigeonMarker
              key={need.id}
              width={50}
              anchor={[need.location.latitude, need.location.longitude]}
              onClick={() => onNeedPress?.(need)}
            />
          ))}
        </PigeonMap>
      </View>
    );
  }

  // Import dynamique de react-native-maps uniquement pour mobile
  const { default: NativeMap, Marker: NativeMarker, Callout } = require('react-native-maps');

  const handleMarkerPress = (need: Need) => {
    setSelectedNeed(need);
    onNeedPress?.(need);
  };

  const handleMapPress = () => {
    setSelectedNeed(null);
  };

  return (
    <View style={styles.container}>
      <NativeMap
        style={styles.map}
        initialRegion={{
          latitude: INITIAL_CENTER[0],
          longitude: INITIAL_CENTER[1],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={userLocation ? {
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        } : undefined}
        onLongPress={(e: any) => onMapLongPress?.(e.nativeEvent.coordinate)}
        onPress={handleMapPress}
        showsUserLocation
        showsMyLocationButton
        showsCompass
        showsScale
        showsTraffic
        loadingEnabled
        toolbarEnabled
        zoomEnabled
        rotateEnabled
        mapType="hybrid"
        showsBuildings
        showsIndoors
        showsPointsOfInterest
        userInterfaceStyle="light"
        clusterColor="#2196F3"
        clusterTextColor="#ffffff"
        minZoomLevel={5}
        maxZoomLevel={20}
      >
        {needs.map((need) => (
          <NativeMarker
            key={need.id}
            coordinate={need.location}
            onPress={() => handleMarkerPress(need)}
            tracksViewChanges={false}
            calloutAnchor={{ x: 0.5, y: 0 }}
            pinColor={selectedNeed?.id === need.id ? '#2196F3' : '#FF5252'}
          >
            <Callout tooltip>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutTitle}>{need.title}</Text>
                <Text style={styles.calloutDescription}>{need.description}</Text>
                <Pressable 
                  style={styles.calloutButton}
                  onPress={() => onNeedPress?.(need)}
                >
                  <Text style={styles.calloutButtonText}>Voir plus</Text>
                </Pressable>
              </View>
            </Callout>
          </NativeMarker>
        ))}
      </NativeMap>
      <TouchableOpacity 
        style={styles.locateButton}
        onPress={handleLocatePress}
      >
        <Ionicons name="locate" size={24} color="#2196F3" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  map: {
    flex: 1,
  },
  calloutContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    maxWidth: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  calloutDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  calloutButton: {
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  calloutButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  locateButton: {
    position: 'absolute',
    right: 16,
    bottom: 32,
    backgroundColor: 'white',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default InteractiveMap; 
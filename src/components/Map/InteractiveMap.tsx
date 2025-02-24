import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { Need } from '../../types';

interface InteractiveMapProps {
  needs: Need[];
  onNeedPress?: (need: Need) => void;
  onMapLongPress?: (coordinates: { latitude: number; longitude: number }) => void;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({
  needs,
  onNeedPress,
  onMapLongPress,
}) => {
  const [region, setRegion] = useState<Region>({
    latitude: 48.8566, // Paris par défaut
    longitude: 2.3522,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handleMapLongPress = (event: any) => {
    const { coordinate } = event.nativeEvent;
    onMapLongPress?.(coordinate);
  };

  const getMarkerColor = (type: Need['type']) => {
    switch (type) {
      case 'urgence':
        return 'red';
      case 'collecte':
        return 'green';
      case 'hébergement':
        return 'blue';
      default:
        return 'gray';
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
        onLongPress={handleMapLongPress}
        showsUserLocation
        showsMyLocationButton
      >
        {needs.map((need) => (
          <Marker
            key={need.id}
            coordinate={need.location}
            pinColor={getMarkerColor(need.type)}
            onPress={() => onNeedPress?.(need)}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default InteractiveMap; 
import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Need } from '../../types';
import { Map as PigeonMap, Marker as PigeonMarker } from 'pigeon-maps';

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
  const NativeMap = require('react-native-maps').default;
  const NativeMarker = require('react-native-maps').Marker;

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
        onLongPress={(e: any) => onMapLongPress?.(e.nativeEvent.coordinate)}
        showsUserLocation
        showsMyLocationButton
      >
        {needs.map((need) => (
          <NativeMarker
            key={need.id}
            coordinate={need.location}
            onPress={() => onNeedPress?.(need)}
          />
        ))}
      </NativeMap>
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
});

export default InteractiveMap; 
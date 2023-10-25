import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

export default class Tab3 extends Component {
  render() {
    return (
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 20.65701,
            longitude: -103.325,
            latitudeDelta: 0.01,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
          followsUserLocation={true}>
          <Marker
            title="CUCEI"
            description="Universidad"
            coordinate={{
              latitude: 20.656206980737775,
              longitude: -103.3252508278986,
            }}
          />
        </MapView>

        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 20.6270968,
            longitude: -103.4528802,
            latitudeDelta: 0.01,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
          followsUserLocation={true}>
          <Marker
            title="CASA"
            description="Humilde morada"
            coordinate={{
              latitude: 20.623959607076984,
              longitude: -103.45631563059774,
            }}
          />

          <MapViewDirections
            origin={{
              latitude: 20.656206980737775,
              longitude: -103.3252508278986,
            }}
            destination={{
              latitude: 20.623959607076984,
              longitude: -103.45631563059774,
            }}
            apikey={AIzaSyDAPdOZDmQDAMa8guBg6Hmi8O5WZy161PA}
            strokeWidth={3}
            strokeColor="#C7B8E2"
            onReady={result => {
              console.log(`Distancia entre CUCEI y Casa: ${result.distance} km.`);
              console.log(`Duración aproximada de tiempo: ${result.duration} min.`);
            }}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    height: 460,
    width: 425,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

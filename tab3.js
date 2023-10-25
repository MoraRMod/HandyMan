import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

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

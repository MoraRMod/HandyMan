import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

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
          }}></MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    height: 360,
    width: 425,
    marginTop: 1300,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

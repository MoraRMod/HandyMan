import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class WindowInfo extends Component {
  render() {
    const selectedItem = this.props.route.params.selectedItem;

    return (
      <View>
        <Text>Nombre: {selectedItem.Nombre}</Text>
        <Text>Profesión: {selectedItem.Profesion}</Text>
        <Text>Teléfono: {selectedItem.Telefono}</Text>

        <Image
          source={{uri: selectedItem.Imagen}}
          style={{width: 200, height: 200}}
        />
      </View>
    );
  }
}

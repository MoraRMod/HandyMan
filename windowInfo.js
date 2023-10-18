import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class WindowInfo extends Component {
  render() {
    const selectedItem = this.props.route.params.selectedItem;

    return (
      <View style={styles.flex}>
        <Text style={styles.text}>{selectedItem.Nombre}</Text>
        <Text style={styles.text}>{selectedItem.Profesion}</Text>
        <Text style={styles.text}>{selectedItem.Telefono}</Text>

        <Image source={{uri: selectedItem.Imagen}} style={styles.img} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 300,
    minWidth: 100,
    minHeight: 100,
    alignSelf: 'center',
    marginBottom: 15,
    borderRadius: 500,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  flex: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignContent: 'center',
    justifyContent: 'center',
    rowGap: 13,
  },
});

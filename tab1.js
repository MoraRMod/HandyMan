import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';

export default class Tab1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      name: 'default',
    };
  }

  toggleOpen = () => {
    this.setState({open: !this.state.open});
  };

  drawerContent = () => {
    return (
      <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
        <Text>Close</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <MenuDrawer
          open={this.state.open}
          position={'left'}
          drawerContent={this.drawerContent()}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}>
          {/*<Text style={{color:"black", fontSize: 16}}> Bienvenido: <Text>{this.props.route.params.nombre}</Text> </Text>*/}

          <Text style={{color: 'black', fontSize: 16}}>
            {' '}
            Bienvenido: <Text>{'default'}</Text>{' '}
          </Text>
          <TouchableOpacity onPress={this.toggleOpen}>
            <Image style={styles.logoMenu} source={require('./Imagenes/menuHamb.png')}/>
          </TouchableOpacity>
        </MenuDrawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    zIndex: 0,
  },
  animatedBox: {
    flex: 1,
    backgroundColor: '#38C8EC',
    padding: 10,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F04812',
  },

  logoMenu: {
    width: 30,
    height: 30,
    left: 230,
  },
});

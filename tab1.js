import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';

export default class Tab1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      dataSource: [],
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

  componentDidMount() {
    var xhttp = new XMLHttpRequest();
    _this = this;

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText);

        var temp = JSON.parse(xhttp.responseText);

        _this.setState({dataSource: temp});
      }
    };
    xhttp.open('GET', 'https://dcc2.000webhostapp.com/2023B/datos.json', true);
    xhttp.send();
  }

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
            <Image
              style={styles.logoMenu}
              source={require('./src/img/menu.png')}
            />
          </TouchableOpacity>
        </MenuDrawer>

        <View style={{marginTop: 20}}>
          <Text style={{color: 'purple', fontSize: 30}}>
            List de Trabajadores
          </Text>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => (
              <View style={{height: 100}}>
                <Text style={{color: 'black'}}>{item.Nombre}</Text>
                <Text style={{color: 'black'}}>{item.Profesion}</Text>
                <Text style={{color: 'black'}}>{item.Telefono}</Text>
                <View>
                  <Image
                    source={{uri: item.Imagen}}
                    style={{width: 50, height: 150}}></Image>
                </View>
                // Ver el onPress para hacer lo de las celdas de perfil de cada
                un elemento de la lista
                <View
                  style={{
                    width: 300,
                    height: 10,
                    backgroundColor: 'gray',
                    marginTop: 4,
                  }}></View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    zIndex: 0,
  },
  animatedBox: {
    //flex: 1,
    backgroundColor: '#38C8EC',
    height: 700,
    width: 150,
    //padding: 10,
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

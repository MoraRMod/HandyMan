import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const clickEmail = () => {
      console.log('Picaste el boton de Email');
      this.props.navigation.navigate('Inscription');
    };
    const clickFacebook = () => {
      console.log('Picaste el boton de Facebook');
      this.props.navigation.navigate('Inscription');
    };

    const irIns = () => {
      this.props.navigation.navigate('Inscription');
    };

    return (
      <View style={styles.fondo}>
        <Text
          style={{
            position: 'absolute',
            fontSize: 40,
            color: 'white',
            marginTop: 60,
          }}>
          Bienvenido
        </Text>

        <Text
          style={{
            position: 'absolute',
            fontSize: 30,
            color: 'white',
            marginTop: 120,
          }}>
          a
        </Text>

        <Image style={styles.img} source={require('./src/img/handyman.png')} />

        <View style={styles.login}>
          <Text
            style={{
              marginTop: 10,
              marginLeft: 5,
              fontSize: 25,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Ingresar
          </Text>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              marginTop: 20,
              marginLeft: 45,
              position: 'relative',
            }}>
            <TouchableOpacity style={styles.clickEmail} onPress={clickEmail}>
              <View style={styles.btnEmail}>
                <Image
                  style={styles.imgEmail}
                  source={require('./src/img/gmail.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.clickFacebook}
              onPress={clickFacebook}>
              <View style={styles.btnFacebook}>
                <Image
                  style={styles.imgFacebok}
                  source={require('./src/img/f.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={irIns}>
          <View style={styles.viewNotAccount}>
            <Text style={styles.txtAlert}>¿No tienes cuenta?</Text>
            <Text style={styles.txtSignUp}>Registrarse</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  clickFacebook: {
    width: 300,
    height: 55,
    marginTop: 15,
  },
  clickEmail: {
    width: 300,
    height: 55,
    marginTop: 15,
  },
  imgEmail: {
    width: 40,
    height: 40,
    marginLeft: 7,
  },
  imgFacebok: {
    width: 50,
    height: 50,
    margin: 3,
  },
  txtSignUp: {
    marginLeft: 4,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  txtAlert: {
    fontSize: 18,
    color: 'white',
  },
  viewNotAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    marginTop: -50,
    marginLeft: -125,
  },
  btnFacebook: {
    maxWidth: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    borderColor: 'transparent',
    backgroundColor: '#1278f3',
  },
  btnEmail: {
    maxWidth: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 50,
    marginLeft: 200,
    justifyContent: 'center',
    borderColor: 'transparent',
    backgroundColor: '#FFFFFF',
  },
  txtHandyman: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  login: {
    width: 370,
    height: 250,
    borderRadius: 30,
    borderColor: 'transparent',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    shadowColor: 'rgba(31, 38, 135, 0.25)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 32,
    shadowOpacity: 1,
    padding: 16,
    marginTop: 450,
  },
  fondo: {
    height: 1000,
    backgroundColor: '#e58835',
    alignItems: 'center',
  },
  img: {
    width: 500,
    height: 500,
    position: 'absolute',
    marginTop: -30,
    transform: [{rotate: '-17deg'}],
  },
});

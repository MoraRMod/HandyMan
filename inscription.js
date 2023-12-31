import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from 'react-native';

export default class Inscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalFacebook: false,
      nombre: '',
      correo: '',
      password: '',
    };
  }

  componentDidMount() {
    const {route} = this.props;

    if (route.params) {
      const {modalVisible, modalFacebook} = route.params;

      this.setState({modalVisible, modalFacebook});
    }
  }

  render() {
    const correo = () => {
      this.setState({modalVisible: true});
    };
    const facebook = () => {
      this.setState({modalFacebook: true});
    };
    
    const cierraModal = () => {
      const self = this;
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log('Respuesta del servidor: ' + xhttp.responseText);

          if (XMLHttpRequest.responseText === '3') {
            Alert.alert('Error: correo no reconocido.');
          } else {
            if (xhttp.responseText === '0') {
              Alert.alert('Error: password erroneo, intenta de nuevo.');
            } else {
              self.props.navigation.navigate('menu', {
                nombre: xhttp.responseText,
              });
            }
          }
        }
      };

      xhttp.open(
        'GET',
        'https://handymanprograinternet.000webhostapp.com/DatosP.php?nombre=' +
          this.state.nombre +
          '&correo=' +
          this.state.correo +
          '&password=' +
          this.state.password,
        true,
      );

      console.log(
        'https://handymanprograinternet.000webhostapp.com/DatosP.php?nombre=' +
          this.state.nombre +
          '&correo=' +
          this.state.correo +
          '&password=' +
          this.state.password,
      );

      xhttp.send();

      this.setState({modalVisible: false});
    };

    const cierraModalFacebook = () => {
      this.setState({modalFacebook: false});
    };

    return (
      <View>
        <Text style={styles.titulo}>Inscripcion</Text>

        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: 'grey',
            backgroundColor: 'white',
            width: 210,
            height: 60,
            borderRadius: 40,
            marginLeft: 100,
            marginTop: 30,
            shadowRadius: 4,
            shadowOpacity: 50,
            display: 'flex',
            justifyContent: 'center',
          }}
          onPress={correo}>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 18,
            }}>
            Inscribir con Gmail
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: 'grey',
            backgroundColor: 'white',
            width: 210,
            height: 60,
            borderRadius: 40,
            marginLeft: 100,
            marginTop: 30,
            display: 'flex',
            justifyContent: 'center',
          }}
          onPress={facebook}>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 18,
            }}>
            Inscribir con Facebook
          </Text>
        </TouchableOpacity>

        {/* Ventana modal correo*/}

        <Modal
          visible={this.state.modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}>
          <View
            style={{
              borderWidth: 2,
              marginLeft: 50,
              marginTop: 330,
              width: 300,
              borderColor: 'grey',
              borderRadius: 40,
              padding: 10,
            }}>
            <Text style={styles.subtitulo}>Nombre:</Text>
            <TextInput
              style={styles.txtInput}
              onChangeText={nombre => this.setState({nombre})}
            />

            <Text style={styles.subtitulo}>Correo:</Text>
            <TextInput
              style={styles.txtInput}
              onChangeText={correo => this.setState({correo})}
            />

            <Text style={styles.subtitulo}>Password:</Text>
            <TextInput
              style={styles.txtInput}
              onChangeText={password => this.setState({password})}
            />

            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor: 'transparent',
                backgroundColor: '#1278f3',
                width: 150,
                height: 50,
                borderRadius: 40,
                marginLeft: 60,
                display: 'flex',
                justifyContent: 'center',
              }}
              onPress={cierraModal}>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  color: 'white',
                }}>
                Aceptar
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>

        {/* Ventana modal facebook*/}
        <Modal
          visible={this.state.modalFacebook}
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}>
          <View
            style={{
              borderWidth: 2,
              marginLeft: 50,
              marginTop: 330,
              width: 300,
              borderColor: 'grey',
              borderRadius: 40,
              padding: 10,
            }}>
            <Text style={styles.subtitulo}>Correo:</Text>
            <TextInput style={styles.txtInput} />

            <Text style={styles.subtitulo}>Password:</Text>
            <TextInput style={styles.txtInput} />

            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor: 'transparent',
                backgroundColor: '#1278f3',
                width: 150,
                height: 50,
                borderRadius: 40,
                marginLeft: 60,
                display: 'flex',
                justifyContent: 'center',
              }}
              onPress={cierraModalFacebook}>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  color: 'white',
                }}>
                Aceptar
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 40,
    textAlign: 'center',
  },
  subtitulo: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 22,
  },
  txtInput: {
    borderWidth: 1,
    width: 260,
    height: 40,
    borderRadius: 20,
    borderColor: 'grey',
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
  },
});

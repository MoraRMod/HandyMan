import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import INICIO from './Home';
import INSCRIPCION from './Inscription';

export default class Navegacion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="inicio"
            component={INICIO}
            options={{headerShown: false}}
          />
          <Stack.Screen name="inscripcion" component={INSCRIPCION} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

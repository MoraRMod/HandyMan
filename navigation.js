import React, {Component, SafeAreaView} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Inicio from './home';
import Ins from './inscription';

const Stack = createNativeStackNavigator();

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Inscription" component={Ins} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
import React, {Component, SafeAreaView} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Inicio from './home';
import Ins from './inscription';
import Men from './menu';
import Tab from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
import winIn from './windowInfo';

const Stack = createNativeStackNavigator();

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /*
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Inscription" component={Ins} />
          <Stack.Screen
            name="menu"
            component={Men}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Tab"
            component={Tab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Tab2"
            component={Tab2}
            options={{headerShown: false}}
          />
          <Stack.Screen name="windowInfo" component={winIn} />
          <Stack.Screen
            name="Tab3"
            component={Tab3}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
*/

    // Esta es una prueba para la ventaba de Tab1 y la tarea.
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Men">
          <Stack.Screen
            name="Men"
            component={Men}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

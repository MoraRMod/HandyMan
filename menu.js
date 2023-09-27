import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import paraMenu from './tab1';
import Tab2 from './tab2';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const Tab = createBottomTabNavigator();

    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Menu" component={paraMenu}></Tab.Screen>
          <Tab.Screen name="tab2" component={Tab2}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

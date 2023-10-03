import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import paraMenu from './tab1';
import tab2 from './tab2';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator>
        <Tab.Screen
          name="myMenu"
          component={paraMenu}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={'black'} size={30} />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="tab2"
          component={tab2}
          options={{
            tabBarLabel: 'Alerta',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="alert-box"
                color={'black'}
                size={30}
              />
            ),
          }}></Tab.Screen>
      </Tab.Navigator>
    );
  }
}

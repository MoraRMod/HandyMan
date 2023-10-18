import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import paraMenu from './tab1';
import paraTab2 from './tab2';
import paraTab3 from './tab3';

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
          }}
        />
        <Tab.Screen
          name="myTab2"
          component={paraTab2}
          options={{
            tabBarLabel: 'Alerta',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="alert-box"
                color={'black'}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="myTab3"
          component={paraTab3}
          options={{
            tabBarLabel: 'Mapa',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="map-marker"
                color={'black'}
                size={30}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import TelaHome from './TelaHome';
import TelaCadastroUser from './TelaCadastroUser';
import TelaConfig from './TelaConfig';

const TabNavigator = createBottomTabNavigator(
  {
    HOME:{ 
      screen: TelaHome,
      navigationOptions:{
        tabBarIcon: () => (
          <Ionicons name="ios-home" size={30} color="rgba(255, 255, 255, 0.7)" />
        )
      },
    },
    PROFILE:{ 
      screen: TelaCadastroUser,
      navigationOptions:{
        tabBarIcon: () => (
          <Ionicons name="ios-heart" size={30} color="rgba(255, 255, 255, 0.7)" />
        )
      },
    },
    CONFIG: {
      screen: TelaConfig,
      navigationOptions:{
        tabBarIcon: () => (
          <Ionicons name="ios-settings" size={30} color="rgba(255, 255, 255, 0.7)"/>
        )
      },
    },
  },
  {
    headerMode: 'none',
    initialRouteName:'HOME',
    tabBarOptions:{
      activeTintColor: '#FFF',
      inactiveTintColor: '#000',
      showIcon: true,
      tabStyle:{
        backgroundColor: 'rgba(19, 151, 213, 0.7)'
      },
      
    }
  },
);

export default createAppContainer(TabNavigator);

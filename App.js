import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import 'react-native-gesture-handler';
import React, { Component } from 'react';

import TelaLogin from './src/screens/TelaLogin';
import NavInicial from './src/screens/NavInicial';
import TelaHome from './src/screens/TelaHome';
import TelaConfig from './src/screens/TelaConfig';
import TelaCadastroUser from './src/screens/TelaCadastroUser';

const AppNavigator = createStackNavigator(
  {
    TelaLogin: {
      screen: TelaLogin,
    },
    NavInicial: {
      screen: NavInicial,
    },
    TelaConfig: {
      screen: TelaConfig,
    },
    TelaHome: {
      screen: TelaHome,
    },
    TelaCadastroUser: {
      screen: TelaCadastroUser,
    },
        
  },
  {
    headerMode: 'none',
  },
);
export default createAppContainer(AppNavigator);
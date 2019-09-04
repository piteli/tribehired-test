import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginIndex from '../../screens/auth/login';
import RegisterIndex from '../../screens/auth/register';
import Dashboard from './DashboardStack';

export const RootStack = createStackNavigator(
  {
    login: {
        screen: LoginIndex,
        navigationOptions: {
          header: null,
        },
    },
    register: {
        screen: RegisterIndex,
        navigationOptions: {
          header: null,
        },
    },
    dashboard: {
        screen: Dashboard,
        navigationOptions: {
          header: null,
          gesturesEnabled: false
        },
      },
  },
  {
    initialRouteName: 'login'
  }
);

const AppStack = createAppContainer(RootStack);

export default AppStack;
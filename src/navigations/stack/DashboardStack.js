import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DashboardMainIndex from '../../screens/dashboard/dashboard-main';

export const RootStack = createStackNavigator(
  {
    dashboard_main: {
        screen: DashboardMainIndex,
        navigationOptions: {
          header: null,
        },
    },
  },
  {
    initialRouteName: 'dashboard_main'
  }
);

const AppStack = createAppContainer(RootStack);

export default AppStack;
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DashboardMainIndex from '../../screens/dashboard/dashboard-main';

export const dashboard = createStackNavigator(
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

const DashboardStack = createAppContainer(dashboard);

export default DashboardStack;
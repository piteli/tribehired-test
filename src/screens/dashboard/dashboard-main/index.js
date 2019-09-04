import React, { Component } from 'react';
import DashboardMainContainer from './DashboardMainContainer';

export default class DashboardMainIndex extends Component {
    
  render() {
    const { navigation } = this.props;
    return (
      <DashboardMainContainer navigation={navigation} />
    );
  }
}

import React, { Component } from 'react';
import DashboardMainContainer from './DashboardMainContainer';

export default class RegisterIndex extends Component {
    
  render() {
    const { navigation } = this.props;
    return (
      <DashboardMainContainer navigation={navigation} />
    );
  }
}

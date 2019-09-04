import React, { Component } from 'react';
import RegisterContainer from './RegisterContainer';

export default class RegisterIndex extends Component {
    
  render() {
    const { navigation } = this.props;
    return (
      <RegisterContainer navigation={navigation} />
    );
  }
}

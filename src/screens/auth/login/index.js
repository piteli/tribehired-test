import React, { Component } from 'react';
import LoginContainer from './LoginContainer';

export default class LoginIndex extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <LoginContainer navigation={navigation} />
    );
  }
}
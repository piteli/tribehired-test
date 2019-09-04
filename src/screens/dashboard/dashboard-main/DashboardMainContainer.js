import React, { Component } from 'react';
import DashboardMain from './DashboardMain';

export default class RegisterIndex extends Component {

  constructor(props){
      super(props);
  }

  componentDidMount(){}
    
  render() {
    return <DashboardMain navigation={navigation} />
  }
}

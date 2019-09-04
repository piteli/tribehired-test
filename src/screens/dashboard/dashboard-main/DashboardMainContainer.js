import React, { Component } from 'react';
import DashboardMain from './DashboardMain';
import Api from '../../../services/Api';
import { URL_END_PATH } from '../../../utilities/Contants';
import { NavigationActions, StackActions } from 'react-navigation'

export default class RegisterIndex extends Component {

  constructor(props){
      super(props);
      this.initiateStates();
      this.initiateInstances();
  }

  initiateStates(){
    this.state = {
      showLoadingData : false,
      showLogoutPopup : false,
      usersData : [],
    }
  }

  initiateInstances(){
    this.timeout = null;
    this.logout = this.logout.bind(this);
    this.searchRegisteredUsername = this.searchRegisteredUsername.bind(this);
  }

  componentDidMount(){}

  logout(){
    this.setState({showLogoutPopup : true});
    new Api().postApiWithBaseURL(URL_END_PATH.LOGOUT_URL, {}, null, false, false, null)
    .then((response) => response.json())
    .then((res) => {
        this.setState({showLogoutPopup : false});
        this.redirectToLoginView();
    }).catch((err) => {
        this.setState({showLogoutPopup : false});
        alert('An error Occurred, Please try again.')
    })
  }
  
  redirectToLoginView(){
    this.props.navigation.dispatch(StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'login' })]
    }));
  }

  searchRegisteredUsername(str){
    if(this.timeout != null){
        this.setState({showLoadingData : false, usersData : []});
        clearTimeout(this.timeout);
    }
    if(str === '')return;
    this.timeout = setTimeout(() => {
        this.setState({showLoadingData : true});
        const encode_username = encodeURIComponent(str);
        new Api().getApiWithBaseURL(`${URL_END_PATH.FETCH_USERS}?search=${encode_username}`, null, false, false, null)
        .then((response) => response.json())
        .then((res) => {
            console.log(res);
            if(res.length == 0)return this.setState({showLoadingData : false});
            this.setState({usersData : res, showLoadingData : false});
        }).catch((err) => {
            this.setState({showLoadingData : false});
        })
    }, 2000)
  }
    
  render() {
    return <DashboardMain {...this.state} navigation={this.props.navigation}
                          searchRegisteredUsername={this.searchRegisteredUsername}
                          logout={this.logout} />
  }
}

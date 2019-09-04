import React from "react";
import Login from "./Login";

export default class LoginContainer extends React.Component {

	constructor(props) {
		super(props);
		this.initiateStates();
		this.initiateInstances();
	}

	initiateStates() {
		this.state = {
			email: '',
			password: '',
			showLoading: false
		}
	}

	initiateInstances() {
		this.login = this.login.bind(this);
		this.onChangeInput = this.onChangeInput.bind(this);
	}

	onChangeInput(key, value) {
		const data = {};
		data[key] = value;
		this.setState(data);
	}

	login(){
		//call api from server and return json response
	}

	render() {
		return <Login {...this.state} navigation={this.props.navigation} login={this.login}
		onChangeInput={this.onChangeInput} />
	}
}
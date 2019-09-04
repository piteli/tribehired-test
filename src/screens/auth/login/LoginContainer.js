import React from "react";
import Login from "./Login";
import Api from '../../../services/Api';
import { URL_END_PATH } from '../../../utilities/Contants';

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
		this.errorInputMessage = "An error occurred!";
		this.login = this.login.bind(this);
		this.onChangeInput = this.onChangeInput.bind(this);
	}

	onChangeInput(key, value) {
		const data = {};
		data[key] = value;
		this.setState(data);
	}

	validateAllInput(){
		if (this.state.email.trim() == null || this.state.email.trim() === '') {
			this.errorInputMessage = "Email's field cannot be empty!";
			return false;
		}
		if (!(this.state.email.trim()).match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
			this.errorInputMessage = "Incorrect email format. Please try other email";
			return false;
		}
		if (this.state.password === '') {
			this.errorInputMessage = "Password's field cannot be empty";
			return false;
		}

		return true;
	}

	login(){
		if (!this.validateAllInput()) return alert(this.errorInputMessage);

		//call api from server, return json response and redirect to dashboard view
		this.setState({showLoading : true});
		const payload = { email : this.state.email , password : this.state.password };
		new Api().postApiWithBaseURL(URL_END_PATH.LOGIN_URL, payload, null, false, false, null)
		.then((response) => response.json())
		.then((res) => {
			this.setState({showLoading : false});
			this.props.navigation.navigate('dashboard');
		}).catch((err) => {
			this.setState({showLoading : false});
			alert(err.message);
		})
	}

	render() {
		return <Login {...this.state} navigation={this.props.navigation} login={this.login}
		onChangeInput={this.onChangeInput} />
	}
}
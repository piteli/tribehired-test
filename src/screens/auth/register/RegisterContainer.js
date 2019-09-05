import React from "react";
import Register from "./Register";
import Api from '../../../services/Api';
import { URL_END_PATH } from '../../../utilities/Contants';

export default class RegisterContainer extends React.Component {

	constructor(props) {
		super(props);
		this.initiateStates();
		this.initiateInstances();
    }
    
    initiateStates(){
		this.state = {
			email : "",
			username : "",
			password : "",
			passwordValueVisible : true,
			showLoading : false
		  };
    }

    initiateInstances(){
		this.errorInputMessage = "An error occurred!";
		this.register = this.register.bind(this);
		this.onChangeInput = this.onChangeInput.bind(this);
		this.visiblePassword = this.visiblePassword.bind(this);
	}

	onChangeInput(key, value){
		const data = {};
		data[key] = value;
		this.setState(data);
	}

	visiblePassword(){
		this.setState({passwordValueVisible : !this.state.passwordValueVisible})
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
		if (this.state.username === '') {
			this.errorInputMessage = "Username's field cannot be empty!";
			return false;
		}
		if (this.state.username.match("\\d+")) {
			this.errorInputMessage = "Username cannot contain number!";
			return false;
		}
		if (this.state.password === '') {
			this.errorInputMessage = "Password's field cannot be empty";
			return false;
		}
		if (!this.state.password.match("\\d+") || !this.state.password.match(/[a-z]/i)) {
			this.errorInputMessage = "Password must be alpha numeric! for example, 'johny123'";
			return false;
		}

		return true;
	}
	
	register(){
		if (!this.validateAllInput()) return alert(this.errorInputMessage);

		//call register api, get json response and save to internal storage, then redirect to dashboard view
		this.setState({showLoading : true});
		const payload = { email : this.state.email , password : this.state.password, username : this.state.username };
		console.log(URL_END_PATH.REGISTER_URL);
		new Api().postApiWithBaseURL(URL_END_PATH.REGISTER_URL, payload, null, false, false, null)
		.then((response) => response.json())
		.then((res) => {
			this.setState({showLoading : false});
			this.props.navigation.navigate('dashboard');
		}).catch((err) => {
			this.setState({showLoading : false});
			if(err.hasOwnProperty('message')) alert(err.message);
			else alert(err);
		})
	}

	render() {
		return <Register {...this.state} navigation={this.props.navigation} 
						register={this.register} onChangeInput={this.onChangeInput}
						visiblePassword={this.visiblePassword}/>
	}
}

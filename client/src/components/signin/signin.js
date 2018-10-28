
import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

import './SignIn.css'

const style = {
	formDiv: {
		paddingLeft: "25px",
		paddingRight: "25px"
	},
	button: {
		display: "block",
		marginLeft: "auto",
		marginRight: "auto"
	}
};


class SignIn extends React.Component {

	constructor(props) {
		super(props);
		// initial state in forms set to blank
		this.state = {
			emailInput: "",
			passwordInput:  ""
		};
		// This binding is necessary to make `this` work in the callback
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
	};

	//whatever the user types into the email field will update the state
	handleEmailChange(event) {
		this.setState({
			emailInput: event.target.value
		});
	};

	//whatever the user types into the password field will update the state
	handlePasswordChange(event) {
		this.setState({
			passwordInput: event.target.value
		});
	};

	handleSubmit(event) {
		event.preventDefault();
		// variables will be set to the values of current state
		let email = this.state.emailInput;
		let password = this.state.passwordInput;
		// print email and password values to console
		console.log("email:", email, typeof email)
		console.log("password:", password, typeof password)

		//if input matches test email + password requirements, load select_path page
		if ((email === "test@test.com") && (password === "pw123")){
			console.log("approved");
			window.location.href = '/select_path';
		}else{
			alert("Error. Try again.")
		}

		// function logInAttempt(query) {
		// 	return axios.post(window.location.href + "auth/signin", {

		// 		"email": email,
		// 		"password": password

		// 	}).then(function (response) {
		// 		console.log("response received!")
		// 		console.log(response);
		// 		if (response.data.signedIn == "true") {
		// 			console.log("this should be rerouting now")
		// 			window.location.href = window.location.href + 'select_path'
		// 		} else{
		// 			window.location.href = window.location.href
		// 		}

		// 	})
		// } return logInAttempt()

	}

	render() {
		return (
			<div className="formDiv card">
				<form onSubmit={this.handleSubmit}>
					
					<img src="./logo.png" alt="LectureLab logo" />
					<h3 className="text-center">Sign In</h3>

					<div className="form-group" style={style.formDiv}>
						<label htmlFor="emailInput">Email address:</label>
						<input type="email" className="form-control" name="emailInput" placeholder="name@example.com" value={this.state.value} onChange={this.handleEmailChange} />
					</div>

					<div className="form-group" style={style.formDiv}>
						<label htmlFor="inputPassword">Password:</label>
						<input type="password" className="form-control" name="passwordInput" placeholder="password" value={this.state.value} onChange={this.handlePasswordChange} />
					</div>
						<button type="button" onClick={this.handleSubmit} style={style.button}> Submit </button>
				</form>
			</div>
		);
	}
};


export default SignIn;
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Register.css';


class Register extends React.Component {

	showPasswordHandler(event) {
		const password = document.querySelector("#pass1");
		const type = password.getAttribute("type")==="password"?"text":"password";
		password.setAttribute("type", type);

	}
	render() {
		return (
			<div id="tsparticles">
				<main className="box">
					<h2>Login</h2>
					<form>
						<div className="inputBox">
							<label htmlFor="email">EMAIL</label>
							<input type="email" name="email" id="email"  required />
						</div>
						<div className="inputBox">
							<label htmlFor="pass1">PASSWORD</label>
							<input type="password" name="pass1" id="pass1" 
								required />
						</div>
						<div>
						<button type="submit">Continue</button>
						<p><a  href="#">Not Registered?</a></p>
						</div>
						<div>
							<p onClick={this.showPasswordHandler}>Show Password?</p>
						</div>
						
					</form>
				</main>
			</div>


		);
	}
}

export default Register;

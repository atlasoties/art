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
					<h2>Create an account</h2>
					<form>
						<div className="inputBox">
							<label htmlFor="userName">USERNAME</label>
							<input type="text" name="userName" id="userName"  required />
						</div>
						<div className="inputBox">
							<label htmlFor="email">EMAIL</label>
							<input type="email" name="email" id="email"  required />
						</div>
						<div className="inputBox">
							<label htmlFor="pass1">PASSWORD</label>
							<input type="password" name="pass1" id="pass1" 
								required />
						</div>
						<div className="inputBox">
							<label htmlFor="bdate">DATE OF BIRTH</label>
							<input type="date" name="bdate" id="userConfirmPassword"
								required />
						</div>
						<div>
						<button type="submit">Continue</button>
						<p><a  href="#">Already Have an Account?</a></p>
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

import React from 'react';
import {Link} from 'react-router-dom';
import './Register.css';

class Register extends React.Component {

	showPasswordHandler(event) {
		//event.preventDefault();
		const password = document.querySelector("#pass1");
		
		if(event.target.checked){
			password.setAttribute("type", "text");
		}else{
			password.setAttribute("type","password");
		}

	}
	render() {
		return (
			<section id="back">
			<div id="tsparticles ">
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
						<button>Continue</button>
						</div>
						<div>
							<p><Link to="/login">Already Registered?</Link></p>
							<label>Show Password</label>
							<input type="checkbox" onChange={this.showPasswordHandler}/>
						</div>
						
					</form>
				</main>
			</div>
			</section>

		);
	}
}

export default Register;

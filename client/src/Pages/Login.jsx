import React from 'react';
import {Link} from 'react-router-dom';

import './Login.css';

class Login extends React.Component {

	
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
							<button>Continue</button>
						</div>
						<div>
							<p><Link to="/register">Not Registered?</Link></p>
							<label clasName="check">Show Password</label>
							<input className="check1" type="checkbox" onChange={this.showPasswordHandler}/>
						</div>
						
					</form>
				</main>
			</div>
			</section>
			
		);
	}
}

export default Login;

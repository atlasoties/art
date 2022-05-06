import React from 'react';
import {Link} from 'react-router-dom';
import {loginApi} from '../util/APIRoutes';
import axios from 'axios';
import './Login.css';

class Login extends React.Component {
		constructor(props){
			super(props);
			this.state = {
				email:null,
				password:null
			}
		}
	
	showPasswordHandler(event) {
		//event.preventDefault();
		const password = document.querySelector("#pass1");
		
		if(event.target.checked){
			password.setAttribute("type", "text");
		}else{
			password.setAttribute("type","password");
		}

	}
	onSubmitHandler = async (event)=>{
		event.preventDefault();
		try{
			const {email,password} = this.state;
		    const data = await axios.post(loginApi,{
													 	email,
													 	password,
													 	});
		    console.log(data);
		 localStorage.setItem("art-user",JSON.stringify(data));
		 this.props.history.push("/");
		}catch(err){
			console.log(err);
		}
	}
	 handleForm = (event) =>{
		const {name,value}  = event.target;
		this.setState({[name]:value});
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
							<input type="email" name="email" id="email" onChange={this.handleForm} required />
						</div>
						<div className="inputBox">
							<label htmlFor="pass1">PASSWORD</label>
							<input type="password" name="password" onChange={this.handleForm} id="pass1" 
								required />
						</div>
						<div>
							<button onClick={this.onSubmitHandler}>Continue</button>
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

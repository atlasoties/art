import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/core';
import axios from 'axios';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: null,
			password: null
		}
		this.onSubmitHandler = this.onSubmitHandler.bind(this)
	}

	showPasswordHandler(event) {
		//event.preventDefault();
		const password = document.querySelector("#pass1");

		if (event.target.checked) {
			password.setAttribute("type", "text");
		} else {
			password.setAttribute("type", "password");
		}

	}
	onSubmitHandler = async (event) => {
		event.preventDefault();
		try {
			const { email, password } = this.state;
			const response = await axios.post('http://localhost:3030/user/login', {
				email,
				password,
			});
			if (response.data.other) {
				localStorage.setItem("art-user", JSON.stringify(response.data));
				toast.success(`Hi ${response.data.other.name}, Welcome!`, {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				window.location.href = "/chat";
			} else {
				toast.error(response.data, {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				})
			}
		} catch (err) {
			toast.error(err.message, {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	}
	handleForm = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}
	render() {
		return (

			<section id="back">
				<div id="tsparticles">
					<main className="box">
						<h2>Login</h2>
						<div>
							<div className="inputBox">
								<label htmlFor="email">EMAIL</label>
								<input type="email" name="email" id="email"  onChange={this.handleForm} required />
							</div>
							<div className="inputBox">
								<label htmlFor="pass1">PASSWORD</label>
								<input type="password" name="password" onChange={this.handleForm} id="pass1"
									required />
							</div>
							<div>
								<Button onClick={this.onSubmitHandler}>Continue</Button>
							</div>
							<div>
								<p><Link to="/register">Not Registered?</Link></p>
								<label className="check">Show Password</label>
								<input className="check1" type="checkbox" onChange={this.showPasswordHandler} />
							</div>
							<ToastContainer />
						</div>
					</main>
				</div>
			</section>

		);
	}
}

export default Login;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';
import { registerApi } from '../util/APIRoutes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null,
			email: null,
			password: null,
			dob: null
		}
	}
	showPasswordHandler(event) {
		event.preventDefault();
		const password = document.querySelector("#pass1");

		if (event.target.checked) {
			password.setAttribute("type", "text");
		} else {
			password.setAttribute("type", "password");
		}

	}
	onSubmitHandler = async () => {
		try {
			const { name, email, password, dob } = this.state;
			const response = await axios.post(registerApi, {
				name,
				email,
				password,
				dob
			});
			if (response.data.success) {
				toast.success(response.data.success, {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				window.location.href = "/login";
			}
			else {
				toast.error(response.data.error, {
					position: "bottom-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
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
		return (<>
			<section id="back">
				<div id="tsparticles ">
					<main className="box">
						<h2>Create an account</h2>
						<div >
							<div className="inputBox">
								<label htmlFor="name">NAME</label>
								<input type="text" name="name" id="name" onChange={this.handleForm} required />
							</div>
							<div className="inputBox">
								<label htmlFor="email">EMAIL</label>
								<input type="email" name="email" id="email" onChange={this.handleForm} required />
							</div>
							<div className="inputBox">
								<label htmlFor="password">PASSWORD</label>
								<input type="password" name="password" onChange={this.handleForm} id="pass1"
									required />
							</div>
							<div className="inputBox">
								<label htmlFor="bdate">DATE OF BIRTH</label>
								<input type="date" name="dob" onChange={this.handleForm} id="userConfirmPassword"
									required />
							</div>
							<div>

								<button onClick={this.onSubmitHandler}>Continue</button>
							</div>
							<div>
								<p><Link to="/login">Already Registered?</Link></p>
								<label>Show Password</label>
								<input type="checkbox" onChange={this.showPasswordHandler} />
							</div>
							<ToastContainer
								position="bottom-right"
								autoClose={5000}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
							/>
						</div>
					</main>
				</div>
			</section>
			{/* <ReactTostify /> */}
		</>
		);
	}
}

export default Register;

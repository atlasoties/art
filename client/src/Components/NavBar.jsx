import React ,{Component} from 'react';
import './NavBar.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


class NavBar extends Component{

	render(){
		return(
				<nav className="nav-wrapper">
					<Link to="/">Home</Link>
					<Link to="/login">Login</Link>
					<Link to="/register">Register</Link>
				</nav>
			);
	}
}


export default NavBar;
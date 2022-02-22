import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
class Footer extends Component{

	render(){
		return(
			<footer className="foot-wrapper">
				<ul>
					<li>Home</li>
					<li>Contacts</li>
					<li>About us</li>
					<li>Products</li>
				</ul>
			</footer>
		);
	}
}


export default Footer;
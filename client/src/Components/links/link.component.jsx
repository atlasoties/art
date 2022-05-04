import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './link.style.css'
class LoginLogout extends Component
{
    constructor(props)
    {
        super(props);
    }
    render(){
    return(
<nav className='nav-css'>
    <div  className="log">
<<<<<<< HEAD
        <Link to={this.props.place}>{this.props.placeName}</Link>
    </div>
=======
        <Link style={{backgroundColor:'url(${this.props.colorCode})'}}to={this.props.place}>{this.props.placeName}</Link>
    </div>
       
>>>>>>> f273282ee6c75f8e4ef9f05ab16c35e55cec95cc
</nav>
    );
}}
export default LoginLogout;
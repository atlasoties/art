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
        <Link style={{backgroundColor:'url(${this.props.colorCode})'}}to={this.props.place}>{this.props.placeName}</Link>
    </div>
       
</nav>
    );
}}
export default LoginLogout;
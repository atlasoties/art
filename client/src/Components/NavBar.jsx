import React ,{Component} from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';


class NavBar extends Component{
	

	toggleSwithcher(event){
		const card = document.querySelector(".card");
		const img1=  document.querySelector("#img1");
		const img2=  document.querySelector("#img2");
		const img3=  document.querySelector("#img3");
		const body = document.querySelector("body");
		const slider = document.querySelector(".slider");
		const headers = document.querySelector(".heading")
		const section = document.querySelector("section");
		if(event.target.checked){
			section.style.backgroundColor ="#23272A";
			headers.style.color="whitesmoke";
			slider.style.backgroundColor="#6666ff";
			img1.src="../../asset/img/undraw_chatting_dark.svg";
			img2.src="../../asset/img/undraw_video_call_dark.svg";
			img3.src="../../asset/img/undraw_team_chat_dark.svg";
		}
		else{
			slider.style.backgroundColor="#ccc";
			headers.style.color="rgb(0,0,0)";
			section.style.backgroundColor ="rgb(255,255,255)";
			img1.src="../../asset/img/undraw_chatting_light.svg";
			img2.src="../../asset/img/undraw_video_call_light.svg";
			img3.src="../../asset/img/undraw_team_chat_light.svg";
		}

	}

	render(){
		return(
			
				<nav className="nav-wrapper">
					<label className="switch">
					  <input onChange={this.toggleSwithcher} type="checkbox"/>
					  <span className="slider round"></span>
					</label>
				</nav> 
			);
	}
}


export default NavBar;
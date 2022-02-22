import React from 'react';
import './Home.css';
import NavBar from '../Components/NavBar.jsx';
import Footer from '../Components/Footer';

import PictureCard from '../Components/PictureCard';
import pic1 from "C:/Users/KYLE/Documents/GitHub/art/client/src/asset/img/undraw_chatting_light.svg";
import pic2 from "C:/Users/KYLE/Documents/GitHub/art/client/src/asset/img/undraw_video_call_light.svg";
import pic3 from "C:/Users/KYLE/Documents/GitHub/art/client/src/asset/img/undraw_team_chat_light.svg";

class Home extends React.Component {

	render(){
		return(
			<div>
			<NavBar/>
				<section>
					<div className="welcome">
						<header className="heading">
							<h1>Welcome To Your Fucking Life</h1>
							<h4>Pan Art will save Your Ass, Join US</h4>
						</header>
						<figure className=" wrap">
							<PictureCard text="Video Call" id="img2" url={pic2} />
							<PictureCard text="Blog Post" id="img3" url={pic3} />
							<PictureCard text="Text Messaging" id="img1" url={pic1} />
						</figure>
					</div>
				</section>
				<div className="body">
					<div id="flip">
						<div><div>Put Something Here</div> </div>
						<div><div>Put Something Here</div> </div>
						<div><div>Put Something Here</div> </div>
					</div>
				</div>
				<Footer/>
			</div>
			);
	}
}

export default Home;
import React from 'react';
import './Home.css';
import NavBar from '../Components/NavBar.jsx';
import Footer from '../Components/Footer';
import PictureCard from '../Components/PictureCard';
import pic1 from "../asset/img/undraw_chatting_light.svg";
import pic2 from "../asset/img/undraw_video_call_light.svg";
import pic3 from "../asset/img/undraw_team_chat_light.svg";
import LoginLogout from '../Components/links/link.component';


class Home extends React.Component {

	  constructor()
	  {
		  super()
	  this.state={
		pages:[
			{
				linkPlace:'/register',
				linkName:'Register',
				bgcolor:'red'
		},
		{
				linkPlace:'/login',
				linkName:'Login',
				bgcolor:'blue'
		},
		
		]
	  };
	}

	render(){
		return(
			<div>
			
				<section>
			
				<header className="heading">
					<div className='forNavbar'>
				<NavBar/>
				</div>
					<div className='fortitles'>
					<h1>Welcome To Your Life</h1>
					<h4>Pan Art will save Your Job, Join US</h4>
					</div>
					<div className='forlinks'>
				{this.state.pages.map(pages=><LoginLogout colorcode={pages.colorcode} place={pages.linkPlace} placeName={pages.linkName}/>)}
				</div>
				</header>
			
					<div className="welcome">
						
						
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
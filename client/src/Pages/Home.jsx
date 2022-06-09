import React from 'react';
import './Home.css';
import Topbar from '../Components/topbar/Topbar';
import Footer from '../Components/Footer';
import PictureCard from '../Components/PictureCard';
import pic1 from "../Asset/img/undraw_blog_post_re_fy5x.svg";
import pic2 from "../Asset/img/undraw_enter_uhqk-removebg-preview_auto_x2-removebg-preview.png";
import pic3 from "../Asset/img/undraw_events_re_98ue (1).svg";
import { MDBBtn } from 'mdb-react-ui-kit';
import LogOutModal from '../Components/Modals/LogoutModal';
let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corrupti impedit laborum accusantium culpa optio unde aliquid accusamus maxime quos sunt eligendi quidem quisquam ut ipsa repellat porro voluptas aliquam necessitatibus quod, quasi labore possimus obcaecati asperiores? Dolores eum necessitatibus reiciendis quod dolor beatae assumenda sed, nemo at. Repellat, quibusdam!";

class Home extends React.Component {
	render() {
		return (
			<div>

				<section>

					<header className="heading">
						{/* <div className='forNavbar'>
							<NavBar />
						</div> */}
						<Topbar />

					</header>
					<div className="welcome">
						<figure className=" wrap">
							<PictureCard text={text} title="Title" id="img2" url={pic2} />
							<PictureCard text={text} title="Event Advertising" id="img3" url={pic3} />
							<PictureCard text={text} title="Posting Blog" id="img1" url={pic1} />

						</figure>
					</div>
				</section>
				<div id="flip">
					{/* <img src={pic4} alt="" /> */}
				</div>
				<Footer />
			</div>
		);
	}
}

export default Home;
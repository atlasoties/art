import React ,{Component} from 'react';
import './PictureCard.css';

class PictureCard extends Component{
constructor(props){
	super(props);
}
	render(){
		return(
			<figure className="container">
				<div className="card">
					<h2>{this.props.text}</h2>
					<img id={this.props.id} alt="Illustration" src={this.props.url} />
				</div>
			</figure>	
		);
	}
}


export default PictureCard;
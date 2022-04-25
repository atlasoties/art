import React, { Component } from 'react';
import './PictureCard.css';

class PictureCard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<figure>
				<div className="card">
					<div className="card-img">
						<img id={this.props.id} alt="Illustration" src={this.props.url} />
					</div>
					<div className="card-text">
						<h1>{this.props.title}</h1>
						<p>{this.props.text}</p>
					</div>
				</div>
			</figure>
		);
	}
}


export default PictureCard;
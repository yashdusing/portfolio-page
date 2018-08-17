import React from 'react';
import './Card.css';

const Card = () => {
		return (
			<div className="flex flex-wrap">
				<div>
					<img className='pt3 pl3' alt='Yash' src={require('./profile.jpg')} width="200" height="200" />
				</div>
				<div className="pl3 ml3 dark-blue custom_oswalt">
					<h2 id="scaler_1">Yash <b>Dusing</b></h2>
					<h3 className="scaler_2">yashdusing145@gmail.com</h3>
					<p className="scaler_2">Web developer & Data Science enthusiast keen to learn new things online</p> 
					<p className="scaler_2">(Click to know more)</p>
				</div>
			</div>
			);
}

export default Card;
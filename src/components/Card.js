import React from 'react';
import './card.css';

const Card = ({ name, price, img, market_cap_rank, id, setMolad, setOpen }) => {
	return (
		<div
			className='card'
			onClick={() => {
				setMolad(id);
				setOpen(true);
			}}>
			<img src={img} alt='' />
			<h3>{name}</h3>
			<p>Live price : {price}</p>

			<p>market cap rank : {market_cap_rank}</p>
		</div>
	);
};

export default Card;

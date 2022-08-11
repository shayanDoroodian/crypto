import React from 'react';
import './hero.css';
import HeroImg from '../assets/images/kif.png';

const Hero = () => {
	return (
		<>
			<div className='heroContainer'>
				<div className='heroText'>
					<h1>HELLO</h1>
					<h3>latests in market</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
						accusantium.
					</p>
					<button>See prices</button>
				</div>
				<div className='heroImage'>
					<img src={HeroImg} alt='' />
				</div>
			</div>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#E8F9FD'
					fill-opacity='1'
					d='M0,128L60,117.3C120,107,240,85,360,106.7C480,128,600,192,720,218.7C840,245,960,235,1080,208C1200,181,1320,139,1380,117.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'></path>
			</svg>
		</>
	);
};

export default Hero;

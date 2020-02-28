import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import facialRecognitionLogo from './facialRecognitionLogo.png';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
 				<div className="Tilt-inner pa1">
 					<img style={{paddingTop:'1px'}} alt='logo' src={facialRecognitionLogo}/>
 				</div>
			</Tilt>
		</div>
	);
}

export default Logo;


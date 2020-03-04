import React from 'react';
import './Logo.css';
import facialRecognitionLogo from './facialRecognitionLogo.png';

const Logo = () => {
	return (
		<div className='appLogo ma4 mt0 br2 shadow-2 pa1 grow'>
 			<img style={{paddingTop:'3px'}} alt='logo' src={facialRecognitionLogo}/>
		</div>
	);
}

export default Logo;


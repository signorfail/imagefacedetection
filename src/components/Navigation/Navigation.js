import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signedOut')} 
					className='f6 link dim black underline pa4 pointer'>Sign Out</p>
			</nav>
			);
	} else {
		return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<p onClick={() => onRouteChange('SignIn')} 
				className='f6 link dim black underline pa4 pointer'>Sign In</p>
			<p onClick={() => onRouteChange('SignUp')} 
				className='f6 link dim black underline pa4 pointer'>Sign Up</p>
		</nav>
		);
	}
}
export default Navigation;


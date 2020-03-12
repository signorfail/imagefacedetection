import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('SignIn')} 
					className='f6 link dim black underline pa4 pointer br2 shadow-5 pa1-ns mv3 mr3 grow'>Sign Out</p>
			</nav>
			);
	} else {
		return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<p onClick={() => onRouteChange('SignIn')} 
				className='f6 link dim black underline pa4 pointer br2 pa1-ns mv3 mr3'>Sign In</p>
			<p onClick={() => onRouteChange('SignUp')} 
				className='f6 link dim black underline pa4 pointer br2 pa1-ns mv3 mr3'>Sign Up</p>
		</nav>
		);
	}
}
export default Navigation;


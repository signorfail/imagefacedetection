import React from 'react';

const Register = ({ onRouteChange }) => {
	return (
		<article className="mw6 shadow-5 center br3 pa1 pa1-ns mv3 ba b--black-10">
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
			       <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
			        <input 
				        placeholder='Enter a username' 
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="text" 
				        name="username"  id="username" />
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input 
				        placeholder='Enter your Email' 
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="email" 
				        name="email-address"  
				        id="email-address" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input 
				        placeholder='Enter your Password' 
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="password" 
				        name="password"  
				        id="password" />
			      </div>
			    </fieldset>
			    <div className="">
			      <input
			      	onClick= {() => onRouteChange('home')}
				    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				    type="submit"
				    value="Sign Up"
			      />
			    </div>
			  </div>
			</main>
		</article>
	);
}

export default Register;


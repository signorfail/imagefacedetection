import React from 'react';

class SignIn extends React.Component {
	// Container for SignIn component to contain sign in state within this component
	constructor(props) {
		super(props);
		 this.state= {
			signInEmail: '',
			signInPassword: ''
		 }
	}
	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}
	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}
	onSubmitSignIn = () => {
		fetch('https://floating-wave-22954.herokuapp.com/signIn', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response=> response.json())
		.then(user => {
			if(user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})
	}
	render() {
		const { onRouteChange } = this.props;
		return (
			<article className="mw6 shadow-5 center br3 pa1 pa1-ns mv3 ba b--black-10">
				<main className="pa4 black-80">
				  <div className="measure">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					  <legend className="f4 fw6 ph0 mh0">Sign In</legend>
					  <div className="mt3">
						<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
						<input 
							placeholder='Enter your Email' 
							className="pa2 input-reset ba bg-bg-light-gray hover-bg-black hover-white w-100" 
							type="email" 
							name="email-address"  
							id="email-address" 
							onChange= {this.onEmailChange} />
					  </div>
					  <div className="mv3">
						<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
						<input 
							placeholder='Enter your Password' 
							className="pa2 input-reset ba bg-bg-light-gray hover-bg-black hover-white w-100" 
							type="password" 
							name="password"  
							id="password"
							onChange= {this.onPasswordChange} />
					  </div>
					  {/* <label className="pa0 ma0 lh-copy f6"><input type="checkbox" /> Remember me </label> */}
					</fieldset>
					<div className="">
					  <input
						  onClick= {this.onSubmitSignIn}
						className="b ph3 pv2 input-reset ba b--black bg-transparent shadow-5 grow pointer f6 dib" 
						type="submit"
						value="Sign In"
					  />
					</div>
					<div className="lh-copy mt3">
					  <p onClick= {() => onRouteChange('SignUp')} className="f6 link dim black db pointer">Sign Up</p>
					  {/* <a href="#0" className="f6 link dim black db">Forgot your password?</a> */}
					</div>
				  </div>
				</main>
			</article>
		);
	}
}

export default SignIn;


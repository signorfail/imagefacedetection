import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		 this.state= {
			registerName: '',
			registerEmail: '',
			registerPassword: ''
		 }
	}
	onNameChange = (event) => {
		this.setState({registerName: event.target.value})
	}
	onEmailChange = (event) => {
		this.setState({registerEmail: event.target.value})
	}
	onPasswordChange = (event) => {
		this.setState({registerPassword: event.target.value})
	}
	onSubmitSignIn = () => {
		/* console.log(this.state);
		logs onSubmitSignin data to console*/
		fetch('http://localhost:3001/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.registerName,
				email: this.state.registerEmail,
				password: this.state.registerPassword
			})
		})
		.then(response=> response.json())
		.then(user => {
			if (user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})
	}
	render() {
		return (
			<article className="mw6 shadow-5 center br3 pa1 pa1-ns mv3 ba b--black-10">
				<main className="pa4 black-80">
				<div className="measure">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					<legend className="f4 fw6 ph0 mh0">Sign Up</legend>
					<div className="mt3">
						<label className="db fw6 lh-copy f6" htmlFor="name">Username</label>
						<input 
							placeholder='Enter a username' 
							className="pa2 input-reset ba bg-bg-light-gray hover-bg-black hover-white w-100" 
							type="text" 
							name="name"  
							id="name"
							onChange={this.onNameChange} />
					</div>
					<div className="mt3">
						<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
						<input 
							placeholder='Enter your Email' 
							className="pa2 input-reset ba bg-bg-light-gray hover-bg-black hover-white w-100" 
							type="email" 
							name="email-address"  
							id="email-address"
							onChange={this.onEmailChange} />
					</div>
					<div className="mv3">
						<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
						<input 
							placeholder='Enter your Password' 
							className="pa2 input-reset ba bg-bg-light-gray hover-bg-black hover-white w-100" 
							type="password" 
							name="password"  
							id="password"
							onChange={this.onPasswordChange} />
					</div>
					</fieldset>
					<div className="">
					<input
						onClick= {this.onSubmitSignIn}
						className="b ph3 pv2 input-reset ba b--black bg-transparent shadow-5 grow pointer f6 dib" 
						type="submit"
						value="Sign Up"
					/>
					</div>
				</div>
				</main>
			</article>
			);
	}
}

export default Register;
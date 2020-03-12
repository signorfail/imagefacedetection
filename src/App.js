import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import SignIn from './components/SignIn/SignIn.js';
import SignUp from './components/SignUp/SignUp.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Rank from './components/Rank/Rank.js';
import Footer from './components/Footer/Footer.js';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 70,
      line_linked: {
      shadow: {
        enable: true,
        color: "#de2121",
        blur: 5
        }
     }
    }
  }
}

const initialState = {
// Sets app to this state once signed out
  input: '',
  imageUrl: '',
  box: {},
  route: 'SignIn',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  loadUser = (data) => {
    // prop used in SignUp.js
    this.setState({ user: 
      {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
      }
    })
  }

  calculateFaceLocation = (response) => {
   const faceBox = response.outputs[0].data.regions[0].region_info.bounding_box;
   const image = document.getElementById('inputImage');
   const imageWidth = Number(image.width);
   const imageHeight = Number(image.height);
   return {
    leftCol: faceBox.left_col * imageWidth,
    topRow: faceBox.top_row * imageHeight,
    rightCol: imageWidth - (faceBox.right_col * imageWidth),
    bottomRow: imageHeight - (faceBox.bottom_row * imageHeight)
   }
  }

  onRouteChange= (route) => {
    if (route === 'SignIn') {
      this.setState(initialState)
      // if is signed out will clear user state to initial state
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  displayFaceBox = (box) => {
   this.setState({box: box}); 
  }

  onInputChange= (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit= () => {
    // Submits image to API
    this.setState({imageUrl: this.state.input});
      fetch('https://floating-wave-22954.herokuapp.com/imageAPI', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        if(response) {
          fetch('https://floating-wave-22954.herokuapp.com/updateImageCount', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count}))
          })
          .catch(error => console.log('Error. Updating image count failed.', error));
          }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(error => console.log('Error. API Failed', error));
  }

  render() {
    const { isSignedIn, route, imageUrl, box } = this.state;
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navigation isSignedIn= {isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
           ? <div>
              <div className='textLogoAlign'>
                <Logo />
                <div className='textAlign'>
                  <Rank
                    name={this.state.user.name}
                    entries={this.state.user.entries}
                  //allows the user's name and entries to display with template text found in rank.js
                  />
                </div>
              </div>
              <ImageLinkForm
                onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit} 
                />
              <FaceRecognition box={box} imageUrl={imageUrl} />
            </div>
          : (
            route === 'SignIn'
              ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              : <SignUp loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            )
        }
        <Footer className='footer' />
      </div>
    );
  }
}

export default App;
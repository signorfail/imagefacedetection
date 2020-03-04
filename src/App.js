import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation.js';
import SignIn from './components/SignIn/SignIn.js';
import SignUp from './components/SignUp/SignUp.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';
import './App.css';

const app = new Clarifai.App({
 apiKey: 'dc0dec044ee247be9d76934e0267aacc'
});

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

class App extends Component {
  constructor() {
    super();
    this.state={
      input: '',
      imageUrl: '',
      box: {},
      route: 'SignIn',
      isSignedIn: false
    }
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
    if (route === 'signedOut') {
      this.setState({isSignedIn: false})
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
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(error => console.log(error));
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
                  <Rank />
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
              ? <SignIn onRouteChange={this.onRouteChange} />
              : <SignUp onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation.js';
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

  displayFaceBox = (box) => {
    console.log(box);
   this.setState({box: box}); 
  }

  onInputChange=(event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit=() => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
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
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;

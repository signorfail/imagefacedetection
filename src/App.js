import React from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
     {//       <ImageLinkForm />
     //       Input form for face detection image URL
     //       <FaceRecognition />
     //       Image display area with face recognition
    }
    </div>
  );
}

export default App;

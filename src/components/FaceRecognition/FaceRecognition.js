import React from 'react';
import './FaceRecognition.css';

// have to redo style. Added absolute to <div> wrapping <img> or bounding box won't work

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className='absolute center ma mt3'>
			<img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
			<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
		</div>
	);
}

export default FaceRecognition;

// for src = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
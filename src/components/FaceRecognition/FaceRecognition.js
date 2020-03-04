import React from 'react';
import './FaceRecognition.css';

// have to redo style. Added absolute to <div> wrapping <img> or bounding box won't work

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className='center ma'>
			<div className='absolute center'>
				<img className='inputImage' id='inputImage' alt='' src={imageUrl} />
				<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
			</div>	
		</div>
	);
}

export default FaceRecognition;

// for src ={imageUrl}
// https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80
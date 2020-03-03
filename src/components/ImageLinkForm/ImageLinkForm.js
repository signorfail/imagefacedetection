import React from 'react';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3'>
				{'Face Detection in Images Using Machine Learning.'}
			</p>
			<div className='center'>
				<div className='center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-30 center' type='text' placeholder='Enter image link.' onChange={onInputChange} />
					<button 
						className='w-20 grow f4 link ph3 pv2 ml1 dib'
						onClick={onButtonSubmit}
						>Run</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;
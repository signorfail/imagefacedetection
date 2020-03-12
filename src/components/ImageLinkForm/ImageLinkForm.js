import React from 'react';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<div className='center'>
				<div className='center pa2 br3'>
					<input className='f5 pa2 w5 center' type='text' placeholder='Enter image link' onChange={onInputChange} />
					<button 
						className='w-30 grow f5 link ph3 pv2 ml1 dib'
						onClick={onButtonSubmit}
						>Run</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;
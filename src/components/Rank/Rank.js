import React from 'react';

const Rank = ({ name, entries }) => {
	return (
		<div>
			<div>
				<p className='f2 ma1 center b'>
				{'Face Detection With'} <br>
				</br>{'Machine Learning'}
				</p>
			</div>
			<div className='f5 center'>
				{`${name}. The number of images you have sent is... `}
			</div>
			<div className='f4 center'>
				{`${entries}`}
			</div>
 		</div>
	);
}

export default Rank;


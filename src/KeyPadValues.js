import React from 'react';
import './KeyPadValues.css';

const KeyPadValues = ({keyValue, handleOnChange}) => (
	<button 
		className='btn btn-primary square'
		onClick={handleOnChange.bind(this, keyValue)}
	>
		<p>{keyValue}</p>
	</button>
);

export default KeyPadValues;
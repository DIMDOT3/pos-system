import React from 'react';
import './AddComboButton.css';

const AddComboButton = ({ item, handleAddItem }) => {
	let itemObj = omit(item, 'entree');
	return (
		<button 
			onClick={handleAddItem.bind(this, itemObj)}
			className='btn btn-secondary menu-button'
			>
				Combo - ${item.combo}
		</button>
	)
}

function omit(obj, omitKey) {
  return Object.keys(obj).reduce((result, key) => {
    if(key !== omitKey) {
       result[key] = obj[key];
    }
    return result;
  }, {});
}

export default AddComboButton;
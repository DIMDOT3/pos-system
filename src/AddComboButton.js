import React from 'react';

const AddComboButton = ({ item, handleAddItem }) => {
	let itemObj = omit(item, 'entree');
	return (
		<button 
			onClick={handleAddItem.bind(this, itemObj)}
			className='btn btn-success'
			>
				Combo
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
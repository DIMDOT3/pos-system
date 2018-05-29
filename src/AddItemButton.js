import React from 'react';

const AddItemButton = ({ item, handleAddItem }) => {
	let itemObj = omit(item, 'combo');
	return (
		<button 
			onClick={handleAddItem.bind(this, itemObj)}
			className='btn btn-primary menu-button'
			>
				Entree - ${item.entree}
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

export default AddItemButton;





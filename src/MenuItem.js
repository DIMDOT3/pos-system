import React, { Component } from 'react';

const MenuItem = ({item, handleAddItem}) => (
	<div>
		<h3>{item.name}</h3>
		<button 
			onClick={handleAddItem}
			className='btn btn-success'
			>
				Entree
		</button>
		<button className='btn btn-caution'>Plate</button>
	</div>
);

export default MenuItem;
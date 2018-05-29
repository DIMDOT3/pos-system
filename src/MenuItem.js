import React, { Component } from 'react';
import AddItemButton from './AddItemButton';
import AddComboButton from './AddComboButton';
import './MenuItem.css';

const MenuItem = ({item, handleAddItem}) => {
	return (
		<div className='menu-item-container'>
			<h3>{item.name}</h3>
			<AddItemButton item={item} handleAddItem={handleAddItem} />
			<AddComboButton item={item} handleAddItem={handleAddItem} />
		</div>
	);
};

export default MenuItem;
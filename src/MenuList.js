import React from 'react';
import MenuItem from './MenuItem';
import './MenuList.css';

const MenuList = ({items, handleAddItem}) => {
	const menuItem = items.map((item, i) => (
		<MenuItem 
			item={item} 
			key={i}
			handleAddItem={handleAddItem.bind(this, item)} 
		/>
	));
	return (
		<div className='menu-list'>
			<h2>Menu Items</h2>
			{menuItem}
		</div>
	);
};

export default MenuList;
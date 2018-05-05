import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({items}) => {
	const menuItem = items.map(item => <MenuItem item={item} />);
	return (
		<ul>
			{menuItem}
		</ul>
	);
};

export default MenuList;
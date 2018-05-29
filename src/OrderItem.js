import React from 'react';
import './OrderItem.css';

const OrderItem = ({ order, handleRemoveItem }) => {
	return (
		<div className='order-item-flex'>
			<p>{order.name}</p>
			<p>{Object.keys(order)[1]}</p>
			<p>${order.entree || order.combo}</p>
			<button className='btn btn-danger' onClick={handleRemoveItem.bind(this, order)}>Remove</button>
		</div>
	);
}

export default OrderItem;
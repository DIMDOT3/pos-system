import React from 'react';
import './OrderItem.css';

const OrderItem = ({ order, handleRemoveItem }) => {
	return (
		<div className='order-item-flex'>
			<p className='order-item-values'>{order.name}</p>
			<p className='order-item-values'>{Object.keys(order)[1]}</p>
			<p className='order-item-values'>${order.entree || order.combo}</p>
			<button className='btn btn-danger order-item-values' onClick={handleRemoveItem.bind(this, order)}>Remove</button>
		</div>
	);
}

export default OrderItem;
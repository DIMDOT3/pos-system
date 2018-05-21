import React, { Component } from 'react';
import './OrderList.css';
import KeyPadValues from './KeyPadValues';

class OrderList extends Component {
	constructor(props){
		super(props);
		this.state = {
			orderTotal: '',
			tenderAmount: ''
		};
	}
	render(){
		const { orders, handleAddOrder } = this.props;
		const orderItems = orders.map(order => (
			<p>{order.name}</p>
		));
		const keyPadValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'BACK', 0, 'CLEAR'];
		const keys = keyPadValues.map(keyValue => (
			<KeyPadValues keyValue={keyValue} />
		));
		return (
			<div className='order-list'>
				<h2>Order List</h2>
				{orderItems}
				<div>
					<div>
						{keys}
					</div>
					<button className='btn' onClick={handleAddOrder}>Add Order</button>
				</div>
			</div>
		);
	}
}

export default OrderList;
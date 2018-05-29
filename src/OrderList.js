import React, { Component } from 'react';
import './OrderList.css';
import KeyPadValues from './KeyPadValues';
import OrderItem from './OrderItem';

class OrderList extends Component {
	constructor(props){
		super(props);
	};

	// handleOnChange = (val) => {
	// 	let {tenderAmount} = this.state;
	// 	var currentTenderAmount;
	// 	if(val === 'Back'){
	// 		currentTenderAmount = tenderAmount.slice(0, tenderAmount.length - 1);
	// 	} else if(val === 'Clear'){
	// 		currentTenderAmount = '';
	// 	} else {
	// 		currentTenderAmount = tenderAmount + val;
	// 	};
	// 	this.setState({
	// 		tenderAmount: currentTenderAmount
	// 	});
	// };

	handleRemoveItem = (item) => {
		console.log(item);
		// let { orderTotal } = this.state;
		// let revisedOrderTotal = orderTotal.filter((order, i) => order !== item);
		// this.setState({
		// 	orderTotal: revisedOrderTotal
		// });
		// console.log(this.state.orderTotal);
	};

	render(){
		const { orders, tenderAmount, handleOnChange, handleAddItem, handleAddOrder } = this.props;
		// const { orderTotal, tenderAmount } = this.state;
		const keyPadValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'Back', '0', 'Clear'];
		let orderItems = orders.map(order => (
			<OrderItem order={order} handleRemoveItem={this.handleRemoveItem}/>
		));
		let keys = keyPadValues.map(keyValue => (
			<KeyPadValues keyValue={keyValue} handleOnChange={handleOnChange} />
		));
		let totalOrderCost = orders.reduce((acc, val) => {
			return acc + (val.entree || val.combo);
		}, 0);
		let tenderTotal = (tenderAmount === '') ? 0 : Number(tenderAmount);
		let change = tenderTotal - totalOrderCost;
		return (
			<div className='order-list'>
				<div className='order-items-container'>
					<h2>Order List</h2>
					{orderItems}
				</div>
				<div className='keys-and-total-container'>
					<div className='totals-container'>
						<div className='row totals'>
							<div className='col-sm-8'>Order Total</div>
							<div className='col-sm-4'>${totalOrderCost}</div>
						</div>
						<div className='row totals'>
							<div className='col-sm-8'>Tender</div>
							<div className='col-sm-4'>${tenderTotal}</div>
						</div>
						<div className='row totals'>
							<div className='col-sm-8'>Change</div>
							<div className='col-sm-4'>${change}</div>
						</div>
						<button className='btn btn-primary' onClick={handleAddOrder}>Add Order</button>
					</div>
					<div className='keys-container'>
						{keys}
					</div>
				</div>
			</div>
		);
	}
}

export default OrderList;
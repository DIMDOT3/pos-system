import React, { Component } from 'react';
import './OrderList.css';
import KeyPadValues from './KeyPadValues';
import OrderItem from './OrderItem';

class OrderList extends Component {
	constructor(props){
		super(props);
		this.state = {
			orderTotal: [],
			tenderAmount: ''
		};
	};

	componentWillReceiveProps(props) {
    this.setState({orderTotal: props.orders});
}

	handleOnChange = (val) => {
		let {tenderAmount} = this.state;
		let currentTenderAmount = tenderAmount + val;
		this.setState({
			tenderAmount: currentTenderAmount
		});
	};

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
		const { orders, handleAddItem, handleAddOrder } = this.props;
		const { orderTotal, tenderAmount } = this.state;
		const keyPadValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'Back', '0', 'Clear'];
		let orderItems = orders.map(order => (
			<OrderItem order={order} handleRemoveItem={this.handleRemoveItem}/>
		));
		let keys = keyPadValues.map(keyValue => (
			<KeyPadValues keyValue={keyValue} handleOnChange={this.handleOnChange.bind(this, keyValue)} />
		));
		let totalOrderCost = orderTotal.reduce((acc, val) => {
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
						<div className='row'>
							<div className='col-sm-4'>Order Total</div>
							<div className='col-sm-8'>${totalOrderCost}</div>
						</div>
						<div className='row'>
							<div className='col-sm-4'>Tender</div>
							<div className='col-sm-8'>${tenderTotal}</div>
						</div>
						<div className='row'>
							<div className='col-sm-4'>Change</div>
							<div className='col-sm-8'>${change}</div>
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
import React, { Component } from 'react';
import './App.css';
import MenuList from './MenuList';
import OrderList from './OrderList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [
        {
          name: 'bread',
          price: 8,
          combo: 10,
          imageUrl: ''
        },
        {
          name: 'milk',
          price: 6,
          combo: 8
        },
        {
          name: 'cheese',
          price: 5,
          combo: 7
        }
      ],
      orders: []
    };
  }

  handleAddItem = (item) => {
    let currentOrdersState = this.state.orders;
    this.setState({
      orders: [...currentOrdersState, item]
    });
  };

  handleAddOrder = () => {
    // add order data to db
    console.log(this.state.orders);
    this.state.orders.forEach(order => console.log(order.name));
    this.setState({orders: []});
  };

  handleRemoveItem = () => {};

  render() {
    const { items, orders, handleAddOrder } = this.state;
    return (
      <div className="App">
        <div className='menu-order-container'>
          <MenuList items={items} handleAddItem={this.handleAddItem}/>
          <OrderList orders={orders} handleAddOrder={this.handleAddOrder} />
        </div>
      </div>
    );
  }
}

export default App;

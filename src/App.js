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
          entree: 8,
          combo: 10,
          imageUrl: ''
        },
        {
          name: 'cheese',
          entree: 8,
          combo: 10,
          imageUrl: ''
        },
        {
          name: 'milk',
          entree: 5,
          combo: 7,
          imageUrl: ''
        },
        {
          name: 'pie',
          entree: 10,
          combo: 12,
          imageUrl: ''
        },
        {
          name: 'cheeseburger',
          entree: 8,
          combo: 10,
          imageUrl: ''
        },
      ],
      orders: []
    };
  }

  handleAddItem = (item) => {
    console.log(item);
    let currentOrdersState = this.state.orders;
    this.setState({
      orders: [...currentOrdersState, item]
    });
  };

  handleAddOrder = () => {
    // add order data to db
    this.state.orders.forEach(order => console.log(order.name));
    this.setState({orders: []});
    console.log(this.state.orders);
  };

  render() {
    const { items, orders, handleAddOrder } = this.state;
    return (
      <div className="App">
        <div className='menu-order-container'>
          <MenuList items={items} handleAddItem={this.handleAddItem} />
          <OrderList 
            orders={orders} 
            handleAddOrder={this.handleAddOrder} 
          />
        </div>
      </div>
    );
  }
}

export default App;

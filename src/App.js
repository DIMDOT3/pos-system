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
      orders: [],
      tenderAmount: '',
      id: 0
    };
  }

  handleAddItem = (item) => {
    console.log(item);
    let currentOrdersState = this.state.orders;
    this.setState({
      orders: [...currentOrdersState, item]
    });
  };

  handleOnChange = (val) => {
    let {tenderAmount} = this.state;
    var currentTenderAmount;
    if(val === 'Back'){
      currentTenderAmount = tenderAmount.slice(0, tenderAmount.length - 1);
    } else if(val === 'Clear'){
      currentTenderAmount = '';
    } else {
      currentTenderAmount = tenderAmount + val;
    };
    this.setState({
      tenderAmount: currentTenderAmount
    });
  };

  handleAddOrder = () => {
    // add order data to db
    this.setState({
      orders: [],
      tenderAmount: ''
    });
  };

  render() {
    const { items, orders, handleAddOrder, handleOnChange, tenderAmount } = this.state;
    return (
      <div className="App">
        <div className='menu-order-container'>
          <MenuList items={items} handleAddItem={this.handleAddItem} />
          <OrderList 
            orders={orders} 
            handleAddOrder={this.handleAddOrder} 
            handleOnChange={this.handleOnChange}
            tenderAmount={tenderAmount}
          />
        </div>
      </div>
    );
  }
}

export default App;

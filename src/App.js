import React, { Component } from 'react';
import './App.css';
import MenuList from './MenuList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: ['cheese', 'bread']
    };
  }
  render() {
    return (
      <div className="App">
        Hello
        <MenuList items={this.state.items}/>
      </div>
    );
  }
}

export default App;

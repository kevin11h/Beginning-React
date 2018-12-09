import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products';

class App extends Component {


  formatName(user) {
    return user.firstName + ' ' + user.lastName; 
  }


  render() {

    const user = {
      firstName: 'Kevin',
      lastName: 'Lim'
    };

    return (
      <div>
        <h1>
           <h1> Hello, {this.formatName(user) } </h1>
        </h1>
        <Products />
        <Products />
        <Products />
      </div>
    );
  }
}

export default App;

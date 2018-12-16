import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from './Rating';

class App extends Component {


  formatName(user) {
    return user.firstName + ' ' + user.lastName; 
  }


  render() {
  
    const isValid = true;

    const user = {
      firstName: 'Kevin',
      lastName: 'Lim'
    };

    return (
      <div>
        <Products />
        
      </div>
    );
  }
}

export default App;

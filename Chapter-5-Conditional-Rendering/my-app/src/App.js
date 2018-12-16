import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from './Rating';
import JumboTronComponent from './JumboTronComponent';

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
        <JumboTronComponent>
          This is a long sentence, and I want to insert content into the jumbotron component from the outside.

        </JumboTronComponent>
        <Products />
        
      </div>
    );
  }
}

export default App;

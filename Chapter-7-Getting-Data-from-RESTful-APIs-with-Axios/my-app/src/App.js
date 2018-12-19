import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from './Rating';
import JumboTronComponent from './JumboTronComponent';
import UserForm from './UserForm';
import GitHub from './GitHub';

class App extends Component {

  render() {
  
    return (
      <div>
        <GitHub />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap'; 
import './App.css';
import Menu from './components/MenuComponent'
class App extends Component {
  render() {
    return (
      <div>
        <Navbar color ="secondary">
        <div className="container">
        <NavbarBrand>Home</NavbarBrand>
        </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;

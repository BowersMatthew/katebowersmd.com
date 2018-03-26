import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kate Bowers MD</h1>
          <h2 className="App-sub-title">Pediatrician Serving Midlothian, Virginia</h2>
        </header>
    );
  }
}

export default Header;
import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  render() {
    const { location } = this.props;
    if (location.pathname !== '/') {
      return (
        <a href="/">
          <header className="App-header">
            <h1 href="/" className="App-title">Firefly Pediatrics</h1>
          </header>
        </a>
      );
    } else {
      return null;
    }
  }
}


export default withRouter(Header);
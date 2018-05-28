import React, { Component } from 'react';
import bug from '../../bug.png';
import '../../App.css';
import { withRouter } from 'react-router-dom';
import logo from '../../resources/Firefly_Logo_White.png';

class Header extends Component {

  render() {
    const { location } = this.props;
    if (location.pathname !== '/') {
      return (
        <a href="/">
          <header className="App-header">
            <img className='App-bug' src={bug} alt='firefly zooming on his way.' />
            <img className='header-logo' src={logo} alt='Firefly Pediatrics' />
          </header>
        </a>
      );
    } else {
      return null;
    }
  }
}


export default withRouter(Header);
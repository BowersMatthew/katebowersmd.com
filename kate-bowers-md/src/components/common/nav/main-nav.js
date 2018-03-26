import React, { Component } from 'react';
import NavLink from './nav-link';
import { Pages } from './pages';

class MainNav extends Component {
  pages = Pages;

  render() {
    var links = this.pages.map(page => {
      return <NavLink page={page} className='main-nav' />
    });
    return <div>{ links } </div>
  }
}

export default MainNav;
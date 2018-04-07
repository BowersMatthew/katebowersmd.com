import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavLink from './nav-link';
import { Pages } from './pages';

class MainNav extends Component {
  pages = Pages;

  render() {
    const { location } = this.props;
    const current = location.pathname;
    const links = [];
    this.pages.forEach(page => {
      let className = 'main-nav ';
      if (page.link === current || (page.link === '/resources' && current.match("/resources"))) {
        className = className + 'active-page';
      }
      links.push(<NavLink key={page.id} page={page} className={className} />)
    });
    return <nav>{ links } </nav>
  }
}

export default withRouter(MainNav);
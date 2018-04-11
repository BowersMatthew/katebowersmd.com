import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavLink from './nav-link';
import { Pages } from './pages';
import Hamburger from '../../../resources/hamburger.svg';

class MainNav extends Component {
  pages = Pages;

  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      className: 'main-nav '
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.clicked) {
      this.setState(prevState => ({
        clicked: false, 
        className: 'main-nav '
      }));
    } else {
      this.setState(prevState => ({
        clicked: true, 
        className: 'main-nav responsive-nav-link '
      }));
    }
  }

  render() {
    const { location } = this.props;
    const current = location.pathname;
    const links = [];
    this.pages.forEach(page => {
      let className = this.state.className;
      if (page.link === current || (page.link === '/resources' && current.match("/resources"))) {
        className += 'active-page';
      }
      links.push(<NavLink key={page.id} page={page} className={className} />)
    });
    return (
      <nav>
        <img onClick={this.handleClick} className='hamburger' src={Hamburger} alt='responsive menu button' />
        <div>{links}</div>
      </nav>
    )
  }
}


export default withRouter(MainNav);
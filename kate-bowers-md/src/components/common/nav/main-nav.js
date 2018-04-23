import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
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
    this.setWrapper = this.setWrapper.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
    document.addEventListener('touchstart', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
    document.addEventListener('touchstart', this.handleOutsideClick);
  }

  handleOutsideClick(e) {
    if (this.wrapper && !this.wrapper.contains(e.target) && this.state.clicked) {
      this.handleClick(e);
    }
  }

  setWrapper(node) {
    this.wrapper = node;
  }

  handleClick(e) {
    if (e.nativeEvent instanceof FocusEvent) {
      return;
    } else {
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
      links.push(<Link onClick={this.handleClick} key={page.id} to={page.link} className={className}>{page.name}</Link>)
    });
    return (
      <nav ref={this.setWrapper}>
        <div className='nav-menu-container'>
        <img onClick={this.handleClick} className='hamburger' src={Hamburger} alt='responsive menu button' />
        <div className='nav-link-area'>{links}</div>
        </div>
      </nav>
    )
  }
}


export default withRouter(MainNav);
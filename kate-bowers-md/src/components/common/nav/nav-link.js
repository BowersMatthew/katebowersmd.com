import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export class NavLink extends Component {

    render() {
        let page = this.props.page;
        let name = page.name;
        let link = page.link;
        let cssClass = this.props.className;
        return <Link className={cssClass} to={link}>{name}</Link>
    }
}

export default NavLink;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavLink extends Component {

    render() {
        let page = this.props.page;
        let name = page.name;
        let link = page.link;
        let cssClass = this.props.className;
        console.log(cssClass);
        return <Link className={cssClass} to={link}>{name}</Link>
    }
}

export default NavLink;
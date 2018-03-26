import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavLink extends Component {

    render() {
        let page = this.props.page;
        let name = page.name;
        let id = page.id;
        let link = page.link;
        let cssClass = this.props.class;
        return <Link key={cssClass} className={cssClass} to={link} id={id}>{name}</Link>
    }
}

export default NavLink;
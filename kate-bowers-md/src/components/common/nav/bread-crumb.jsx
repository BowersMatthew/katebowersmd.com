import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class BreadCrumb extends Component {

    paths = [];

    render() {
        const { location } = this.props;
        if ( location.pathname === '/') {
            return null;
        }
        const crumbs = [];
        this.paths = ['/', ...location.pathname.split('/')]
        let i = 0;
        this.paths.forEach(element => {
            if (element !== '') {
                let link = element === '/' ? '' :`/${element}`
                let words = element === '/' ? 'Home/' : `${element.charAt(0).toUpperCase()}${element.substr(1)}/`
                console.log(link);
                crumbs.push(<Link key={i++} to={link}>{words}</Link>)
            }
        });
        return <div className='breadCrumb'>{crumbs}</div>
    }

    componentWillUpdate() {
        this.paths = [];
    }

}

export default withRouter(BreadCrumb);

import React from 'react';
import {Link} from 'react-router-dom';

export const FooterLinks = () => {
    return (
        <nav className="page-footer-nav">
            <Link to='/site-map'>Site Map</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/portal'>Portal</Link>
        </nav>
    )
}

export default FooterLinks

import React from 'react';
import FooterLinks from './nav/footer-links';

export const Footer = () => {
    return (
        <div className="page-footer-image">
            <div className="page-footer-text">Firefly Pediatrics<br/>2937 Fox Trace Ln<br/> Midlothian, VA 23112
            <FooterLinks />
            </div>
        </div>
    )
}

export default Footer;

import React from 'react';
import FooterLinks from './nav/footer-links';

export const Footer = () => {
    return (
        <div>
            <div className="page-footer-image"></div>
            <div className="page-footer-text">Firefly Pediatrics<br />2937 Fox Chase Ln<br /> Midlothian, VA 23112
            <FooterLinks />
            </div>
        </div>
    )
}

export default Footer;

import React from 'react';
import FooterLinks from './nav/footer-links';

export const Footer = () => {
    return (
        <div>
            <div className="page-footer-image"></div>
            <div className="page-footer-text">Firefly Pediatrics<br />2937 Fox Chase Ln<br /> Midlothian, VA 23112<br /><a className="phone" href="tel:804-372-3473" alt="contact by phone 804-372-3473">Phone: (804) 372-3473</a>
            <br/>Fax: (804) 299-4021
            <FooterLinks />
            </div>
        </div>
    )
}

export default Footer;

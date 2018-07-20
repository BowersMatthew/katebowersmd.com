import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <section className='contact'>
            <h1 className='page-heading'>Contact Us</h1>
            <div>
                <a className="phone" href="tel:804-372-3473">Phone: (804) 372-3473</a>
                <p>Fax: (804) 299-4021</p>
                <p>Mon-Fri: 9:00 am to 5:00 pm</p>
                <p>Sat: by appointment</p>
            </div>
            <div className='content'>
                <div className='fuller'>Use this contact form to RSVP for our meet and greet and prenatal party events, please provide your email and a brief message indicating the reason for your contact.</div>
                <form className='fuller' action="https://contactform.prod.with-datafire.io/contact" method="post">
                    <div>
                        <h3 className='contact-label'>E-mail:</h3><br />
                        <input className='contact-email fuller' type="email" name="emailAddress" placeholder="youremail@email.com" />
                    </div>
                    <div>
                        <h3 className='contact-label'>Message:</h3><br />
                        <textarea className='contact-message fuller' name="message" defaultValue='I will be attending the event on __/__/20__'></textarea>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
                <Link to='/contact/privacy'>privacy statement</Link>
            </div>
        </section>
    )
}

export default Contact
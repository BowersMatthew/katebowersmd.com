import React from 'react';

function Contact() {
    return (
        <section className='contact'>
            <h1 className='page-heading'>Contact Us</h1>
            <div className='content'>
                <div className='fuller'>Until the office opens, please provide your email and a brief message to make sure you stay up to date!</div>
                <form className='fuller' action="https://contactform.prod.with-datafire.io/contact" method="post">
                    <div>
                        <h3 className='contact-label'>E-mail:</h3><br />
                        <input className='contact-email fuller' type="email" name="emailAddress" placeholder="youremail@email.com" />
                    </div>
                    <div>
                        <h3 className='contact-label'>Message:</h3><br />
                        <textarea className='contact-message fuller' name="message" defaultValue='Please add me to your email list!'></textarea>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
                <a href="privacy.html">privacy statement</a>
            </div>
        </section>
    )
}

export default Contact
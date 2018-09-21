import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/Firefly_Logo_White_New.png';
import About from '../about/about.jsx';
import FluClinicPic from '../../resources/boo-to-the-flu.jpg'

export class Home extends Component {
    render() {
        return (
            <div>
                <section className="intro">
                    <div className="inner">
                        <div className="content">
                            <img className="home-logo" src={logo} alt="firefly pediatrics logo" />
                        </div>
                    </div>

                </section>
                <section id="announcements">
                    <img src={FluClinicPic} className="PrenatalPartyInvite" alt="Flu Shot Clinic Oct 20 9:00am to 12:00pm RSVP 804-372-3473 or on the portal" />
                    <article className="fuller">
                        <h1 id='title-announcement'>Flu Clinic</h1>
                        <h4>Saturday October 20th</h4>
                        <p>9:00am to 12:00pm</p>
                        <p>Bring your kids, in their Halloween costumes for a quick flu shot!</p>
                        <p>Call us at <a className="phone" href="tel:804-372-3473">(804) 372-3473</a> or schedule your own appointment on the patient <Link to='/portal'>Portal</Link></p>
                    </article>
                </section>
                <br />
                <div id="about">
                <About />
                </div>

            </div>
        )
    }
}

export default Home;
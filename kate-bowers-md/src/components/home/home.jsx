import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/Firefly_Logo_White_New.png';
import About from '../about/about.jsx';
import AnnouncementPic from '../../resources/welcome-woodlake.png'

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
                    <img src={AnnouncementPic} className="PrenatalPartyInvite" alt="Welcome Patients of Woodlake Village Pediatrics. We are excited to announce that Dr. Jennifer Clark will be joining Firefly Pediatrics! Check out our resources page and call us if you have any questions!" />
                    <article className="fuller">
                    <p>Call us at <a className="phone" href="tel:804-372-3473">(804) 372-3473</a> or register on our <Link className="glow" to='/portal'>patient portal</Link></p>
                    <h1> Welcome to Firefly Open House </h1>
                    <h3> Saturday November 17th from 12:00pm to 2:00pm </h3>
                    <p> Join Dr. Clark and Dr. Bowers to meet, tour the office, and enjoy some refreshments and games for the kids!</p>
                        
                    </article>
                </section>
                <br />
                <h1> {String.fromCharCode(160)} </h1>
                <div id="about">
                <About />
                </div>

            </div>
        )
    }
}

export default Home;
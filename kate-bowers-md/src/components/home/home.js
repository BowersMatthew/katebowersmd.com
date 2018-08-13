import React, { Component } from 'react';
import logo from '../../resources/Firefly_Logo_White_New.png';
import About from '../about/about.jsx';

export class Home extends Component {
    render() {
        return (
            <div>
                <section className="intro">
                    <div className="inner">
                        <div className="content">
                            <img className="home-logo" src={logo} alt="firefly pediatrics logo"/>
                        </div> 
                    </div>

                </section>
                <About />
            </div>
        )
    }
}

export default Home;
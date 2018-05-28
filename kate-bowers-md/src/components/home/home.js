import React, { Component } from 'react';
import logo from '../../resources/Firefly_Logo_White.png';

export class Home extends Component {
    render() {
        return (
            <section className='home' alt='Child Releasing Fireflies into Night Sky'>
                <div className='home-title'>
                    <img className='home-logo' alt='Firefly Pediatrics Home Page' src={logo} />
                </div>
            </section>
        )
    }
}

export default Home;
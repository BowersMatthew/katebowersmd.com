import React from 'react';
import PortalImage from '../resources/Portal-Image.png';

export function Portal() {
    return (
        <section className='portal'>
            <a href="https://firefly.patientmedrecords.com">
                <img src={PortalImage} alt="OP Patient Portal"/>
            </a>
        </section>
    )
}

export default Portal

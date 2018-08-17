import React from 'react';
import PortalImage from '../resources/Portal-Image.png';

export function Portal() {
    return (
        <section className='portal newClass'>
            <article className="fuller">
                <h1>Patient Portal</h1>
                <p>Firefly Pediatrics will be using the patient portal for the bulk of patient communications to make your life easier. Using the portal allows secure, convenient communication between you and our office, 24 hours a day, 7 days a week. This type of communication allows us to deliver secure documents at your request, and also allows you to access your child’s medical chart from any portable internet device or the privacy of your home. </p>
                <p> Remember at 10pm that you need a check-up? Just log on a send us an appointment request and we'll see it when our office opens in the morning!</p>
                <br />
                <h3>Click on the Office Practicum icon below to get started!</h3>
                <a href="https://firefly.patientmedrecords.com" target="_blank" rel="noopener noreferrer">
                    <img className='glow' id="portal-image" src={PortalImage} alt="OP Patient Portal" />
                </a>
            </article>
            <br />

                <iframe className="embedded-video" src="https://www.youtube.com/embed/eZG9f3jwiZk" allow="encrypted-media" allowfullscreen></iframe>


            <br />
            <article className="full">
                <p>The portal is designed to allow you to do the following:</p>
                <ul>
                    <li>Request appointments</li>
                    <li>View and print immunization records</li>
                    <li>Request and print completed school, camp, and sports physical forms</li>
                    <li>View lab results</li>
                    <li>Request prescription refills</li>
                    <li>View your child’s health records</li>
                    <li>Send messages to Dr. Bowers and other office staff members</li>
                    <li>Update contacts, address, and other demographic information</li>
                    <li>Review and print care plan</li>
                    <li>View, pay and print billing statements</li>
                </ul>
                <br />
                <p>Note: The patient portal is meant for communicating NON-URGENT medical needs or concerns only. If you are having a medical emergency, call 911. We ask that you allow 24 hours for a response from our office once you send a request via the portal. If you send a message requesting a same day sick visit, we will strive to call you back within 4 hours. For early morning appointments on weekdays, its best to call the office anytime after 8:30 am.</p>
            </article>
        </section>
    )
}

export default Portal

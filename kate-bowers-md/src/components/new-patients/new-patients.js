import React from 'react';
import PrenatalParty from '../../resources/PrenatalParty.png';

const NewPatients = () => {
    return (
        <section className="new-patients">
        <section className="prenatalParty">
        <img src={PrenatalParty} className="PrenatalPartyInvite" alt="September 5th and October 3rd at 5:30pm RSVP 804-372-3473" />
        </section>
            <h1>New Patients</h1>
            <div className="left">
                <h2>Having or Adopting a Baby?</h2>
                <h4>We see newborns at St. Francis Hospital</h4>
                <ul>
                    <li>No matter where you deliver, let the hospital staff know the name of your pediatrician when you check in.</li>
                    <li>Dr. Bowers will see infants born at St. Francis Medical Center in the hospital within 24 hours of delivery.</li>
                    <li>If you deliver at another local hospital, call us and schedule your newborn's first visit as soon as the hospital team tells you what date you and your family will be ready to go home.</li>
                    <li>The hospital should give you an envelope marked "Pediatrician" to bring to our office on your first visit with your new baby</li>
                </ul>
            </div>
            <div className="right">
                <h2>Moving to the Area?</h2>
                <h4>Adopting or Changing Pediatricians?</h4>
                <ul>
                    <li> When our electronic health record is up and running, we will have a link under our "Portal" tab that will allow you to register for an account with Firefly Pediatrics</li>
                    <li>You will be able to request appointments through the portal once you have an account.</li>
                    <li>Instructions for transferring prior records to our office from another provider will be available once our office is open.</li>
                </ul>
            </div>
            <br />
        </section>
    )
}

export default NewPatients;
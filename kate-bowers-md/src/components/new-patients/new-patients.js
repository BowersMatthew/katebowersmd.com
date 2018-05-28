import React from 'react';

const NewPatients = () => {
    return (
        <section className="new-patients">
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
            <div className="content">
                <h3>Insurance</h3>
                <p>We Will Be Participating With The Following Insurances</p>
                <div>
                        <p>Anthem/BCBS (except Health Keepers Plus)</p>
                        <p>Aetna</p>
                        <p>Cigna</p>
                        <p>MAMSI/Optimum Choice</p>
                        <p>Multiplan</p>
                        <p>Optima</p>
                        <p>Preferred Care of Richmond</p>
                        <p>Private Healthcare Systems (PHCS)</p>
                        <p>United Healthcare</p>
                        <p>Southern Health/First Health/Coventry Healthcare</p>
                        <p>Virginia Health Network (VHN)</p>
                </div>
            </div>
        </section>
    )
}

export default NewPatients;
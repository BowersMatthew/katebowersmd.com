import React from 'react';

const NewPatients = () => {
    return (
        <section className="new-patients">
            <h1>New Patients</h1>
            <div className="left">
                <h2>Having or Adopting a Baby?</h2>
                <h4>We see newborns at St. Francis Hospital</h4>
                <ul>
                    <li>No matter where you deliver, let the hospital staff know who your pediatrician is when you check in.</li>
                    <li>If you're at St. Francis, Dr. Bowers will see your newborn in the hospital within 24 hours of delivery.</li>
                    <li>If you deliver at another local hospital, call us and schedule your newborn's first visit as soon as the hospital team tells you what date you and your family will be ready to go home.</li>
                    <li>No matter where you deliver, the hospital should give you an envelope marked "Pediatrician" that we need you to bring to your first visit in our office.</li>
                </ul>
            </div> 
            <div className="right">
                <h2>Moving to the Area?</h2>
                <h4>Adopting or Changing Pediatricians?</h4>
                <ul>
                    <li> Once our electronic health record is up and running, we will have a link under our "Portal" tab that will allow you to register for an account with our office.</li>
                    <li>Once you have an account, you will be able to request appointments through the portal.</li>
                    <li>Instructions regarding transferring prior records to our office from another provider will be provided here once our office is open</li>
                </ul>
        
            </div>
        </section>
    )
}

export default NewPatients;
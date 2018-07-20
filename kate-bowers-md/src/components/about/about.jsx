import React from 'react';
import docPic1 from '../../resources/doc-pic-1.JPG';

const About = () => {
    return (
        <section className="about">
            <h1>About Us</h1>
            <div className="content">
                <div className="left">
                    <h2>Providers and Staff</h2>
                    <h3 className="full">Dr. Bowers</h3>
                    <img src={docPic1} className="staff-about-picture left-inner" alt="Doctor Bowers" />
                    <p className="content-text right-inner">
                        Dr. Kate Bowers grew up in Midlothian, Virginia. She attended Denison University in Ohio, and VCU School of Medicine in Richmond. Dr. Bowers completed her residency training at Cincinnati Children's Hospital Medical Center, one of the nation's top pediatric hospitals. She eventually returned to the Richmond Metro Area to work in a private group practice for several years before starting Firefly Pediatrics. <br/> Dr. Bowers is committed to care of your whole family. She is passionate about reducing antibiotic use and helping reduce parents' stress levels. In addition to her work with Firefly, she serves as president of the Richmond Pediatric Society. <br /> When she’s not at work, Dr. Bowers enjoys board games, reading, and riding bikes with her kids.
                    </p>
                </div>
                <div className="right">
                    <h2>Our Practice</h2>
                    <p className="content-text">
                        Firefly Pediatrics was designed from the ground up, with 21st-century families in mind. Our aim is to provide modern, evidence-based care for children and young adults from birth through college while facilitating easy electronic communication and reducing paper use. Our electronic medical records were designed for pediatric use and allow us to take better, more seamless care of your family.
                    </p>
                    <p className="content-text"> Everyone's time is important. Therefore, most visits at Firefly Pediatrics are run on a schedule. You may call or send us a message through the portal to schedule both sick and well visits. In order for each patient to receive the proper care, we need to know the reason for your appointment. This will allow us to schedule the appropriate amount of time for your visit. Don't worry, we will always strive to have same day sick appointments available. Spacing arrivals appropriately will allow us to reduce your exposure to sickness in the waiting room as well as limit wait times. </p>

                    <div>
                        <h3>Hours of Operation</h3>
                        <p>Mon-Fri: 9:00 am to 5:00 pm</p>
                        <p>Sat: 9:00 am to 11:30 am</p>
                        <p>Walk-in Sick Hours: Mondays only, from 8:00 am to 9:00 am</p>
                    </div>
                    <br />
                    <div>
                        <p className="content-text">Firefly Pediatrics strives to be available for our patients. If you have an urgent medical concern when we are closed, please call our office and follow the prompts to be connected with Dr. Bowers</p>
                    </div>
                    <div>
                        <p className="content-text">The patient portal is meant for communicating NON-URGENT medical needs or concerns only. If you are having a medical emergency, call 911. If you send a message requesting a same day sick visit, we will strive to call you back within 4 hours. For early morning appointments on weekdays, its best to call the office anytime after 8:30 am.</p>
                        <p className="content-text"> To be seen Saturday mornings, send a portal message to Dr. Bowers overnight Friday night into Saturday morning, or call the office after 9:00 am. </p>
                    </div>
                    <br/>
                    <div>
                        <h3>Our Office</h3>
                        <a className="phone" href="tel:804-372-3473">Phone: (804) 372-3473</a>
                        <p>Fax: (804) 299-4021</p>
                        <p>2937 Fox Chase Ln, Midlothian, VA 23112</p>
                        <p className="content-text"><span style={{ fontWeight: 'bold' }}>Directions: </span>Turn as though going to the KinderCare Daycare across Genito from the Exxon. Then take the first left into our parking lot. We are in the second building next to the Ameriprise.</p>
                        <iframe title="foxtrace-office-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.4707859183463!2d-77.65414568469166!3d37.44960487981987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b173d66a655555%3A0x9476a37a32f4f01f!2s2937+Fox+Chase+Ln%2C+Midlothian%2C+VA+23112!5e0!3m2!1sen!2sus!4v1522616694584" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
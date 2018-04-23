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
                    Dr. Kate Bowers grew up in Midlothian, Virginia. She attended Denison University in Ohio, and VCU School of Medicine in Richmond. Dr. Bowers completed her residency training at Cincinnati Children's Hospital Medical Center, one of the nation's top pediatric hospitals. She eventually returned to the Richmond Metro Area to work in a private group practice for several years before starting her own pediatric medical practice. In addition to her work with Firefly, she serves as president of the Richmond Pediatric Society. <br/> When she’s not at work, Dr. Bowers enjoys board games, reading, and riding bikes with her kids.
                    </p>
                </div>
                <div className="right">
                    <h2>Our Practice</h2>
                    <p className="content-text">
                    Firefly Pediatrics was designed from the ground up, with 21st-century families in mind. Our aim is to provide modern, evidence-based care for children and young adults from birth through college while facilitating easy electronic communication and reducing paper use. Our electronic medical records were designed for pediatric use and allow us to take better, more seamless care of your family.
                    </p>
                    <div>
                        <h3>Hours of Operation</h3>
                        <p>Mon-Fri: TBD</p>
                        <p>Sat: TBD</p>
                    </div>
                    <div>
                        <h3>Our Office</h3>
                        <p>2937 Fox Trace Ln, Midlothian, VA 23112</p>
                        <iframe title="foxtrace-office-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.4707859183463!2d-77.65414568469166!3d37.44960487981987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b173d66a655555%3A0x9476a37a32f4f01f!2s2937+Fox+Chase+Ln%2C+Midlothian%2C+VA+23112!5e0!3m2!1sen!2sus!4v1522616694584" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
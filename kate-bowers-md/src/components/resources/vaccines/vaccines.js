import React from 'react';

const Vaccines = () => {
    return (
        <section className="vaccines">
            <h1>Vaccines</h1>
            <div className="content">
                <div className="left">
                    <h2 className="vaccine-heading">Our Vaccine Schedule</h2>
                    <ul>
                        <li>Birth: Hep B</li>
                        <li>2 Months: DTaP, IPV, Hep B, Hib, Prevnar, Rotavirus</li>
                        <li>4 Months: DTaP, IPV, Hib, Prevnar, Rotavirus</li>
                        <li>6 Mothns: DTaP, IPV, Hib, Prevnar, Rotavirus</li>
                        <li>9 Months: Hep B</li>
                        <li>12 Months: MMR, Varicella, Hep A</li>
                        <li>15 Months: Hib, Prevnar</li>
                        <li>18 Months: Hep A, DTaP</li>
                        <li>4-5 Years: DTaP, IPV, MMR, Varicella</li>
                    </ul>
                    <h6>DTaP: Diphtheria, Tetanus, Whooping Cough; IPV: Polio; Hep B: Hepatitis B; Prevnar: Pneumonia</h6>
                    <h6>MMR: Measles, Mumpus, Rubella; Varicella: Chicken Pox; Hep A: Hepatitis A</h6>
                </div>
                <div className="right">
                    <h2 className="vaccine-heading">Vaccine Education</h2>
                    <p className="content-text">Hands down, the best place on the internet to get accurate, scientific information about vaccines is the Children’s Hospital of Philadelphia Vaccine Education Center. It will discuss ingredients, side effects, and everything you could possibly want to know about vaccines. This is your Go-To Resource.
                    </p>
                    <a className="glow" href="http://www.chop.edu/centers-programs/vaccine-education-center">Vaccine Education Center</a>
                </div>
            </div>
        </section>
    )
}

export default Vaccines;
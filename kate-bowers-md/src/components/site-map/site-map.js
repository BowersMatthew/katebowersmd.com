import React from 'react';
import { Link } from 'react-router-dom';
const SiteMap = () => {
    return (
        <section className="site-map">
            <h2 className="page-header">Firefly Pediatrics</h2>
            <h3>Site Map</h3>
            <div className="content">
                <div className="left">
                    <div className="siteMap-list-item">
                        <Link className="siteMap-main-section glow" to="/about">About Us</Link>
                    </div>
                    <div className="siteMap-list-item">
                        <Link className="siteMap-main-section glow" to="/newPatients">New Patients</Link><br />
                    </div>
                    <div className='siteMap-list-item'>
                        <Link className='siteMap-main-section glow' to='/resources/sickChild'>SickChild</Link><br />
                    </div>
                    <div className="siteMap-list-item">
                        <Link className="siteMap-main-section glow" to='/contact'>Contact Us</Link>
                    </div>
                    <div className="siteMap-list-item">
                        <Link className="siteMap-main-section glow" to='/portal'>Portal</Link>
                    </div>
                </div>
                <div className="right">
                    <div className="siteMap-list-item">
                        <Link className="siteMap-main-section glow" to="/resources">Health Resources</Link><br />
                    </div>
                    <div className="siteMap-list-item">
                        <Link className="siteMap-secondary-section glow" to="/resources/vaccines">Vaccines</Link>
                    </div>
                    <div className="siteMap-list-item">
                        <Link className="siteMap-secondary-section glow" to="/resources/parenting">Parenting</Link>
                    </div>
                    <div className="siteMap-list-item">
                        <Link className="siteMap-secondary-section glow" to='/resources/development'>Growth and Development</Link>
                    </div>
                    <div className="siteMap-list-item">
                        <Link className="siteMap-secondary-section glow" to='/resources/sickChild'>Sick Child</Link>
                    </div>
                    <div className="siteMap-list-item">
                        <Link className="siteMap-secondary-section glow" to='/resources/mentalHealth'>Mental Health</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SiteMap
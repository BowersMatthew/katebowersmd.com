import React from 'react';

const SiteMap = () => {
    return (
        <section className="site-map">
            <h2 className="page-header">Firefly Pediatrics</h2>
            <div className="content">
                <div className="left">
                    <div className="siteMap-list-item">
                        <a className="siteMap-main-section glow" href="/about">About Us</a>
                    </div>
                    <div className="siteMap-list-item">
                        <a className="siteMap-main-section glow" href="/newPatients">New Patients</a><br />
                    </div>
                    <div className='siteMap-list-item'>
                        <a className='siteMap-main-section glow' href='/resources/sickChild'>SickChild</a><br />
                    </div>
                </div>
                <div className="right">
                    <div className="siteMap-list-item">
                        <a className="siteMap-main-section glow" href="/resources">Health Resources</a><br />
                    </div>
                    <div className="siteMap-list-item">
                        <a className="siteMap-secondary-section glow" href="/resources/vaccines">Vaccines</a>
                    </div>
                    <div className="siteMap-list-item">
                        <a className="siteMap-secondary-section glow" href="/resources/development">Growth and Development</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SiteMap
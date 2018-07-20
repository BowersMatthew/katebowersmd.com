import React from 'react';
import PrivacyNotice from '../../../resources/forms/privacy-notice.pdf';
import ReleaseOfRecords from '../../../resources/forms/Authorization-for-Release-of-Medical-Information.pdf';

export const PatientForms = () => {
    return (
        <section className='patient-forms newClass'>
            <article className="fuller">
                <h1>Patient Forms</h1>
                <ul>
                <li><a className="glow" href={PrivacyNotice}>Privacy Notice</a></li>
                <li><a className="glow" href={ReleaseOfRecords}>Release of Medical Records</a></li>
                </ul>
            </article>
        </section>
    )
}

export default PatientForms;

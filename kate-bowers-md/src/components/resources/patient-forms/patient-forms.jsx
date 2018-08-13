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
                <li><a className="glow" href='http://blueridgekids.com/wp-content/uploads/2010/02/04VanAssesScaleTeachInfor2.pdf'>Vanderbuilt - Initial Teacher Assessment</a></li>
                <li><a className="glow" href='http://blueridgekids.com/wp-content/uploads/2010/02/03VanAssesScaleParent-Infor.pdf'>Vanderbuilt - Initial Parent Assessment</a></li>
                <li><a className="glow" href='http://blueridgekids.com/wp-content/uploads/2010/02/06VanAssessFollowUpTeachInfor.pdf'>Vanderbuilt - Follow-up Teacher Assessment</a></li>
                <li><a className="glow" href='http://blueridgekids.com/wp-content/uploads/2010/02/05VanFollowUp-Parent-Infor.pdf'>Vanderbuilt - Follow-up Parent Assessment</a></li>
                </ul>
            </article>
        </section>
    )
}

export default PatientForms;

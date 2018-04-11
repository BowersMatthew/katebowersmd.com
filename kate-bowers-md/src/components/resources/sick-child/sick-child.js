import React from 'react';
import apple from '../../../resources/apple.svg';
import google from '../../../resources/google.svg';

function SickChild() {
    return (
        <section className='sick-child'>
            <h1>Sick Child</h1>
            <div className='content'>
                <div className='full'>
                    <p className='content-text'>
                        Despite the best well child care in the world, sometimes our children will get sick. This is not a  time to panic but a time to be informed. The most essential piece of information is understanding when you need to come into the office and when you just need to ride out the storm.
                    </p>
                </div>
                <div className='left'>
                    <h3>KidsDoc Symptom Checker</h3>
                    <p className='fuller'>This app costs $1.99 but I highly recommend it. Its derived from the Barton-Schmitt protocols used by pediatricians and nurses all over the US and Canada. Its a great resource for advice on home care, as well as when to call the doctor and when to call 911.</p><br />
                    <a href='http://itunes.apple.com/us/app/kidsdoc-from-american-academy/id373964536?mt=8'>
                        <img alt='Get it on the App Store' src={apple} />
                    </a>
                    <a href='https://market.android.com/details?id=com.gss.android.KidsDoc&feature=search_result'>
                        <img alt='Get it on Google Play' src={google} />
                    </a>

                    <h3>Poison Control App</h3>
                    <p className='fuller'>There's no substitute for actually calling poison control, but this app is a fantastic resource for a first glance if you're not sure what your child ingested is harmful.</p><br />
                    <a href='https://itunes.apple.com/us/app/id959075009'>
                        <img alt='Get it on the App Store' src={apple} />
                    </a>
                    <a href='https://play.google.com/store/apps/details?id=com.navigationarts.mobile.ncpc'>
                        <img alt='Get it on Google Play' src={google} />
                    </a>
                </div>
                <div className='right'>
                    <h3>Emergency Care</h3>
                    <p className='fuller'>If you do need to take your child to the emergency room, these three hospitals are the only hospitals that staff emergency room physicians that specialisze in pediatric emergency care. It is our preference that if you are driving yourself to an emergency room, that you go to one of these three locations.</p><br />
                    <a className='glow' href='https://goo.gl/maps/UgXonoxhiYt'> St. Mary's Pediatric ER</a><br />
                    <a className='glow' href='https://goo.gl/maps/EXrvy5gkSEJ2'> Chippenham Pediatric ER</a><br />
                    <a className='glow' href='https://goo.gl/maps/jMVQ97N7Cs12'> VCU Pediatric ER</a>
                </div>
            </div>
        </section >
    )
}

export default SickChild

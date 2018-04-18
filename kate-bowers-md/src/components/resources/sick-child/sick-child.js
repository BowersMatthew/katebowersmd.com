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
                        Despite the best childcare in the world, sometimes our children will get sick. This is not a time to panic—it’s a time to be informed. The best thing you can do is to understand when you need to come into the office; and when you just need to ride out the storm.
                    </p>
                </div>
                <div className='left'>
                    <h3>KidsDoc Symptom Checker</h3>
                    <p className='fuller'>This app costs $1.99, and I highly recommend it. KidsDoc was designed using Barton-Schmitt protocols implemented by pediatricians and nurses all over the United States and Canada. It’s a great resource for advice on home care, as well as when to call the doctor or 911.</p><br />
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
                    <p className='fuller'>If you do need to take your child to the emergency room, these three hospitals are the only hospitals that staff emergency-room physicians specializing in pediatric emergency care. It is our preference that if you are driving yourself to an emergency room, that you go to one of these three locations.</p><br />
                    <a className='glow' href='https://goo.gl/maps/UgXonoxhiYt'> St. Mary's Pediatric ER</a><br />
                    <a className='glow' href='https://goo.gl/maps/EXrvy5gkSEJ2'> Chippenham Pediatric ER</a><br />
                    <a className='glow' href='https://goo.gl/maps/jMVQ97N7Cs12'> VCU Pediatric ER</a>
                </div>
            </div>
            <section id='medication' className='content'>
                <div className="fuller">
                    <h3>Medication Dosing</h3>
                    <p className='advice'>Avoid dosing mistakes! Do not buy the "infant" version of acetaminophen or ibuprofen. </p>
                    <p className='advice'>The infant version of acetaminophen (tylenol) is exactly the same medication as the children's version, but they charge you more for a tiny bottle.</p>
                    <p className='advice'> In Motrin's case, the medication concentration is different in the infant's and children's versions</p>
                    <p className='warning'>Do not give children Asprin (BC Powders, Alkaseltzer, and others) due to risk of a fatal liver condition called Reye Syndrome</p>
                </div>
                <Table
                    width={6}
                    title='Acetaminophen(Tylenol) Dosing'
                    headings={[
                        'Weight (lbs)',
                        'Age',
                        'Children\'s Liquid (160 mg / 5 ml)',
                        'Children\'s Soft Chewable (160 mg)',
                        'Rectal Supossitory (variable dose)',
                        'Adult Tablets (325 mg)'
                    ]}
                    data={[
                        ['6-11', '2-3 months', 'Call Your Doctor Before Giving Medicine'],
                        ['12-17', '4-11 months', '2.5 ml', '--', '(1) 80mg', '--'],
                        ['18-23', '9-23 months', '3.75 ml', '--', '(1) 120mg', '--'],
                        ['24-35', '2-3 years', '5 ml', '1 chew tabs', '(2) 80mg', '--'],
                        ['36-47', '4-5 years', '7.5 ml', '1.5 chew tabs', '(2) 120mg', '--'],
                        ['48-59', '6-80 years', '10 ml', '2 chew tabs', '(1) 325mg', '1 tab/cap'],
                        ['60-71', '9-10 years', '12.5 ml', '2.5 chew tabs', '(1) 325mg', '1 tab/cap'],
                        ['72-95', '10-11 years', '15 ml', '3 chew tabs', '(1.5) 325mg', '1.5 tab/cap'],
                        ['over 95', 'over 11 years', '20 ml', '4 chew tabs', '(1) 650mg', '2 tab/cap']
                    ]} />
                <Table
                    width={5}
                    title='Ibuprofen(Advil, Motrin) Dosing'
                    headings={[
                        'Weight (lbs)',
                        'Age',
                        'Children\'s Liquid (100 mg / 5 ml)',
                        'Children\'s Soft Chewable (100 mg)',
                        'Adult Tablets (200 mg)'
                    ]}
                    data={[
                        ['6-11', '2-3 months', 'Do not give Ibuprofen to infants under 6 months old'],
                        ['12-17', '6-11 months', '2.5 ml', '--', '--'],
                        ['18-23', '9-23 months', '3.75 ml', '--', '--'],
                        ['24-35', '2-3 years', '5 ml', '1 chew tabs', '--'],
                        ['36-47', '4-5 years', '7.5 ml', '1.5 chew tabs', '--'],
                        ['48-59', '6-80 years', '10 ml', '2 chew tabs', '1 tab/cap'],
                        ['60-71', '9-10 years', '12.5 ml', '2.5 chew tabs', '1 tab/cap'],
                        ['72-95', '10-11 years', '15 ml', '3 chew tabs', '1.5 tab/cap'],
                        ['over 95', 'over 11 years', '20 ml', '4 chew tabs', '2 tab/cap']
                    ]}
                />
            </section>
        </section >
    )
}

function Table(props) {
    const rows = [];
    props.data.forEach(tr => {
        rows.push(<TableRow width={props.width} tds={tr} />);
    });
    return (
        <table>
            <tr>
                <th colspan={props.width}>{props.title}</th>
            </tr>
            <TableHeading width={props.width} ths={props.headings} />
            {rows}
        </table>
    )
}

function TableHeading(props) {
    const tr = [];
    for (let i = 0; i < props.width; i++) {
        if (i === props.ths.length - 1) {
            tr.push(<th colspan={props.width - props.ths.length}>{props.ths[i]}</th>)
        } else {
            tr.push(<th>{props.ths[i]}</th>)
        }
    }

    return <tr>{tr}</tr>;
}

function TableRow(props) {
    const tr = [];
    for (let i = 0; i < props.width && i < props.tds.length; i++) {
        if (i === props.tds.length - 1) {
            tr.push(<td colspan={props.width - props.tds.length + 1}>{props.tds[i]}</td>);
        } else {
            tr.push(<td>{props.tds[i]}</td>);
        }
    }
    return <tr>{tr}</tr>;
}

export default SickChild

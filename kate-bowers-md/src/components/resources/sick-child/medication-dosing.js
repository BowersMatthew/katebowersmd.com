import React from 'react';

function MedicationDosing() {
    return (
        <section id='medication' className='content'>
            <div className="fuller">
                <h3>Medication Dosing</h3>
                <p className='advice'>Avoid dosing mistakes! Do not buy the "infant" version of acetaminophen or ibuprofen. </p>
                <p className='advice'>The infant version of acetaminophen (tylenol) is exactly the same medication as the children's version, but they charge you more for a tiny bottle.</p>
                <p className='advice'> In Motrin's case, the medication concentration is different in the infant's and children's versions</p><br />
                <p className='warning'>Do not give children Asprin (BC Powders, Alkaseltzer, and others) due to risk of a fatal liver condition called Reye Syndrome</p>
            </div>
            <div id='table-warning'>Turn your phone sideways to view dosing guide.</div>
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
                ]} /> <br />
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
            /><br/><br/>
        </section>
    )
}

function Table(props) {
    const rows = [];
    props.data.forEach(tr => {
        rows.push(<TableRow key={tr[0]} width={props.width} tds={tr} />);
    });
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={props.width}>{props.title}</th>
                </tr>
                <TableHeading width={props.width} ths={props.headings} />
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

function TableHeading(props) {
    const tr = [];
    for (let i = 0; i < props.width; i++) {
        if (i === props.ths.length - 1) {
            tr.push(<th key={i} colSpan={props.width - props.ths.length}>{props.ths[i]}</th>)
        } else {
            tr.push(<th key={i}>{props.ths[i]}</th>)
        }
    }

    return <tr>{tr}</tr>;
}

function TableRow(props) {
    const tr = [];
    for (let i = 0; i < props.width && i < props.tds.length; i++) {
        if (i === props.tds.length - 1) {
            tr.push(<td key={i} colSpan={props.width - props.tds.length + 1}>{props.tds[i]}</td>);
        } else {
            tr.push(<td key={i}>{props.tds[i]}</td>);
        }
    }
    return <tr>{tr}</tr>;
}

export default MedicationDosing;
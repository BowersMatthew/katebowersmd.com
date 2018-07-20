import React from 'react';
import ListButton from '../common/list-button';
import { Link } from 'react-router-dom';

const Resources = () => {
    return (
        <section className='health-resources'>
            <h1 className='page-header'>Health Resources</h1>
            <div className='content'>
                <div className='fuller'>
                    <p className='content-text center-align'>Sometimes it's hard to know where to go on the internet for good information. These links are great jumping-off points for different health topics.</p>
                </div>
                <div className='left'>
                    <div className='resource-list'>
                        <ListButton alt='vaccines' target='/resources/vaccines' /><Link to='/resources/vaccines' className='list-button-label glow' page='/resources/vaccines'>Vaccines</Link>
                    </div>
                    <div className='resource-list'>
                        <ListButton alt='parenting' target='/resources/parenting' /><Link to='/resources/parenting' className='list-button-label glow'
                            page='/resources/parenting'>Parenting</Link>
                    </div>
                    <div className='resource-list'>
                        <ListButton alt='development' target='/resources/development' /><Link to='/resources/development' className='list-button-label glow'
                            page='/resources/development'>Growth & Development</Link>
                    </div>
                </div>
                <div className='right'>
                    <div className='resource-list'>
                        <ListButton alt='Sick Child' target='/resources/sickChild' /><Link to='/resources/sickChild' className='list-button-label glow' page='/resources/sickChild'>Sick Child</Link>
                    </div>
                    <div className='resource-list'>
                        <ListButton alt='mental health' target='/resources/mentalHealth' /><Link to='/resources/mentalHealth' className='list-button-label glow' page='/resources/mentalHealth'>Mental Health</Link>
                    </div>
                    <div className='resource-list'>
                        <ListButton alt='Patient Forms' target='/resources/patient-forms' /><Link to='/resources/patient-forms' className='list-button-label glow' page='/resources/patient-forms'>Patient Forms</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resources;

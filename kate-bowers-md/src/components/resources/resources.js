import React from 'react';
import ListButton from '../common/list-button';
import { Link } from 'react-router-dom';

const Resources = () => {
    return (
        <section className='health-resources'>
            <h1 className='page-header'>Health Resources</h1>
            <div className='content'>
            <p className='fuller'>Sometimes its hard to know where to go on the internet for good information. These links won't give you an exhaustive list, by any means, but are great jumping off points for different health topics from websites that I generally trust. </p>
                <div className='left'>
                    <div className='resource-list'>
                        <ListButton target='/resources/vaccines' /><Link to='/resources/vaccines' className='list-button-label glow' page='/resources/vaccines'>Vaccines</Link>
                    </div>
                    <div className='resource-list'>
                        <ListButton target='/resources/parenting' /><Link to='/resources/parenting' className='list-button-label glow'
                            page='/resources/parenting'>Parenting</Link>
                    </div>
                    <div className='resource-list'>
                        <ListButton target='/resources/development' /><Link to='/resources/development' className='list-button-label glow'
                            page='/resources/development'>Growth and Development</Link>
                    </div>
                </div>
                <div className='right'>
                    <div className='resource-list'>
                        <ListButton target='/resources/sickChild' /><Link to='/resources/sickChild' className='list-button-label glow' page='/resources/sickChild'>Sick Child</Link>
                    </div>
                    <div className='resource-list'>
                        <ListButton target='/resources/mentalHealth' /><Link to='/resources/mentalHealth' className='list-button-label glow' page='/resources/mentalHealth'>Mental Health</Link>
                    </div>
                    <div className='resource-list'>
                        <ListButton /><p className='list-button-label glow'>Other Resources</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resources;

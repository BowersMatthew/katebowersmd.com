import React from 'react';
import ListButton from '../common/list-button';
import { Link } from 'react-router-dom';

const Resources = () => {
    return (
        <section className='content'>
            <br />

            <div className='left'>
                <div className='resource-list'>
                    <ListButton /><Link to='/resources/vaccines' className='list-button-label' page='/resources/vaccines'>Vaccines</Link>
                </div>
                <div className='resource-list'>
                    <ListButton /><p className='list-button-label'>Parenting</p>
                </div>
                <div className='resource-list'>
                    <ListButton /><p className='list-button-label'>Growth and Development</p>
                </div>
            </div>
            <div className='right'>
                <div className='resource-list'>
                    <ListButton /><p className='list-button-label'>When Your Child is Ill</p>
                </div>
                <div className='resource-list'>
                    <ListButton /><p className='list-button-label'>Mental Health</p>
                </div>
                <div className='resource-list'>
                    <ListButton /><p className='list-button-label'>Other Resources</p>
                </div>
            </div>
        </section>
    );
}

export default Resources;

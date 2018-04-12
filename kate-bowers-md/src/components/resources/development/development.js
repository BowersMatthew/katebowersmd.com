import React from 'react';
import apple from '../../../resources/apple.svg';
import google from '../../../resources/google.svg';

const Development = () => {
    return (
        <section className="development">
            <h1 className="page-header">Growth and Development</h1>
            <div className="content">
                <p className='content-text full'>Monitoring the growth and development of children is an enormous part of a pediatrician's job. It's one of the main reasons we see kids so frequently in the first three years of life! Take a peak at some of my favorite resources for tracking development. Keep in mind that skills develop over a range of time. If you have concerns that your child is not doing something he or she should be, check in with us. </p>
            </div>
            <div className="left">
                <h3>CDC Milestone Tracker</h3>
                <p className='full'>The CDC developed a great, free app just for tracking development</p><br />
                <a href='https://itunes.apple.com/us/app/cdcs-milestone-tracker/id1232718688?mt=8'>
                    <img alt='Get it on the App Store' src={apple} />
                </a>
                <a href='https://play.google.com/store/apps/details?id=gov.cdc.ncbddd.actearly.milestones&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                    <img alt='Get it on Google Play' src={google} />
                </a>
            </div>
            <div className="right">
                <h3>Growth and Development Websites</h3>
                <ul>
                    <li><a className='glow' href='https://www.cdc.gov/ncbddd/actearly/milestones/index.html'>CDC Milestones</a></li>
                    <li><a className='glow' href='https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx'>Infant Ages and Stages</a></li>
                    <li><a className='glow' href='https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx'>Toddler Ages and Stages</a></li>
                    <li><a className='glow' href='https://www.healthychildren.org/English/ages-stages/preschool/Pages/default.aspx'>Preschool Ages and Stages</a></li>
                    <li><a className='glow' href='https://www.healthychildren.org/English/ages-stages/gradeschool/Pages/default.aspx'>Gradeschool Ages and Stages</a></li>
                    <li><a className='glow' href='https://www.healthychildren.org/English/ages-stages/teen/Pages/default.aspx'>Teen Ages and Stages</a></li>
                    <li><a className='glow' href='https://www.healthychildren.org/English/ages-stages/young-adult/Pages/default.aspx'>Young Adult Ages and Stages</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Development

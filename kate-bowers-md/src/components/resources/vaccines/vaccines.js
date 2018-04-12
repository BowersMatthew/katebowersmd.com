import React from 'react';
import UnorderedLinkList from '../../common/link-list/unordered-link-list';

const Vaccines = () => {
    const birthList = ['Hepatitis B',];
    const twoMonth = [
        'Diphtheria, Tetanus, and Pertussis',
        'Polio',
        'Haemophilus Influenzae Type B',
        'Hepatitis B',
        'Pneumococcal Conjugate',
        'Rotavirus',
    ]
    const fourMonth = [
        'Diphtheria, Tetanus, and Pertussis',
        'Polio',
        'Haemophilus Influenzae Type B',
        'Pneumococcal Conjugate',
        'Rotavirus',
    ]
    const sixMonth = [
        'Diphtheria, Tetanus, and Pertussis',
        'Polio',
        'Haemophilus Influenzae Type B',
        'Pneumococcal Conjugate',
        'Rotavirus',
        'Yearly Influenza*',
    ]
    const nineMonth = [
        'Hepatitis B',
    ]

    const oneYear = [
        'Measles, Mumps and Rubella',
        'Varicella (Chicken Pox)',
        'Hepatitis A',
    ]

    const fifteenMonth = [
        'Diphtheria, Tetanus, and Pertussis',
        'Polio',
        'Haemophilus Influenzae Type B',
        'Pneumococcal Conjugate',
    ]

    const eighteenMonth = [
        'Hepatitis A',
    ]

    const fourYear = [
        'Diphtheria, Tetanus, and Pertussis',
        'Polio',
        'Measles, Mumps and Rubella',
        'Varicella (Chicken Pox)',
    ]

    const tenYear = [
        'Diphtheria, Tetanus, and Pertussis',
        'Human Papillomavirus',
    ]

    const elevenYear = [
        'Meningococcal Meningitis Type A, C, W, and Y',
        'Human Papillomavirus',
    ]

    const sixteenYear = [
        'Meningococcal Meningitis Type A, C, W, and Y',
    ]

    const adds = {
        MeningococcalMeningitisTypeACWandY: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/mening.pdf',
        DiphtheriaTetanusandPertussis: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/dtap.pdf',
        Polio: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/ipv.pdf',
        HaemophilusInfluenzaeTypeB: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/hib.pdf',
        HepatitisB: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/hep-b.pdf',
        PneumococcalConjugate: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/pcv13.pdf',
        Rotavirus: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/rotavirus.pdf',
        YearlyInfluenza: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/flu.pdf',
        MeaslesMumpsandRubella: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/mmr.pdf',
        VaricellaChickenPox: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/varicella.pdf',
        HepatitisA: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/hep-a.pdf',
        HumanPapillomavirus: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/hpv.pdf',
    }
    return (
        <section className="vaccines">
            <h1>Vaccines</h1>
            <div className="content">
                <div className="full">
                    <h2 className="vaccine-heading">Vaccine Education</h2>
                    <p className="content-text">Hands down, the best place on the internet to get accurate, scientific information about vaccines is the Vaccine Education Center at Children's Hospital of Philadelphia. The site discusses ingredients, side effects, and everything you could possibly want to know about vaccines.
                    </p>
                    <a className="glow" 
                        href="http://www.chop.edu/centers-programs/vaccine-education-center" 
                        target='_blank'
                        rel='noopener noreferrer'>
                            Vaccine Education Center
                    </a>
                </div>
                <h2>Our Vaccine Schedule</h2>
                <div><iframe src="https://www.cdc.gov/vaccines/schedules/easy-to-read/child-shell-easyread.html" width="65%" height="1000px" frameborder="0" scrolling="auto" title="Easy-to-Read Schedule for Children, Birth through 6 Years">Easy-to-Read Schedule for Children, Birth through 6 Years</iframe></div>
                <div className="left middle">
                    <UnorderedLinkList adds={adds} head='Birth' elements={birthList} />
                    <UnorderedLinkList adds={adds} head='2 Month' elements={twoMonth} />
                    <UnorderedLinkList adds={adds} head='4 Month' elements={fourMonth} />
                    <UnorderedLinkList adds={adds} head='6 Month' elements={sixMonth} />
                    <UnorderedLinkList adds={adds} head='9 Month' elements={nineMonth} />
                </div>
                <div className="right middle">
                    <UnorderedLinkList adds={adds} head='12 Month' elements={oneYear} />
                    <UnorderedLinkList adds={adds} head='15 Month' elements={fifteenMonth} />
                    <UnorderedLinkList adds={adds} head='18 Month' elements={eighteenMonth} />
                    <UnorderedLinkList adds={adds} head='4-5 Years' elements={fourYear} />
                    <UnorderedLinkList adds={adds} head='10-11 Years' elements={tenYear} />
                    <UnorderedLinkList adds={adds} head='11-12 Years' elements={elevenYear} />
                    <UnorderedLinkList adds={adds} head='16 Years' elements={sixteenYear} />
                </div>
            </div>
        </section>
    )
}

export default Vaccines;
import React from 'react';
import UnorderedLinkedList from '../../common/link-list/unordered-link-list';

function MentalHealth() {
    const postpartum = [
        'PostpartumVA',
        'The Atlantic - Postpartum Depression Can Happen to Any Parent',
        'APA - What is Postpartum Depression and Anxiety'
    ]

    const anxiety = [
        'Hey Sigmund - The Heroic Warrior',
        'Hey Sigmund - A Metaphor to Put You in Their Shoes',
        'Hey Sigmund - How to Turn Avoidance into Brave Behavior',
    ]

    const behavioralOutbursts = [
        'Hey Sigmund - When a Child is out of Control',
    ]

    const adhd = [
        'CHADD - National Resource on ADHD',
        'ADDitudeMag - Inside the ADHD Mind',
        'AACAP - ADHD Resource Center',
        '(Book) Smart But Scattered',
    ]

    const adds = {
        BookSmartButScattered: 'https://www.amazon.com/Smart-but-Scattered-Revolutionary-Executive/dp/1593854455/ref=sr_1_1?ie=UTF8&qid=1523292095&sr=8-1&keywords=smart+but+scattered',
        AACAPADHDResourceCenter: 'https://www.aacap.org/aacap/Families_and_Youth/Resource_Centers/ADHD_Resource_Center/Home.aspx',
        ADDitudeMagInsidetheADHDMind: 'https://www.additudemag.com/',
        CHADDNationalResourceonADHD: 'http://www.chadd.org/',
        APAWhatisPostpartumDepressionandAnxiety: 'http://www.apa.org/pi/women/resources/reports/postpartum-depression.aspx',
        TheAtlanticPostpartumDepressionCanHappentoAnyParent: 'https://www.theatlantic.com/health/archive/2014/04/postpartum-depression-can-happen-to-any-parent/360918/',
        PostpartumVA: 'postpartumva.org',
        HeySigmundTheHeroicWarrior: 'https://www.heysigmund.com/anxiety-in-kids/',
        HeySigmundAMetaphortoPutYouinTheirShoes: 'https://www.heysigmund.com/anxiety-children-metaphor-put-shoes-right-beside/',
        HeySigmundWhenaChildisoutofControl: 'https://www.heysigmund.com/when-a-child-is-out-of-control/',
        HeySigmundHowtoTurnAvoidanceintoBraveBehavior: 'https://www.heysigmund.com/anxiety-in-kids-and-teens-avoidance-brave-behaviour/',
    }


    return (
        <section className='mental-health'>
            <h1>Mental Health</h1>
            <div className='content'>
                <div className='full'>
                    <p className='content-text'>
                        Mental Health is such an important part of child development, and your own mental health is a huge part of how you parent. If you have any concerns about your child's mental health, please bring it up with your pediatrician - and don't wait until your next visit. However, here are some decent resources you can use to jump start conversations with your children regarding mental health. Start talking about emotions when your kids are young so they have a verbal toolkit with which to process feelings as they get older.
                    </p>
                </div>
                <div className='left'>
                    <UnorderedLinkedList adds={adds} head='Postpartum Blues and Depression' elements={postpartum} />
                    <UnorderedLinkedList adds={adds} head='Anxiety' elements={anxiety} />
                    <UnorderedLinkedList adds={adds} head='Behavioral Outbursts' elements={behavioralOutbursts} />
                    <UnorderedLinkedList adds={adds} head='ADHD' elements={adhd} />
                </div>
                <div className='right'>
                    <h3>More Resources</h3>
                </div>
            </div>
        </section >
    )
}

export default MentalHealth

import React from 'react';
import UnorderedLinkedList from '../../common/link-list/unordered-link-list';

const Parenting = () => {
    const infantSleep = [
        'Healthy Children - Swaddling',
        'Healthy Children - Home Apnea Monitors',
        'Janet Lansbury - Subtleties of Sleep',
        'Big Sky Lullaby - Successful Sleep Schedule',
        '(Book) The 90-Minute Baby Sleep Program',
    ];

    const infantFeeding = [
        'Healthy Children - Nursing Checklist',
        'AAP - Starting Solids',
        'Aha Parenting - Feeding Your Baby',
        'Seattle Children’s - Eating Tips',
        'Baby Led Weanning',
    ]

    const toddlerFeeding = [
        'Healthy Children - Toddler Serving Sizes',
        'Aha Parenting - Feeding Your Todder',
        'Janet Lansbury - Parenting to Prevent Childhood Obesity'
    ]

    const tantrum = [
        'Zero to Three - Todder Tantrums 101',
        'KidsHealth - Tantrums',
        'ChildMind - Why Do Kids Have Tantrums',
    ]

    const pottyTraining = [
        'Janet Lansbury - Kids Do Not Need Toilet Training',
        'AAP - Toilet Training Resources',
        'AAP - Bedwetting',
    ]

    const generalParenting = [
        'Child Development Institute',
        'Center on the Social and Emotional Foundations for Early Learning - Booklist',
        '(Book) The Science of Mom - A Research Based Guide to Your Baby’s First Year',
        '(Book) How to Talk So Kids Will Listen and Listen So Kids Will Talk',
        '(Book) Peaceful Parent, Happy Kids - How to Stop Yelling and Start Connecting',
        '(Book) 1-2-3 Magic',
        '(Book) Unconditional Parenting',
        '(Book) Your Child’s Health - The Parents’ One-Stop Reference Guide'
    ]

    const bodiesandReproduction = [
        'Girlology',
        'Girlology - The Talk with Elementary Aged Child',
        'Geek Dad - Top 10 Sex Ed Books',
        '(Book) Robie Harris Books',
        '(Book) The Care and Keeping of You - The Body Book for Younger Girls',
        '(Book) The Care and Keeping of You 2 - The Body Book for Older Girls'
    ]

    const schoolAccomodations = [
        'US Dept of Education - Guide to the IEP',
        'Great Schools - A parent’s guide to Section 504 in public schools',
        'VLAS - IEP’s and 504 Plans',
        'VA Family Special Education Connection',
        'Wright’s Law - Special Education Law and Disability Advocacy',
    
    ]

    const bullying = [
        'The Bully Project',
        'StopBullying.gov',
    ]

    // links
    // const adds ={noSpaceName: 'https://...'}
    const adds = {
        ChildDevelopmentInstitute: 'https://childdevelopmentinfo.com/about/',
        StopBullyinggov: 'https://www.stopbullying.gov/',
        TheBullyProject:'http://www.thebullyproject.com/parents',
        GeekDadTop10SexEdBooks: 'https://geekdad.com/2014/02/top-10-sex-ed-books/',
        Girlology: 'https://www.girlology.com/',
        GirlologyTheTalkwithElementaryAgedChild: 'https://www.girlology.com/talking-about-sex-your-elementary-aged-child',
        BookTheCareandKeepingofYou2TheBodyBookforOlderGirls: 'https://www.amazon.com/Care-Keeping-You-Older-Girls/dp/1609580427/ref=sr_1_2?ie=UTF8&qid=1523290210&sr=8-2&keywords=the+keeping+and+caring+of+you',
        BookTheCareandKeepingofYouTheBodyBookforYoungerGirls: 'https://www.amazon.com/Care-Keeping-You-Younger-Revised/dp/1609580834/ref=sr_1_1?ie=UTF8&qid=1523289998&sr=8-1&keywords=the+care+and+keeping+of+your+body',
        WrightsLawSpecialEducationLawandDisabilityAdvocacy: 'http://www.wrightslaw.com/',
        BookRobieHarrisBooks: 'https://www.amazon.com/Robie-H.-Harris/e/B001IGR3DW',
        VAFamilySpecialEducationConnection: 'https://vafamilysped.org/',
        VLASIEPsand504Plans: 'http://vlas.org/special-programs/ask-advocating-for-special-kids/special-education/pre-school-through-12th-grade/ieps-and-504-plans/',
        GreatSchoolsAparentsguidetoSection504inpublicschools: 'https://www.greatschools.org/gk/articles/section-504-2/',
        USDeptofEducationGuidetotheIEP: 'https://www2.ed.gov/parents/needs/speced/iepguide/index.html',
        BabyLedWeaning: 'http://www.babyledweaning.com/',
        JanetLansburyParentingtoPreventChildhoodObesity: 'Janet Lansbury - Parenting to Prevent Childhood Obesity',
        SeattleChildrensEatingTips: 'http://pulse.seattlechildrens.org/healthy-eating-tips-for-babies-and-toddlers/',
        BookTheScienceofMomAResearchBasedGuidetoYourBabysFirstYear: 'https://www.amazon.com/Science-Mom-Research-Based-Guide-Babys/dp/1421417324/ref=sr_1_1?s=books&ie=UTF8&qid=1523240050&sr=1-1&keywords=science+mom',
        BookThe90MinuteBabySleepProgram: 'https://www.amazon.com/90-Minute-Baby-Sleep-Program-Natural-ebook/dp/B0037BVKJ4',
        CenterontheSocialandEmotionalFoundationsforEarlyLearningBooklist: 'http://csefel.vanderbilt.edu/documents/booklist.pdf',
        BookHowtoTalkSoKidsWillListenandListenSoKidsWillTalk: 'https://www.amazon.com/How-Talk-Kids-Will-Listen/dp/1451663889/ref=sr_1_1?ie=UTF8&qid=1476615950&sr=8-1&keywords=how+to+talk+so+kids+will+listen+%26+listen+so+kids+will+talk',
        BookPeacefulParentHappyKidsHowtoStopYellingandStartConnecting: 'https://www.amazon.com/Peaceful-Parent-Happy-Kids-Connecting-ebook/dp/B008JHXOOK/ref=sr_1_1?s=books&ie=UTF8&qid=1476617303&sr=1-1&keywords=peaceful+parent+happy+kids',
        Book123Magic: 'https://www.amazon.com/1-2-3-Magic-Effective-Discipline-Children/dp/1889140430/ref=sr_1_2?s=books&ie=UTF8&qid=1476702944&sr=1-2&keywords=123+magic',
        BookUnconditionalParenting: 'https://www.amazon.com/Unconditional-Parenting-Moving-Rewards-Punishments-ebook/dp/B000GCFD72/ref=sr_1_1?s=books&ie=UTF8&qid=1476616609&sr=1-1&keywords=unconditional+parenting+by+alfie+kohn',
        BookYourChildsHealthTheParentsOneStopReferenceGuide: 'https://www.amazon.com/Your-Childs-Health-Emergencies-Development/dp/0553383698/ref=sr_1_1?s=books&ie=UTF8&qid=1523236802&sr=1-1&keywords=barton+schmitt',
        HealthyChildrenSwaddling: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Good-Night-Sleep-Tight.aspx',
        HealthyChildrenHomeApneaMonitors:   'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Home-Apnea-Monitors-for-SIDs.aspx',
        JanetLansburySubtletiesofSleep: 'http://www.janetlansbury.com/2014/02/the-subtleties-of-baby-sleep-4-important-things-to-know/',
        BigSkyLullabySuccessfulSleepSchedule: 'http://bigskylullaby.com/2016/10/06/baby-sleep-schedule/',
        HealthyChildrenNursingChecklist: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/A-Breastfeeding-Checklist-Are-You-Nursing-Correctly.aspx',
        HealthyChildrenToddlerServingSizes:'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Serving-Sizes-for-Toddlers.aspx',
        ZerotoThreeTodderTantrums101: 'https://www.zerotothree.org/resources/1790-toddler-tantrums-101-why-they-happen-and-what-you-can-do',
        KidsHealthTantrums: 'https://kidshealth.org/en/parents/tantrums.html',
        ChildMindWhyDoKidsHaveTantrums: 'https://childmind.org/article/why-do-kids-have-tantrums-and-meltdowns/',
        JanetLansburyKidsDoNotNeedToiletTraining: 'http://www.janetlansbury.com/2014/08/3-reasons-kids-dont-need-toilet-training-and-what-to-do-instead/',
        AAPToiletTrainingResources: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/default.aspx',
        AAPBedwetting: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/Bedwetting.aspx',
        AAPStartingSolids: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Switching-To-Solid-Foods.aspx',
        AhaParentingFeedingYourBaby: 'http://www.ahaparenting.com/ages-stages/babies/feeding-your-baby',
        AhaParentingFeedingYourTodder: 'http://www.ahaparenting.com/ages-stages/toddlers/feeding-toddler',
    }
    return (
        <section className="parenting">
            <h1 className="page-header">Parenting</h1>
            <div className="content">
            <p className="fuller">There is no one-size-fits-all advice when it comes to parenting. What works for other people's children may or may not work for yours. Kids, and their parents, in every family have different personalities. <br/>Getting a variety of ideas from different perspectives can be very helpful. Certain ideologies and practices will fit your family well for a few seasons or during a certain developmental stage, but will then need to be modified or replaced as time goes on. The real challenge of parenthood is learning to evolve and be adaptable. <br/>Please, try not to agonize over doing it "right"! Some days you'll feel like a boss, some days like a failure. This still happens when you're a pediatrician and a parent. Families are messy, but you'll find your way. Here are resources for you to delve into with an open mind.
   </p>
            </div>
            <div className='fuller'>
            <div className="left">
                <UnorderedLinkedList adds={adds} head='General Parenting' elements={generalParenting} />
                <UnorderedLinkedList adds={adds} head='Infant Sleep' elements={infantSleep} />
                <UnorderedLinkedList adds={adds} head='Infant Feeding' elements={infantFeeding} />
                <UnorderedLinkedList adds={adds} head='Toddler Feeding' elements={toddlerFeeding} />
                <UnorderedLinkedList adds={adds} head='Tantrums' elements={tantrum} />
                <UnorderedLinkedList adds={adds} head='Potty Training' elements={pottyTraining} />
            </div>
            <div className="right">
            <UnorderedLinkedList adds={adds} head='Bullying' elements={bullying} />
                <UnorderedLinkedList adds={adds} head='Bodies and Reproduction' elements={bodiesandReproduction} />
                <UnorderedLinkedList adds={adds} head='School Accomodations' elements={schoolAccomodations} />            
                <h3>Divorce/Separation</h3>
            </div>
            </div>
        </section>
    )
}

export default Parenting
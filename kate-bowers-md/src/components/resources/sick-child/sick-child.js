import React from 'react';
import UnorderedLinkedList from '../../common/link-list/unordered-link-list';
import apple from '../../../resources/apple.svg';
import google from '../../../resources/google.svg';
import { Link } from 'react-router-dom';

function SickChild() {
    const lice = [
        'CCPS - Lice Guideline',
        'AAP - Head Lice'
    ];

    const asthma = [
        'AAP - What is Asthma?',
        '(Video)AAP-Using Spacer with Mask',
        '(Video)AAP-Using Spacer without Mask',
        'AAP-Avoiding Asthma Triggers',
    ];

    const allergies = [
        'AAP - Seasonal Allergies',
        'AAP - Peanut Allergy and The Latest Research',
        'KidsWithFoodAllergies.org',
        'AAAI - Food Allergies',
        'AAAI - Choosing Wisely Best Practices',
        'ACAAI - Skin Testing',
        'GI Kids - Cows Milk Protein Allergy',
        'GI Kids - Celiac Disease',
        'Celiac Foundation - What Can I Eat?'
    ];

    const acne = [
        'AAD - Acne and Rosacea',
        'AAP - What Causes Acne?',
        'AAP - Teens and Acne',
    ];

    const constipation = [
        '(Video)The Poo and You',
        'UpToDate - Constipation',
        'Bristol Stool Chart',
    ];

    const colds = [
        'AAP - Cold Medicines or Home Remedies',
        'UpToDate - The Common Cold in Children',
        'How Long Do Cold Symptoms Last?',
    ];

    const concussion = [
        'AAP - Concussion',
        'Nationwide Children’s - Parent’s Guide to Concussion',
    ];

    const croup = [
        'KidMed - What Parents Need to Know About Croup',
    ];

    const diaper = [
        'Nationwide Children’s - Diaper Rash',
    ];

    const diarrhea = [
        'UpToDate - Diarrhea in Children',
    ];

    const drowning = [
        'AAP - Water Safety',
        'A Reality Check on Dry Drowning',
    ];

    const eczema = [
        'AAP - Eczema',
        'AAD - Caring for a Child with Eczema',
    ];

    const ear = [
        'AAP - Ear Infection Information',
        'Kids Health - Swimmer’s Ear',
        'CDC - Swimmer’s Ear'
    ];

    const flu = [
        'CHOP - A Look at Influenza',
        'CHOP - Influenza (Flu) in Children',
        'Why It’s Still Worth Getting a Flu Shot',
    ];

    const HFM = [
        'Kids Health - Hand, Foot and Mouth Disease',
        'AAP - Hand, Foot and Mouth Disease',
    ]

    const hives = [
        'AAP - Hives',
        'AAAAI - Hives and Angioedema',
        'ACAAI - Hives',
    ];

    const intoeing = [
        'AAP - Pigeon Toes',
    ];

    const jaundice = [
        'AAP - Newborn Jaundice',
        'Kids Health - Newborn Jaundice',
    ];

    const lyme = [
        'CHOP - Lyme Disease'
    ]

    const period = [
        'Kids Health - Period Cramps',
        'Kids Health - Common Period Problems',
    ];

    const molluscum = [
        'AAP - Molluscum Contagiosum',
        'AAD - Molluscum',
    ];

    const conjunctivitis = [
        'AAP - Pink Eye',
        'Kids Health - Pink Eye',
    ];

    const poisonIvy = [
        'AAD - Poison Ivy, Oak, and Sumac',
    ];

    const reflux = [
        'GI Kids - Reflux in Infants',
        'AAP - Not all Infant Reflux is Disease'
    ];

    const ringworm = [
        'AAD - Ringworm',
        'AAP - Ringworm',
    ];

    const sinus = [
        'Kids Health - Sinusitis',
        'AAO - Pediatric Sinusitis',
    ];

    const throat = [
        'UpToDate - Sore Throat in Children',
        'AAP - When a Sore Throat is a More Serious Infection'
    ];

    const strep = [
        'Kids Health - Strep Throat',
        'AAP - Scarlet Fever',
        'CDC - Worried Your Sore Throat May Be Step?',
        ' Chad Hayes MD - The Reason We Treat Strep',
    ];

    const RSV = [
        'AAP - RSV',
        'AAP - Bronchiolitis',
        'CCHMC - RSV',
        'CHOP - RSV',
        'Sterile Saline Nasal Rinse',
        'Chad Hayes MD - RSV When Less is More'
    ];

    const thrush = [
        'Kids Health - Thrush'
    ];

    const umbilicus = [
        'AAP - Umbilical Cord Care'
    ];

    const UTI = [
        'Kids Health - UTI'
    ]

    const adds = {
        CHOPLymeDisease: 'http://www.chop.edu/conditions-diseases/lyme-disease-children',
        KidsHealthUTI: 'https://kidshealth.org/en/parents/urinary.html',
        AAPUmbilicalCordCare: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Umbilical-Cord-Care.aspx',
        ChadHayesMDTheReasonWeTreatStrep: 'http://www.chadhayesmd.com/infection-confessions-2-strep-throat/',
        KidsHealthThrush: 'https://kidshealth.org/en/parents/thrush.html',
        ChadHayesMDRSVWhenLessisMore: 'http://www.chadhayesmd.com/rsv/',
        SterileSalineNasalRinse: 'https://www.youtube.com/watch?v=eQ6zOV_fQZI',
        CHOPRSV: 'http://www.chop.edu/conditions-diseases/respiratory-syncytial-virus-rsv',
        CCHMCRSV: 'https://www.cincinnatichildrens.org/health/r/RSV-infection',
        AAPBronchiolitis: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Bronchiolitis.aspx',
        AAPRSV: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Respiratory-Syncytial-Virus-RSV.aspx',
        CDCWorriedYourSoreThroatMayBeStep: 'https://www.cdc.gov/features/strepthroat/index.html',
        AAPScarletFever: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Scarlet-Fever.aspx',
        KidsHealthStrepThroat: 'http://kidshealth.org/en/parents/strep-throat.html',
        AAPWhenaSoreThroatisaMoreSeriousInfection: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/When-a-Sore-Thoat-is-a-More-Serious-Infection.aspx',
        UpToDateSoreThroatinChildren: 'https://www.uptodate.com/contents/sore-throat-in-children-beyond-the-basics',
        AAOPediatricSinusitis: 'http://www.entnet.org/content/pediatric-sinusitis',
        KidsHealthSinusitis: 'https://kidshealth.org/en/parents/sinusitis.html',
        AAPRingworm: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Ringworm.aspx',
        AADRingworm: 'https://www.aad.org/public/diseases/contagious-skin-diseases/ringworm',
        CeliacFoundationWhatCanIEat: 'https://celiac.org/live-gluten-free/glutenfreediet/food-options/',
        AAPNotallInfantRefluxisDisease: 'https://www.healthychildren.org/English/news/Pages/Not-All-Reflux-in-Infants-is-Disease-According-to-AAP.aspx',
        GIKidsRefluxinInfants: 'https://www.gikids.org/content/22/en/refulx-gerd/infants',
        AADPoisonIvyOakandSumac: 'https://www.aad.org/public/diseases/itchy-skin/poison-ivy-oak-and-sumac#tips',
        KidsHealthPinkEye: 'https://kidshealth.org/en/parents/conjunctivitis.html',
        AAPPinkEye: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/PinkEye-Conjunctivitis.aspx',
        AADMolluscum:'https://www.aad.org/public/diseases/contagious-skin-diseases/molluscum-contagiosum',
        AAPMolluscumContagiosum: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Molluscum-Contagiosum.aspx',
        KidsHealthCommonPeriodProblems: 'https://kidshealth.org/en/teens/menstrual-problems.html',
        KidsHealthPeriodCramps: 'https://kidshealth.org/en/kids/period-cramps.html',
        GIKidsCeliacDisease: 'https://www.gikids.org/content/3/en/celiac-disease',
        GIKidsCowsMilkProteinAllergy: 'https://www.gikids.org/content/103/en/cows-milk-protein-intolerance',
        AAPHeadLice: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Signs-of-Lice.aspx',
        KidsHealthNewbornJaundice: 'http://kidshealth.org/en/parents/jaundice.html',
        AAPNewbornJaundice: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Jaundice.aspx',
        AAPPigeonToes: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Pigeon-Toes-Intoeing.aspx',
        ACAAIHives: 'https://acaai.org/allergies/types/skin-allergies/hives-urticaria',
        AAAAIHivesandAngioedema: 'https://www.aaaai.org/conditions-and-treatments/library/allergy-library/hives-angioedema',
        AAPHives: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Hives-Symptoms.aspx',
        AAPHandFootandMouthDisease: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Hand-Foot-and-Mouth-Disease.aspx',
        KidsHealthHandFootandMouthDisease: 'https://kidshealth.org/en/parents/hfm.html',
        WhyItsStillWorthGettingaFluShot: 'https://www.nytimes.com/2018/01/11/upshot/flu-shot-risks-benefits-strain.html',
        CHOPInfluenzaFluinChildren: 'http://www.chop.edu/conditions-diseases/influenza-flu-children',
        CHOPALookatInfluenza: 'http://www.chop.edu/centers-programs/vaccine-education-center/vaccine-details/influenza-vaccine',
        CDCSwimmersEar: 'https://www.cdc.gov/healthywater/pdf/swimming/resources/pseudomonas-factsheet_swimmers_ear.pdf',
        KidsHealthSwimmersEar: 'https://kidshealth.org/en/parents/swimmer-ear.html',
        AAPEarInfectionInformation: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Ear-Infection-Information.aspx',
        AADCaringforaChildwithEczema: 'https://www.aad.org/public/diseases/eczema/eczema-resource-center',
        AAPEczema: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx',
        ARealityCheckonDryDrowning: 'https://dockatevaccineblog.wordpress.com/2017/06/18/dry-drowning-which-is-not-a-thing/',
        AAPWaterSafety: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Water-Safety-And-Young-Children.aspx',
        UpToDateDiarrheainChildren: 'https://www.uptodate.com/contents/acute-diarrhea-in-children-beyond-the-basics',
        NationwideChildrensDiaperRash: 'https://www.nationwidechildrens.org/family-resources-education/health-wellness-and-safety-resources/helping-hands/diaper-rash',
        KidMedWhatParentsNeedtoKnowAboutCroup: 'https://www.kidmedva.com/kidmed-ical-journal/croup/',
        NationwideChildrensParentsGuidetoConcussion: 'https://www.nationwidechildrens.org/specialties/concussion-clinic/concussion-toolkit/a-parents-guide-to-concussions',
        AAPConcussion: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/sports-injuries/Pages/Concussions.aspx',
        HowLongDoColdSymptomsLast: 'http://advancedped.blogspot.com/2014/02/how-long-do-cold-symptoms-last.html',
        UpToDateTheCommonColdinChildren: 'https://www.uptodate.com/contents/the-common-cold-in-children-beyond-the-basics',
        AAPColdMedicinesorHomeRemedies: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Coughs-and-Colds-Medicines-or-Home-Remedies.aspx',
        BristolStoolChart: 'https://en.wikipedia.org/wiki/Bristol_stool_scale#/media/File:BristolStoolChart.png',
        UpToDateConstipation: 'https://www.uptodate.com/contents/constipation-in-infants-and-children-beyond-the-basics#H1',
        VideoThePooandYou: 'https://www.youtube.com/watch?time_continue=1&v=SgBj7Mc_4sc',
        AAPTeensandAcne: 'https://www.healthychildren.org/English/ages-stages/teen/Pages/Teens-and-Acne.aspx',
        AAPWhatCausesAcne: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/What-Causes-Acne.aspx',
        AADAcneandRosacea: 'https://www.aad.org/public/diseases/acne-and-rosacea',
        ACAAISkinTesting: 'https://acaai.org/allergies/treatment/allergy-testing/skin-test',
        AAAIChoosingWiselyBestPractices: 'http://www.choosingwisely.org/societies/american-academy-of-allergy-asthma-immunology/',
        AAAIFoodAllergies: 'http://www.aaaai.org/conditions-and-treatments/allergies/food-allergies',
        KidsWithFoodAllergiesorg: 'KidsWithFoodAllergies.org',
        AAPPeanutAllergyandTheLatestResearch: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/Peanut-Allergies-What-You-Should-Know-About-the-Latest-Research.aspx',
        AAPSeasonalAllergies: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/Seasonal-Allergies-in-Children.aspx',
        AAPAvoidingAsthmaTriggers: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/Asthma-Triggers-and-What-to-do-About-Them.aspx',
        VideoAAPUsingSpacerwithoutMask: 'https://vimeo.com/13007804',
        VideoAAPUsingSpacerwithMask: 'https://vimeo.com/13011550',
        AAPWhatisAsthma: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/What-is-Asthma.aspx',
        CCPSLiceGuideline: 'http://mychesterfieldschools.com/download/guidelines-for-pediculosis-head-lice/?wpdmdl=13400&refresh=5ae12367d15a81524704103',
    }

    return (
        <section className='sick-child'>
            <h1>Sick Child</h1>
            <div className='content'>
                <div className='full'>
                    <p className='content-text'>
                        Despite the best childcare in the world, sometimes our children will get sick. This is not a time to panic—it’s a time to be informed. The best thing you can do is to understand when you need to come into the office; and when you just need to ride out the storm.
                    </p>
                </div>
                <div className='left middle'>
                    <h3>KidsDoc Symptom Checker</h3>
                    <p className='fuller'>This app costs $1.99, and I highly recommend it. KidsDoc was designed using the Barton-Schmitt protocols used by pediatricians and nurses all over the United States and Canada. It’s a great resource for advice on home care, when to call the doctor or and when to call 911.</p><br />
                    <a href='http://itunes.apple.com/us/app/kidsdoc-from-american-academy/id373964536?mt=8'>
                        <img alt='Get it on the App Store' src={apple} />
                    </a>
                    <a href='https://market.android.com/details?id=com.gss.android.KidsDoc&feature=search_result'>
                        <img alt='Get it on Google Play' src={google} />
                    </a>

                    <h3>Poison Control App</h3>
                    <p className='fuller'>There's no substitute for actually calling poison control, but this app is a fantastic resource for a first glance.</p><br />
                    <a href='https://itunes.apple.com/us/app/id959075009'>
                        <img alt='Get it on the App Store' src={apple} />
                    </a>
                    <a href='https://play.google.com/store/apps/details?id=com.navigationarts.mobile.ncpc'>
                        <img alt='Get it on Google Play' src={google} />
                    </a>
                </div>
                <div className='right middle'>
                    <h3>Emergency Care</h3>
                    <p className='fuller'>If you do need to take your child to the emergency room, these three hospitals are the only hospitals that staff emergency-room physicians specializing in pediatric emergency care. It is our preference that if you are driving yourself to an emergency room, that you go to one of these three locations.</p><br />
                    <a className='glow' href='https://goo.gl/maps/UgXonoxhiYt'> St. Mary's Pediatric ER</a><br />
                    <a className='glow' href='https://goo.gl/maps/EXrvy5gkSEJ2'> Chippenham Pediatric ER</a><br />
                    <a className='glow' href='https://goo.gl/maps/jMVQ97N7Cs12'> VCU Pediatric ER</a>
                    <h3>Medication Dosing</h3>
                    <Link className='glow' to='/resources/sickChild/medicationDosing'>Click Here for Medication Dosing Tables</Link>
                    <h3>Fever Facts</h3>
                    <a className='glow' href='https://www.kckidsdoc.com/kc-kids-doc/5-fabulous-fever-facts-fighting-fever-fobia-part-12'>5 Fabulous Fever Facts</a><br />
                    <a className='glow' href='https://www.kckidsdoc.com/kc-kids-doc/fever-faqs-fighting-fever-fobia-part-22'>Fighting Fever Phobia</a><br />
                </div>
            </div>
            <section className='sick-resources'>
            <h1>Common Illnesses A to Z</h1>
                <div className="left">
                    <UnorderedLinkedList adds={adds} head='Acne' elements={acne} />
                    <UnorderedLinkedList adds={adds} head='Allergies' elements={allergies} />
                    <UnorderedLinkedList adds={adds} head='Asthma' elements={asthma} />
                    <UnorderedLinkedList adds={adds} head='Colds' elements={colds} />
                    <UnorderedLinkedList adds={adds} head='Concussion' elements={concussion} />
                    <UnorderedLinkedList adds={adds} head='Constipation' elements={constipation} />
                    <UnorderedLinkedList adds={adds} head='Croup' elements={croup} />
                    <UnorderedLinkedList adds={adds} head='Diaper Rash' elements={diaper} />
                    <UnorderedLinkedList adds={adds} head='Diarrhea' elements={diarrhea} />
                    <UnorderedLinkedList adds={adds} head='Drowning' elements={drowning} />
                    <UnorderedLinkedList adds={adds} head='Ear Infections' elements={ear} />
                    <UnorderedLinkedList adds={adds} head='Eczema' elements={eczema} />
                    <UnorderedLinkedList adds={adds} head='Flu' elements={flu} />
                    <UnorderedLinkedList adds={adds} head='Hand-Foot-Mouth' elements={HFM} />
                    <UnorderedLinkedList adds={adds} head='Hives' elements={hives} />
                </div>
                <div className='right'>
                    <UnorderedLinkedList adds={adds} head='Intoeing' elements={intoeing} />
                    <UnorderedLinkedList adds={adds} head='Jaundice' elements={jaundice} />
                    <UnorderedLinkedList adds={adds} head='Lice' elements={lice} />
                    <UnorderedLinkedList adds={adds} head='Lyme Disease' elements={lyme} />
                    <UnorderedLinkedList adds={adds} head='Molluscum' elements={molluscum} />
                    <UnorderedLinkedList adds={adds} head='Periods' elements={period} />
                    <UnorderedLinkedList adds={adds} head='Pink Eye' elements={conjunctivitis} />
                    <UnorderedLinkedList adds={adds} head='Poison Ivy' elements={poisonIvy} />
                    <UnorderedLinkedList adds={adds} head='Reflux' elements={reflux} />
                    <UnorderedLinkedList adds={adds} head='Ringworm' elements={ringworm} />
                    <UnorderedLinkedList adds={adds} head='Sinusitis' elements={sinus} />
                    <UnorderedLinkedList adds={adds} head='Sore Throat (Pharyngitis)' elements={throat} />
                    <UnorderedLinkedList adds={adds} head='Strep Throat' elements={strep} />
                    <UnorderedLinkedList adds={adds} head='RSV / Bronchiolitis' elements={RSV} />
                    <UnorderedLinkedList adds={adds} head='Thrush' elements={thrush} />
                    <UnorderedLinkedList adds={adds} head='Umbilical Cord' elements={umbilicus} />
                    <UnorderedLinkedList adds={adds} head='Urinary Tract Infections' elements={UTI} />
                </div>
            </section>
        </section>
    )
}

export default SickChild

import { faGraduationCap, faPlaneDeparture, faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';

import { faJava, faPython, faRProject, faJs} from '@fortawesome/free-brands-svg-icons';

const experience = [
    {   id: 0,
        addClass: "vertical-timeline-element--education",
        company: 'Self Learning',
        position: 'JS, NodeJS, ReactJS, MongoDB',
        date: 'Ongoing',
        location: null,
        desc: 'Developing my skillset',
        icon: faJs
    },
    {   id: 1,
        addClass: "vertical-timeline-element--education",
        company: 'University of California, Davis',
        position: 'Data Visualization with Tableau Specialization',
        date: 'JUL 2022',
        location: null,
        desc: 'Tableau, asking the right questions and Data Analytics',
        icon: faGraduationCap
    },
    {   id: 2,
        addClass: "vertical-timeline-element--education",
        company: 'Duke University, University of California San Diego',
        position: 'Object Oriented Programming in Java Specialization',
        date: 'JUL 2022',
        location: null,
        desc: 'Learning Java, eclipse, refreshing UML and OOP',
        icon: faJava
    },
    {   id: 3,
        addClass: "vertical-timeline-element--education",
        company: 'IBM',
        position: 'IBM - Data Science Professional Certificate',
        date: 'MAR 2022',
        location: null,
        desc: 'ML models, Python, numpy, pandas and statistics',
        icon: faPython
    },
    {   id: 4,
        addClass: "vertical-timeline-element--education",
        company: 'Google',
        position: 'Google IT Automation with Python',
        date: 'MAR 2022',
        location: null,
        desc: "Expanding my Python knowledge. Linux, bash, puppet and automation.",
        icon: faPython
    },
    {   id: 5,
        addClass: "vertical-timeline-element--education",
        company: 'Google',
        position: 'Google Data Analytics - Professional Certificate',
        date: 'FEB 2022',
        location: null,
        desc: "Data Analytics, R and Python",
        icon: faRProject
    },
    {
        id: 16,
        addClass: "vertical-timeline-element--work",
        company: 'Hong Kong Airlines LTD.',
        position: 'Captain Airbus A320',
        date: 'AUG 2018-SEP 2021',
        location: 'Hong Kong',
        desc: 'Captain Upgrade.',
        icon: faPlaneDeparture
    },
    {
        id: 17,
        addClass: "vertical-timeline-element--work",
        company: 'Hong Kong Airlines LTD.',
        position: 'First Officer Airbus A350',
        date: 'DEC 2017-AUG 2018',
        location: 'Hong Kong',
        desc: 'First Peruvian to fly the A350!!!!',
        icon: faPlaneDeparture
    },
    {
        id: 18,
        addClass: "vertical-timeline-element--work",
        company: 'Hong Kong Airlines LTD.',
        position: 'First Officer Airbus A330',
        date: 'SEP 2016-DEC 2017',
        location: 'Hong Kong',
        desc: 'First wide-body aircraft. Mixed fleet operations, Freight and passengers',
        icon: faPlaneDeparture    
    },
    {
        id: 19,
        addClass: "vertical-timeline-element--work",
        company: 'Hong Kong Airlines LTD.',
        position: 'First Officer Airbus A320',
        date: 'NOV 2015-SEP 2016',
        location: 'Hong Kong',
        desc: 'First Peruvian to obtain a full Hong Kong ATPL',
        icon: faPlaneDeparture
    },
    {
        id: 20,
        addClass: "vertical-timeline-element--work",
        company: 'LATAM Peru SAC.',
        position: 'First Officer Airbus A320',
        date: 'MAY 2010-AUG 2013',
        location: 'Lima, Peru',
        desc: 'First professional pilot job. Hight Altitude operations.',
        icon: faPlaneDeparture
    },
    {
        id: 23,
        addClass: "vertical-timeline-element--education",
        company: 'Learning to Fly',
        position: 'Private and Commercial Pilot Licence',
        date: '2009-2010',
        location: 'Santa Cruz, Bolivia',
        desc: 'Fixed wing, Single and Multi-engine flight training',
        icon: faPlaneDeparture
    },
    {
        id: 21,
        addClass: "vertical-timeline-element--work",
        company: 'BCTS Consulting',
        position: 'Business Analyst, ERP Consultant',
        date: 'JUN 2006-APR 2008',
        location: 'Lima, Peru',
        desc: 'Hired after my internship. My first job!!!',
        icon: faMagnifyingGlassChart
    },
    {
        id: 22,
        addClass: "vertical-timeline-element--education",
        company: 'Universidad de Lima',
        position: 'B.S. Systems Engineering',
        date: 'MAR 2002-APR 2007',
        location: 'Lima, Peru',
        desc: '',
        icon: faGraduationCap
    },




    
];

export default experience;
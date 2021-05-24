const currentPosition = 'Senior Software Engineer (Lead)';

const profile = {
    firstname: 'Brendon',
    lastname: 'Co',
    title: currentPosition,
    workExperience: [
        {
            id: 'scb',
            dateFrom: '2018-08',
            isCurrent: true,
            company: 'STANDARD CHARTERED BANK',
            companyLogo:
                'https://media-exp1.licdn.com/dms/image/C4E0BAQFoPfk3ioQH9Q/company-logo_100_100/0/1621243713352?e=1629936000&v=beta&t=C4tcOX-JR_IK_I4rEKFeFOf90-9nlyTtSHFdJQbZCJA',
            position: currentPosition,
            country: 'SINGAPORE',
            description: `Hands on Web application development. Implement proof of concept on different technology into
            existing product.Setup development code base via Webpack, React, ES6, LODASH, CSS in JS, Zuul and
            library dependency. Design and architect Micro Frontend. Build UI library from scratch.Apply Test
            Driven Development using test framework such as Jasmine, testing library and Jest. Critique application
            wireframes and designs. Accessing, determine the work effort and estimate the necessary time to
            completion.`
        },
        {
            id: 'cxa',
            dateFrom: '2015-08',
            dateTo: '2018-07',
            company: 'CXA Group',
            companyLogo:
                'https://media-exp1.licdn.com/dms/image/C560BAQHRgH_AxtVw0w/company-logo_100_100/0/1519889997915?e=1629936000&v=beta&t=rSSDLgaJhrzAjkYVBOk7rlAbqx9yW_IQj5UtmnEydsA',
            position: 'Senior Web Developer (Lead)',
            country: 'SINGAPORE',
            description: `Hands on Web application development. Implement proof of concept on different technology into
            existing product. Setup development code base via Webpack, React, ES6, LODASH, SASS, NODEJS,
            GULP, GRUNT and library dependency. Integrate RechartJS for statistics. Apply Test Driven Development
            using test framework such as Jasmine, and Jest. Critique application wireframes and designs. Accessing,
            determine the work effort and estimate the necessary time to completion.`
        },
        {
            id: 'jll',
            dateFrom: '2014-10',
            dateTo: '2015-07',
            company: 'Jones Lang LaSalle',
            companyLogo:
                'https://media-exp1.licdn.com/dms/image/C4D0BAQEmcAw4Qz9iLA/company-logo_100_100/0/1614656716530?e=1629936000&v=beta&t=qsJupPUtLTiNONh9OyU5GHhsaouF91ciVYuH0JuPjqg',
            position: 'Assistant Manager',
            country: 'SINGAPORE',
            description: `Fullstack software engineer. Create Restful API using C# and web application using AngularJS, Bootstrap,
            HTML5 and CSS3. Engage and manage vendor. Coordinate with resources and deliver solutions to
            clients. Implement proof of concept on different technology into existing product. Authoring software
            designs and architectures for technical projects. Report status of the project to management with
            highlights on tasks completed, in-progress, and any potential threats to the project deliverables with
            recommendations on actions to be taken.`
        },
        {
            id: 'moodys',
            dateFrom: '2012-12',
            dateTo: '2014-06',
            company: "Moody's Analytics",
            companyLogo:
                'https://media-exp1.licdn.com/dms/image/C4E0BAQGdcL8iIvLIrA/company-logo_100_100/0/1593615303104?e=1629936000&v=beta&t=_6aLMQFYfMxBqHgqfFoQCh6_xDLg8jfBbKn4BEtjnV8',
            position: 'Senior Software Developer',
            country: 'SINGAPORE',
            description: `Fullstack software engineer. Create Restful API using JAVA. Create mobile hybrid application using
            AngularJS, HTML5, GRUNTJS, SASS and CSS3 (for iOS iPad). Integrate fusionchart for dashboard
            statistic. Apply test driven development using Jasmine, Karma and Protractor. Provide proof of concept
            to client requirements. Work on tasks of diverse scope and complexity.`
        },
        {
            id: 'ncs',
            dateFrom: '2010-06',
            dateTo: '2012-11',
            company: 'NCS',
            companyLogo:
                'https://media-exp1.licdn.com/dms/image/C560BAQGH0BoTK8mSdg/company-logo_100_100/0/1596694558705?e=1629936000&v=beta&t=W6DuRwRFXjiLhT4jUwbO9k8zggBgYLHQHI6vqjtdgE8',
            position: 'Senior Application Consultant (Lead)',
            country: 'SINGAPORE',
            description: `Fullstack software engineer. Create Restful API using C#.NET. Create SmartTV web application using
            UNDERSCORE, HTML5, GRUNTJS, SASS, NODEJS and CSS3 (for SmartTV Samsung/LG). Built snapshot
            image of website API and display to SmartTV/Mobile devices for content rights. Develop 3Dijoy remote
            control pairing utility. Develop USB dongle detection on Philips remote. Develop remote control battery
            level check utility. Develop HTTP Live streaming. Engage and manage vendor.`
        },
        {
            id: 'comverse',
            dateFrom: '2009-03',
            dateTo: '2010-05',
            company: 'Comverse Inc.',
            companyLogo:
                'https://media-exp1.licdn.com/dms/image/C4E0BAQHsM9rNpYSvqA/company-logo_100_100/0/1618195749776?e=1629936000&v=beta&t=9GF16GaUg70eR5ajLQAYG_9m6J6ENQSdgqpjm9AtWX0',
            position: 'Project Consultant',
            country: 'SINGAPORE',
            description: `Fullstack software engineer. Create Restful API using JAVA. Apply test driven development using JUnit.
            Develop, authoring software designs and architectures for technical projects. Extensive review on
            current workflows and seek to implement appropriate technology as solutions to achieve the result.
            Install and configure Oracle DB to support internationalization.`
        }
    ],
    contact: [
        {
            id: 'email',
            icon: '/email.svg',
            value: 'co.brendon@yahoo.com'
        },
        {
            id: 'github',
            icon: '/github-logo.png',
            value: 'https://github.com/brendonco'
        },
        {
            id: 'twitter',
            icon: '/twitter-logo.svg',
            value: 'https://twitter.com/brendonco2000'
        },
        {
            id: 'linkedin',
            icon: '/linkedin.svg',
            value: 'https://www.linkedin.com/in/brendon-co-5195924/'
        }
    ],
    articles: [
        {
            id: 'how-to-write',
            title: 'How to Include ReactJS App in Docker Container',
            value: 'https://medium.com/@marvels0098/how-to-include-reactjs-app-in-docker-container-2e73068ce2d5'
        }
    ],
    skills: [
        { id: 'reactjs', label: 'ReactJS, redux, react-router', rate: 80, color: '#6a1b9a' },
        { id: 'nextjs', label: 'Next.js', rate: 80, color: '#ef6c00' },
        { id: 'rxjs', label: 'RxJS', rate: 70, color: '#00695c' },
        { id: 'js', label: 'JavaScript, HTML5, CSS3', rate: 80, color: '#699' },
        { id: 'style', label: 'SASS, Styled-Components', rate: 80, color: '#939196' },
        { id: 'grid', label: 'AG-GRID', rate: 75, color: '#484848' },
        { id: 'testing', label: 'Jest, testing-library, Jasmine', rate: 75, color: '#fc642d' },
        { id: 'mobile', label: 'PhoneGap, react-native', rate: 70, color: '#ff5a5f' }
    ],
    books: [
        {
            id: 'jtmfe',
            title: 'Journey to Micro Frontends',
            url: 'https://leanpub.com/journeytomfe',
            img: 'https://d2sofvawe08yqg.cloudfront.net/journeytomfe/hero2x?1591187579'
        },
        {
            id: 'hwrt-f-js',
            title: 'How to Write Real-time Features in JavaScript',
            url: 'https://www.amazon.com/BEANS-Bootstrap-ExpressJS-Socket-IO-How-JavaScript/dp/1502541149',
            img: 'https://images-na.ssl-images-amazon.com/images/I/51Wou0YKNfL._SX331_BO1,204,203,200_.jpg'
        }
    ],
    travels: {
        title: 'BUSINESS TRIP AND INTERNATIONAL EXPERIENCE',
        markers: [
            {
                markerOffset: 15,
                name: 'Augsburg, Germany',
                coordinates: [10.900750303960981, 48.455250360134734]
            },
            {
                markerOffset: -30,
                name: 'Taipei, Taiwan',
                coordinates: [121.61258149123522, 25.27770072684692]
            },
            {
                markerOffset: 15,
                name: 'Cebu, Philippines',
                coordinates: [123.86144261394908, 10.81136792821119]
            },
            {
                markerOffset: 15,
                name: 'Shenzhen, China',
                coordinates: [114.0807537609972, 23.056469088377284]
            },
            {
                markerOffset: 15,
                name: 'Singapore',
                coordinates: [103.74551407051558, 1.9287016314791159]
            }
        ]
    }
};

export default profile;

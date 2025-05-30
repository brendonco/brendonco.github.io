const currentPosition = 'Development Manager';

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
            companyLogo: '/logos/scb.jpeg',
            position: currentPosition,
            country: 'SINGAPORE',
            description: `Hands on Web application development. Implement proof of concept on different technology into existing product. Setup development code base via Webpack, React, Typescript, ES6, LODASH, CSS in JS, PostgreSQL, JAVA Springboot, OpenShift, Azure, Zuul and library dependency. Leveraging Github Copilot and ChatGPT for code development and quality.

            Implement Model Context Server (MCP) server PostgreSQL integration for Agentic AI such as Github Copilot.

            Design and architect Micro Frontend. Build UI library from scratch. Apply Test Driven Development using test framework such as Jasmine, testing library and Jest. Critique application wireframes and designs. Accessing, determine the work effort and estimate the necessary time to completion.

            Lead fullstack and collaboration with QA engineers.

            Lead the quarterly/half-yearly planning and build a smooth execution plan with the team for securing the delivery of product and engineering road.

            Lead the design, development, and maintenance of critical systems including front-end and backend.

            Ensure scalable, secure, and maintainable architecture across teams.

            Guide and mentor engineers, fostering growth and knowledge sharing.

            Promote best practices in code quality, observability, and security. Manage cross-team dependencies and drive collaboration across functions.

            Influence strategic technical decisions, aligning with business objectives. Drive process improvements for greater efficiency and impact.`
        },
        {
            id: 'cxa',
            dateFrom: '2015-08',
            dateTo: '2018-07',
            company: 'CXA Group',
            companyLogo: '/logos/cxa.png',
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
            companyLogo: '/logos/jll.jpeg',
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
            companyLogo: '/logos/ma.jpeg',
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
            companyLogo: '/logos/ncs.jpeg',
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
            companyLogo: '/logos/m.jpeg',
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
        { id: 'reactjs', label: 'ReactJS, redux, react-router', rate: 85, color: '#03DAC6' },
        { id: 'nextjs', label: 'Next.js', rate: 83, color: '#ef6c00' },
        { id: 'rxjs', label: 'RxJS', rate: 75, color: '#00695c' },
        { id: 'js', label: 'JavaScript, HTML5, CSS3', rate: 85, color: '#699' },
        { id: 'style', label: 'SASS, Styled-Components', rate: 85, color: '#939196' },
        { id: 'grid', label: 'AG-GRID', rate: 80, color: '#6200EE' },
        { id: 'testing', label: 'Jest, testing-library, Jasmine', rate: 80, color: '#fc642d' },
        { id: 'mobile', label: 'PhoneGap, react-native', rate: 70, color: '#ff5a5f' }
    ],
    books: [
        {
            id: 'dmfacur',
            title: 'Develop My First AI Copilot using React',
            url: 'https://leanpub.com/developmyfirstaicopilotusingreact',
            img: 'https://d2sofvawe08yqg.cloudfront.net/developmyfirstaicopilotusingreact/s_hero2x?1733295625'
        },
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
    certificates: [
        {
            id: 'google-cloud',
            name: 'Google Cloud Digital Leader',
            img: '/logos/google-cloud-ai.png',
            url: 'http://cdn.qwiklabs.com/VF6eQ1bV8SfqKBpu8AVD%2F4G93sg9wJQ0wWe9CTc%2FJ%2F4%3D'
        },
        {
            id: 'databricks',
            name: 'Generative AI Fundamentals',
            img: '/logos/databricks-gen-ai.png',
            url: 'https://credentials.databricks.com/85cc8dfe-e95d-4bfe-b31e-a5a1686f1fd1#acc.HlBGL2E5'
        }
    ],
    talk: {
        title: 'Talks',
        data: [
            {
                id: 'react-berlin-2022',
                title: 'Introduction To Library Marketplace (React Berlin 2022)',
                url: 'https://portal.gitnation.org/contents/introduction-to-library-market-place'
            },
            {
                id: 'react-summit-2023',
                title: 'Introduction To Library Marketplace (React Summit Amsterdam 2023)',
                url: 'https://portal.gitnation.org/contents/introduction-to-library-marketplace'
            }
        ]
    },
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
            },
            {
                markerOffset: 15,
                name: 'UK',
                coordinates: [51.4999947297, -0.11672184386]
            }
        ]
    }
};

export default profile;

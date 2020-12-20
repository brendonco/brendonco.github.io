import { config } from "process";

const profile = {
    firstname: 'Brendon',
    lastname: 'Co',
    title: 'Senior Software Engineer (Lead)',
    contact: [{
        icon: '/email.svg',
        value: 'co.brendon@yahoo.com'
    },{
        icon: '/github-logo.png',
        value: 'https://github.com/brendonco'
    }, {
        icon: '/twitter-logo.svg',
        value: 'https://twitter.com/brendonco2000',
    }],
    skills: ['ReactJS', 'Next.js', 'RxJS', 'JavaScript', 'Styled-Components', 'AG-GRID'],
    articles: [{
        title: 'How to Include ReactJS App in Docker Container',
        url: 'https://medium.com/@marvels0098/how-to-include-reactjs-app-in-docker-container-2e73068ce2d5'
    }],
    books: [{
        title: 'Journey to Micro Frontends',
        url: 'https://leanpub.com/journeytomfe'
    }]
};

export default profile;
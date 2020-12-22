import { config } from "process";

const profile = {
    firstname: 'Brendon',
    lastname: 'Co',
    title: 'Senior Software Engineer (Lead)',
    contact: [{
        id: 'email',
        icon: '/email.svg',
        value: 'co.brendon@yahoo.com'
    },{
        id: 'github',
        icon: '/github-logo.png',
        value: 'https://github.com/brendonco'
    }, {
        id: 'twitter',
        icon: '/twitter-logo.svg',
        value: 'https://twitter.com/brendonco2000',
    }],
    skills: ['ReactJS', 'Next.js', 'RxJS', 'JavaScript', 'Styled-Components', 'AG-GRID'],
    articles: [{
        title: 'How to Include ReactJS App in Docker Container',
        url: 'https://medium.com/@marvels0098/how-to-include-reactjs-app-in-docker-container-2e73068ce2d5'
    }],
    books: [{
        id: 'jtmfe',
        title: 'Journey to Micro Frontends',
        url: 'https://leanpub.com/journeytomfe',
        img: 'https://d2sofvawe08yqg.cloudfront.net/journeytomfe/hero2x?1591187579'
    }, {
        id: 'hwrt-f-js',
        title: 'How to Write Real-time Features in JavaScript',
        url: 'https://www.amazon.com/BEANS-Bootstrap-ExpressJS-Socket-IO-How-JavaScript/dp/1502541149',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51Wou0YKNfL._SX331_BO1,204,203,200_.jpg',
    }],
    travels: {
        title: 'INTERNATIONAL EXPERIENCE',
        markers: [{
            markerOffset: 15,
            name: 'Augsburg, Germany',
            coordinates: [10.900750303960981, 48.455250360134734]
        },{
            markerOffset: -30,
            name: 'Taipei, Taiwan',
            coordinates: [121.61258149123522, 25.27770072684692]
        },
        {
            markerOffset: 15,
            name: 'Cebu, Philippines',
            coordinates: [123.86144261394908, 10.81136792821119]
        }, {
            markerOffset: 15,
            name: 'Shenzhen, China',
            coordinates: [114.0807537609972, 23.056469088377284],
        }, {
            markerOffset: 15,
            name: 'Singapore',
            coordinates: [103.74551407051558, 1.9287016314791159]
        }]
    }
};

export default profile;
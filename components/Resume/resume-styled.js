import styled from 'styled-components';

export const ResumeWrapper = styled.div`
    width: 8.3in;
    // height: 11.7in;
    padding: 0 1em;

    @media print {
        height: auto;
        min-height: 0;
        page-break-inside: avoid;
    }
    
    @media screen {
        height: 11.7in;
    }

    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

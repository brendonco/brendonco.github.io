import styled from 'styled-components';

const height = '18.75em';

export const TravelWrapper = styled.section`
    width: 100%;
    height: ${height};
`;

export const VectorContainer = styled.div`
    @media print {
        display: block;
    }

    @media screen {
        display: none;
    }
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    touch-action: none;

    svg {
        position: absolute;
        top: -1.5625em;
        height: ${height};
    }
`;

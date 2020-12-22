import styled from 'styled-components';

export const TravelWrapper = styled.section`
    width: 100%;
    height: 18.75em;
`;

export const VectorContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    touch-action: none;

    svg {
        position: absolute;
        top: -1.5625em;
        height: 18.75em;
    }
`;
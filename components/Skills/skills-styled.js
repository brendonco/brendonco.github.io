import styled from 'styled-components';

export const SkillsWrapper = styled.div`
    display: grid;
    font-size: 12px;
    grid-template-columns: 33.3% 33.3% 33.3%;

    > div {
        padding-right: .5em;$
    }

    canvas {
        width: 10em;
        height: 10em;
    }
`;

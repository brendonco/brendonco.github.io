import styled from 'styled-components';

export const Wrapper = styled.article`
    display: grid;
    grid-template-columns: 50% 50%;
    max-width: inherit;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;

    a {
        font-size: 12px;
        padding-left: 0.5em;
    }
`;

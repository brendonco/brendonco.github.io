import styled from 'styled-components';

export const ContactWrapper = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    max-width: inherit;
`;

export const ContactItem = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;

    span {
        padding-left: 0.5em;
    }
`;
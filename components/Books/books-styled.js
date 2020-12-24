import styled from 'styled-components';

export const BooksWrapper = styled.div`
    display: grid;
    grid-template-columns: 25% 50%;
    max-width: inherit;
`;

export const BooksItem = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;

    img {
        padding-left: 0.5em;
    }
`;
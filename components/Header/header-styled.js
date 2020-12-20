import styled from 'styled-components';

export const Title = styled.h1`
    font-weight: 300;
    font-size: 3em;
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
`

export const HeaderWrapper = styled.div`
    margin-bottom: 1em;
`;
import styled from 'styled-components';

export const CardWrapper = styled.section`
    display: flex;
    margin-bottom: 1em;

    // page-break-before: ${props => props.title === 'BOOKS' ? 'always' : 'unset'};
`;

export const LeftCard = styled.div`
    width: 125px;
`;

export const RightCard = styled.div`
    flex: 1;
    padding-left: 5px;
`;
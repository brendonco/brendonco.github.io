import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #e0e0de;
    border-radius: 50px;
`;

export const Filler = styled.div`
    height: 100%;
    width: ${props => props.completed ? `${props.completed}%` : 0};
    background-color: ${props => props.bgcolor ? props.bgcolor : 'unset'};
    border-radius: inherit;
    text-align: right;
`;

export const Label = styled.span`
    padding: 5px;
    color: white;
    font-weight: bold;
`;
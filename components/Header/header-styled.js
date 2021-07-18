import styled from 'styled-components';

export const Title = styled.h1`
    font-weight: 300;
    font-size: 2em;
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.text};
`;

export const HeaderWrapper = styled.div`
    margin-bottom: 1em;
`;

export const Row = styled.div`
    display: flex;
`;

export const Column = styled.div`
    flex: 50%;
    direction: ${(props) => props.direction || 'unset'};
`;

export const ImgCrop = styled.div`
    width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;

    img {
        display: inline;
        margin: 0 auto;
        height: 100%;
        width: auto;
    }
`;

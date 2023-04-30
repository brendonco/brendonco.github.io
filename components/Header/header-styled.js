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
    cursor: pointer;
    width: 100px;
    height: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;

    img {
        display: inline;
        margin: 0 auto;

        filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
        /* Firefox 3.5+, IE10 */
        filter: gray;
        /* IE6-9 */
        -webkit-filter: grayscale(100%);
        /* Chrome 19+ & Safari 6+ */
        -webkit-transition: all 0.6s ease;
        /* Fade to color for Chrome and Safari */
        -webkit-backface-visibility: hidden;
        /* Fix for transition flickering */

        :hover {
            filter: none;
            -webkit-filter: grayscale(0%);
        }
    }
`;

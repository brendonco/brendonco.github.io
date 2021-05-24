import styled from 'styled-components';

export const Stepper = styled.ul`
    padding: 0;
    margin: 1em;

    li {
        display: flex;
    }

    aside {
        p {
            font-size: 12px;
        }
    }

    time {
        position: relative;
        color: #ccc;

        ::after {
            content: '';
            position: absolute;
            z-index: 2;
            right: 0;
            top: 0;
            transform: translateX(50%);
            border-radius: 50%;
            background: #fff;
            border: 1px #ccc solid;
            width: 0.8em;
            height: 0.8em;
        }
    }

    div {
        padding: 0 1.5em 0 1.5em;
        position: relative;

        ::before {
            content: '';
            position: absolute;
            z-index: 1;
            left: 0;
            height: 100%;
            border-left: 1px #ccc solid;
        }

        strong,
        span {
            display: block;
            font-size: 12px;
        }
    }
`;

export const Wrapper = styled.div``;

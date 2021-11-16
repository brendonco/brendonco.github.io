import '../assets/styles.scss';

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '../common/Theme';
import Switch from '../components/Switch';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Helvetica, sans-serif, verdana;
    font-size: 1em;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 10ms linear;

    a {
        :link {
            color: ${({ theme }) => theme.link};
        }
        :visited {
            color: ${({ theme }) => theme.link};
        }
    }
  }
`;

export default function App({ Component, pageProps }) {
    const [isToggled, setIsToggled] = useState(false);
    const [theme, setTheme] = useState('light');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle />

                {isMounted && (
                    <>
                        <Switch
                            toggled={isToggled}
                            theme={theme}
                            onChange={(e) => {
                                setIsToggled(e.target.checked);
                                themeToggler();
                            }}
                        />
                        <Component {...pageProps} />
                    </>
                )}
            </ThemeProvider>
        </>
    );
}

App.propTypes = {
    Component: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func,
        PropTypes.string,
        PropTypes.node
    ]).isRequired,
    pageProps: PropTypes.objectOf(PropTypes.any).isRequired
};

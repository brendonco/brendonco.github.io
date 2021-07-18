import '../assets/styles.scss';

import PropTypes from 'prop-types';
import { useState } from 'react';
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
    transition: background-color 300ms linear;

    a {
        :link {
            color: ${({ defaultTheme, theme }) =>
                defaultTheme === 'light' ? 'green' : theme.text};
        }
        :visited {
            color: ${({ defaultTheme, theme }) =>
                defaultTheme === 'light' ? 'green' : theme.text};
        }
    }
  }
`;

export default function App({ Component, pageProps }) {
    const [isToggled, setIsToggled] = useState(false);
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle defaultTheme={theme} />
                <Switch
                    // id="switch-knob"
                    toggled={isToggled}
                    onChange={(e) => {
                        setIsToggled(e.target.checked);
                        themeToggler();
                    }}
                />
                <Component {...pageProps} />
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

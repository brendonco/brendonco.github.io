'use client';

import { useState, useEffect } from 'react';
import { darkTheme, lightTheme } from '../common/Theme';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
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
        color: ${({ theme }) => theme.link};
        
        :link {
            color: ${({ theme }) => theme.link};
        }
        :visited {
            color: ${({ theme }) => theme.link};
        }
    }
  }
`;

export default function Providers({ children }) {
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
                <GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />

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
                        {children}
                    </>
                )}
            </ThemeProvider>
        </>
    );
}

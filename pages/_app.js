import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica, sans-serif, verdana;
    font-size: 1em;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
    colors: {
        primary: '#000'
    }
};

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

App.propTypes = {
    Component: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.node])
        .isRequired,
    pageProps: PropTypes.objectOf(PropTypes.any).isRequired
};

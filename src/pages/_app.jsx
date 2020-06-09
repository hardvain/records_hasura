import React, { useEffect } from 'react';
import Head from 'next/head';
import './app.css';
import isDarkMode from 'hooks/isDarkMode';
import Navbar from '../components/Navbar';
import {
  ThemeProvider,
  CSSReset,
  Box,
  DarkMode,
  ColorModeProvider,
  useColorMode,
} from '@chakra-ui/core';
import theme from '../theme';
import NProgress from 'nprogress';
import 'react-datepicker/dist/react-datepicker.css';

import Router from 'next/router';
NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export function reportWebVitals(metric) {
  // console.log(metric);
}
const config = (theme) => ({
  light: {
    color: theme.colors.gray[800],
    bg: undefined,
    borderColor: theme.colors.gray[200],
    placeholderColor: theme.colors.gray[400],
  },
  dark: {
    color: theme.colors.whiteAlpha[900],
    bg: '#191A1B',
    borderColor: theme.colors.whiteAlpha[100],
    placeholderColor: theme.colors.whiteAlpha[400],
  },
});
export default ({ Component, pageProps }) => {
  return (
    <Box height="100vh">
      <Head>
        <title>Assess</title>
      </Head>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <DarkMode>
            <CSSReset config={config} />
            <Navbar />
            <App Component={Component} pageProps={pageProps} />
          </DarkMode>
        </ColorModeProvider>
      </ThemeProvider>
    </Box>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <Box id="component-box" minHeight={'90vh'}>
      <Component {...pageProps} />
    </Box>
  );
};

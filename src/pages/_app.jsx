import React, { useEffect } from 'react';
import Head from 'next/head';
import { Flex, useColorMode } from '@chakra-ui/core';
import './app.css';

import FormModal from 'src/components/FormModal';
import Navbar from 'src/components/Navbar';
import { useStore } from 'src/store';
import Card from 'src/components/Card';
import Sidebar from '../components/Sidebar';
import {
  ThemeProvider,
  CSSReset,
  Box,
  DarkMode,
  LightMode,
  ColorModeProvider,
} from '@chakra-ui/core';
import theme from '../theme';
import NProgress from 'nprogress';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-circular-progressbar/dist/styles.css';
import Router from 'next/router';
import { useFetchUser } from '../lib/user';
import { withApollo } from '../lib/withApollo';
import Landing from './landing';
import Shell from './shell';
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
    bg: '#f5f5f7',
    borderColor: theme.colors.gray[200],
    placeholderColor: theme.colors.gray[400],
  },
  dark: {
    color: theme.colors.whiteAlpha[900],
    bg: '#232626',
    borderColor: theme.colors.whiteAlpha[100],
    placeholderColor: theme.colors.whiteAlpha[400],
  },
});
const App = ({ Component, pageProps }) => {
  const { setUserId, showSidebar } = useStore((state) => ({
    setUserId: state.setUserId,
    showSidebar: state.ui.showSidebar,
  }));
  const { user, loading } = useFetchUser({ required: true });
  useEffect(() => {
    if (user && user['https://hasura.io/jwt/claims']) {
      setUserId(user['https://hasura.io/jwt/claims']['x-hasura-user-id']);
    }
  }, [user]);
  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <LightMode>
            <CSSReset config={config} />
            <Shell />
          </LightMode>
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
  if (!user) {
    return (
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <LightMode>
            <CSSReset config={config} />
            <Landing />
          </LightMode>
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
  return (
    <Box height="100vh">
      <Head>
        <title>Records</title>
      </Head>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <LightMode>
            <CSSReset config={config} />
            <Navbar />
            <Flex direction={'row'}>
              {<Sidebar />}

              <Box
                ml={showSidebar ? 250 : 65}
                flexGrow={1}
                minHeight={'100vh'}
              >
                <Card pt={30}>
                  <Component {...pageProps} />
                </Card>
                <FormModal />
              </Box>
            </Flex>
          </LightMode>
        </ColorModeProvider>
      </ThemeProvider>
    </Box>
  );
};

export default withApollo({ ssr: false })(App);

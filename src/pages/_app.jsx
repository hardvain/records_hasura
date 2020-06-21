import React from 'react';
import Head from 'next/head';
import { Flex, Stack } from '@chakra-ui/core';
import './app.css';
import FormModal from 'src/components/records/FormModal';
import Login from 'src/pages/Login';
import { useStore } from 'src/store';
import Sidebar from '../components/Sidebar';
import {
  ThemeProvider,
  CSSReset,
  Box,
  DarkMode,
  ColorModeProvider,
} from '@chakra-ui/core';
import theme from '../theme';
import NProgress from 'nprogress';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-circular-progressbar/dist/styles.css';
import Router from 'next/router';
import { useFetchUser } from '../lib/user';
import { withApollo } from '../lib/withApollo';
import { ApolloProvider } from '@apollo/react-hooks';

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
    bg: 'white',
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
  const showSidebar = useStore((state) => state.ui.showSidebar);
  const { user, loading } = useFetchUser({ required: true });
  if (loading || !user) {
    return (
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset config={config} />
          <Login />
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
            <DarkMode>
              <CSSReset config={config} />
              <Flex direction={'row'}>
                {<Sidebar />}
                <Box ml={70} mr={5} flexGrow={1}>
                  <Box id="component-box" minHeight={'90vh'}>
                    <Component {...pageProps} />
                  </Box>
                  <FormModal />
                </Box>
              </Flex>
            </DarkMode>
          </ColorModeProvider>
        </ThemeProvider>
    </Box>
  );
};

export default withApollo({ ssr: false })(App);

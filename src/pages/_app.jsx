import React from 'react';
import Head from 'next/head';
import { Flex, Stack } from '@chakra-ui/core';
import './app.css';
import FormModal from 'src/components/records/FormModal';
import { useStore } from 'src/store';
import Sidebar from '../components/Sidebar';
import ApolloClient from 'apollo-boost';
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
import { ApolloProvider } from '@apollo/react-hooks';
import Router from 'next/router';
NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const client = new ApolloClient({
  uri: 'https://records-app-graphql.herokuapp.com/v1/graphql',
});

export function reportWebVitals(metric) {
  // console.log(metric);
}
const config = (theme) => ({
  light: {
    color: theme.colors.gray[800],
    bg: theme.colors.gray[100],
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
  const showSidebar = useStore((state) => state.ui.showSidebar);
  return (
    <Box height="100vh">
      <Head>
        <title>Records</title>
      </Head>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <DarkMode>
            <ApolloProvider client={client}>
            <CSSReset config={config} />
            <Flex direction={'row'}>
              {<Sidebar />}
              <Box ml={70}  mr={5} flexGrow={1}>
                {/*<Navbar />*/}
                <App Component={Component} pageProps={pageProps} />
                <FormModal />
              </Box>
            </Flex>
            </ApolloProvider>
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

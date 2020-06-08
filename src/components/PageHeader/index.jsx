import { Box, Heading, Stack, useColorMode } from '@chakra-ui/core';
import isDarkMode from 'hooks/isDarkMode';
import Breadcrumbs from './Breadcrumbs';
export default ({ title, links = [], children,...rest }) => {
  const isDark = isDarkMode();

  return (
    <Box
      width={'100%'}
      height={150}
      borderBottomWidth={1}
      bg={ !isDark ? '#FEFEFE' : '#333'}
      boxShadow={"xs"}
      // borderBottomColor={isDark ? 'gray.700' : 'gray.200'}
      {...rest}
    >
      <Stack px={10} py={5}>
        <Breadcrumbs links={links} />
        <Heading as={'h4'} size={'lg'} my={2}>
          {title}
        </Heading>
        {children}
      </Stack>
    </Box>
  );
};

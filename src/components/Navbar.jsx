import { Box, Button, Flex, IconButton, useColorMode } from '@chakra-ui/core';
import { FaHome, FaUser } from 'react-icons/fa';
import NextLink from 'next/link';

export default () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      direction="row"
      borderBottomWidth={1}
      borderBottom="gray.200"
      py={2}
      px={2}
    >
      <NextLink href="/" as={`/`}>
        <IconButton size={'sm'} variant="default" icon={FaHome} />
      </NextLink>
    </Flex>
  );
};

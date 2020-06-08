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
      <Button size="sm" variant="default">
        <NextLink href="/assessments">
          <a>Assessments</a>
        </NextLink>
      </Button>
      <Button size="sm" variant="default">
        <NextLink href="/questions">
          <a>Questions</a>
        </NextLink>
      </Button>
      <Button size="sm" variant="default">
        <NextLink href="/reports">
          <a>Reports</a>
        </NextLink>
      </Button>
      <Box flexGrow={1} />
      <NextLink href="/account" as={`/account`}>
        <IconButton size={'sm'} variant="default" icon={FaUser} />
      </NextLink>
      <IconButton
        size={'sm'}
        variant="default"
        icon={colorMode === 'light' ? 'moon' : 'sun'}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

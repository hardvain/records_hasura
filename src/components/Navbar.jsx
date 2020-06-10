import {
  Flex,
  IconButton,
  useColorMode,
} from '@chakra-ui/core';
import { FaHome, FaUser } from 'react-icons/fa';
import NextLink from 'next/link';

export default () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      bg={'#232626'}
      direction="row"
      borderBottomWidth={1}
      borderBottom="gray.200"
      alignItems={"center"}
      py={2}
      px={2}
    >
      <NextLink href="/" as={`/`}>
        <IconButton size={'lg'} variant="default" icon={FaHome} />
      </NextLink>
    </Flex>
  );
};

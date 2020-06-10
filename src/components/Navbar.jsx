import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
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
      <Menu>
        <MenuButton
          as={Button}
          ml={'auto'}
          size={'sm'}
          startIcon={'small-add'}
          rightIcon="chevron-down"
        >
          Actions
        </MenuButton>
        <MenuList zIndex={1000}>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem as="a" href="#">
            Attend a Workshop
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

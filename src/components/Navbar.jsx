import {
  Flex,
  IconButton,
  Stack,
  Heading,
  Text,
  Icon,
  InputGroup,
  InputLeftElement,
  Input,
  Box, useColorMode,
} from '@chakra-ui/core';
import { useRouter } from 'next/router';
import { FaHome, FaCalendar, FaPlus, FaFolder } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { IoIosApps } from 'react-icons/io';
import Logo from 'src/assets/Logo';
import NextLink from 'next/link';
import Project from 'src/assets/Project';
import MenuButton from 'src/components/MenuButton';
import { useStore } from 'src/store';
export default () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { toggleSidebar, toggleFormPopup } = useStore((state) => ({
    toggleSidebar: state.toggleSidebar,
    toggleFormPopup: state.toggleFormPopup,
  }));
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <Flex
      boxShadow={"none"}
      bg={colorMode === 'light' ? 'white' : '#232626'}
      direction="row"
      borderBottom="gray.200"
      alignItems={'center'}
      py={'2px'}
      px={2}
      position={'fixed'}
      width="100%"
      top={0}
      zIndex={1000}
    >
      <IconButton
        size={'lg'}
        variant="default"
        icon={FiMenu}
        mr={4}
        onClick={toggleSidebar}
      />
      <Stack isInline alignItems={'center'} mr={2} cursor={'pointer'}>
        <Box alignSelf={'center'} mr={4}>
          <Logo width={30} height={30} />
        </Box>
      </Stack>
      <MenuButton isActive={pathname.includes('/records')}>
        <NextLink href="/" as={`/`}>
          <IconButton size={'lg'} variant="default" icon={FaHome} />
        </NextLink>
      </MenuButton>
      <MenuButton isActive={pathname === '/calendar'}>
        <NextLink href="/calendar" as={`/calendar`}>
          <IconButton size={'lg'} variant="default" icon={FaCalendar} />
        </NextLink>
      </MenuButton>
      <MenuButton isActive={pathname === '/docs'}>
        <NextLink href="/docs" as={`/docs`}>
          <IconButton size={'lg'} variant="default" icon={FaFolder} />
        </NextLink>
      </MenuButton>
      <Box flexGrow={1}></Box>
      <MenuButton isActive={pathname === '/docs'}>
        <IconButton
          size={'lg'}
          variant="default"
          icon={FaPlus}
          onClick={toggleFormPopup}
        />
      </MenuButton>
      <InputGroup w={300} mr={2}>
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Input type="phone" placeholder="Search Records" />
      </InputGroup>
      <IconButton
        size={'lg'}
        variant="default"
        icon={colorMode === 'light'?"moon":"sun"}
        mr={4}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

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
  Box,
  useColorMode,
} from '@chakra-ui/core';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaHome, FaCalendar, FaPlus, FaFolder } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { IoIosApps } from 'react-icons/io';
import Logo from 'src/assets/Logo';
import Calendar from 'src/assets/Calendar';
import NextLink from 'next/link';
import Project from 'src/assets/Project';
import MenuButton from 'src/components/MenuButton';
import SearchSelect from 'src/components/SearchSelect';
import { useStore } from 'src/store';
import _ from 'lodash';

export default () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { toggleSidebar, toggleFormPopup, searchRecords } = useStore(
    (state) => ({
      toggleSidebar: state.toggleSidebar,
      searchRecords: state.searchRecords,
      toggleFormPopup: state.toggleFormPopup,
    })
  );
  const sendQuery = async (query) => {
    const result = await searchRecords(query);
    setSearchResults(result.items);
  };
  const delayedQuery = _.debounce((q) => sendQuery(q), 500);

  const router = useRouter();
  const pathname = router.pathname;

  const search = async (e) => {
    setSearchText(e.target.value);
    delayedQuery(e.target.value);
  };
  return (
    <Flex
      boxShadow={'none'}
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
      {/*<IconButton*/}
      {/*  size={'lg'}*/}
      {/*  variant="default"*/}
      {/*  icon={FiMenu}*/}
      {/*  mr={4}*/}
      {/*  onClick={toggleSidebar}*/}
      {/*/>*/}
      <Box alignItems={'center'} mx={4} cursor={'pointer'}>
        <NextLink href="/" as={`/`}>
          <Box alignSelf={'center'} mr={4}>
            <Logo width={30} height={30} />
          </Box>
        </NextLink>
      </Box>
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
        <Input
          type="phone"
          placeholder="Search Records"
          value={searchText}
          onChange={search}
        />
      </InputGroup>
      <IconButton
        size={'lg'}
        variant="default"
        icon={colorMode === 'light' ? 'moon' : 'sun'}
        mr={4}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

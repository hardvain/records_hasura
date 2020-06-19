import {
  Flex,
  IconButton,
  Stack,
  Heading,
  Text,
  Icon,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton as ChakraMenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  Input,
  Box,
  useColorMode,
  Button,
} from '@chakra-ui/core';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaHome, FaCalendar, FaPlus, FaFolder } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { IoIosApps } from 'react-icons/io';
import Logo from 'src/assets/Logo';
import Calendar from 'src/assets/Calendar';
import NextLink from 'next/link';
import Project from 'src/assets/Project';
import DatePicker from 'src/components/DatePicker';
import MenuButton from 'src/components/MenuButton';
import SearchSelect from 'src/components/SearchSelect';
import { useStore } from 'src/store';
import _ from 'lodash';

export default () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const {
    date,
    toggleFormPopup,
    searchRecords,
    setDate,
    prevDate,
    nextDate,
  } = useStore((state) => ({
    toggleSidebar: state.toggleSidebar,
    setDate: state.setDate,
    prevDate: state.prevDate,
    nextDate: state.nextDate,
    date: state.ui.date,
    searchRecords: state.searchRecords,
    toggleFormPopup: state.toggleFormPopup,
  }));
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
      <Box>
        <Menu>
          <ChakraMenuButton
            variant={'ghost'}
            size={'sm'}
            as={Button}
            mr={4}
            rightIcon={'chevron-down'}
          >
            Dashboards
          </ChakraMenuButton>
          <MenuList bg={colorMode === 'light' ? 'grey.300' : '#3e4242'}>
            <MenuItem onClick={() => toggleFormPopup('task')}>Task</MenuItem>
            <MenuItem onClick={() => toggleFormPopup('water')}>Water</MenuItem>
            <MenuItem onClick={() => toggleFormPopup('glucose')}>
              Glucose
            </MenuItem>
            <MenuItem onClick={() => toggleFormPopup('transaction')}>
              Transaction
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box>
        <Menu>
          <ChakraMenuButton
            variantColor={'deeppurple'}
            size={'sm'}
            as={Button}
            mr={4}
          >
            Create
          </ChakraMenuButton>
          <MenuList bg={colorMode === 'light' ? 'grey.300' : '#3e4242'}>
            <MenuItem onClick={() => toggleFormPopup('task')}>Task</MenuItem>
            <MenuItem onClick={() => toggleFormPopup('water')}>Water</MenuItem>
            <MenuItem onClick={() => toggleFormPopup('glucose')}>
              Glucose
            </MenuItem>
            <MenuItem onClick={() => toggleFormPopup('transaction')}>
              Transaction
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box flexGrow={1}></Box>
      <Box mx={2}>
        <DatePicker selected={date} type={'button'} onChange={setDate} />
      </Box>
      {/*<InputGroup size={'sm'} w={300} mr={2}>*/}
      {/*  <InputLeftElement children={<Icon name="search" color="gray.300" />} />*/}
      {/*  <Input*/}
      {/*    type="phone"*/}
      {/*    placeholder="Search Records"*/}
      {/*    value={searchText}*/}
      {/*    onChange={search}*/}
      {/*  />*/}
      {/*</InputGroup>*/}
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

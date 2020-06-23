import {
  Flex,
  IconButton,
  Menu,
  MenuButton as ChakraMenuButton,
  MenuList,
  MenuItem,
  Box,
  useColorMode,
  Button, Divider, Tooltip,
} from '@chakra-ui/core';
import NextLink from 'next/link';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Logo from 'src/assets/Logo';
import DatePicker from 'src/components/DatePicker';
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
      bg={colorMode === 'light' ? 'brand.100' : '#232626'}
      direction="row"
      borderBottomWidth={1}
      borderBottom="gray.200"
      alignItems={'center'}
      py={1}
      pl={4}
      width="100%"
    >
      <Box alignItems={'center'}  cursor={'pointer'} >
        <NextLink href="/" as={`/`}>
          <Box alignSelf={'center'} mr={4}>
            <Logo width={30} height={30} />
          </Box>
        </NextLink>
      </Box>
      <Box>
        <Link href="/projects" as={`/projects`}>
          <Button variant={'ghost'} size={'sm'} mr={4}>
            Projects
          </Button>
        </Link>
      </Box>

      <Box>
        <Menu>
          <ChakraMenuButton
            variantColor={'brand'}
            size={'sm'}
            as={Button}
            mr={4}
          >
            Create
          </ChakraMenuButton>
          <MenuList bg={colorMode === 'light' ? 'white' : '#3e4242'}>
            <MenuItem onClick={() => toggleFormPopup('task')}>Task</MenuItem>
            <MenuItem onClick={() => toggleFormPopup('water')}>Water</MenuItem>
            <MenuItem onClick={() => toggleFormPopup('glucose')}>
              Glucose
            </MenuItem>
            <MenuItem onClick={() => toggleFormPopup('transaction')}>
              Transaction
            </MenuItem>
            <MenuItem onClick={() => toggleFormPopup('dishes')}>
              Dish
            </MenuItem>
            <Divider/>
            <MenuItem onClick={() => toggleFormPopup('projects')}>
              Project
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box flexGrow={1}></Box>
      <Tooltip label={'Notifications'}>
        <IconButton
          variant="default"
          icon={'bell'}
          onClick={toggleColorMode}
        />
      </Tooltip>
      <Tooltip label={colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}>
        <IconButton
          variant="default"
          icon={colorMode === 'light' ? 'moon' : 'sun'}
          onClick={toggleColorMode}
        />
      </Tooltip>
    </Flex>
  );
};

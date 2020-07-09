import {
  Box,
  Button,
  Flex,
  IconButton,
  Stack,
  Text,
  Link,
  Tooltip,
  useColorMode,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import Router, { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  FaBriefcaseMedical,
  FaFile,
  FaHeartbeat,
  FaPizzaSlice,
  FaTasks,
} from 'react-icons/fa';
import { FiInbox } from 'react-icons/fi';
import {
  GiBed,
  GiBrain,
  GiFruitBowl,
  GiMoneyStack,
  GiSugarCane,
  GiWaterDrop,
} from 'react-icons/gi';
import { IoIosLogOut, IoIosPeople } from 'react-icons/io';
import { MdTimer } from 'react-icons/md';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import useAggregate from 'src/hooks/graphql/useAggregate';
import { useStore } from 'src/store';

const MenuItem = ({ children, isActive, title, href, as }) => {
  const { colorMode } = useColorMode();
  const showSidebar = useStore((state) => state.ui.showSidebar);

  const [isHovering, setIsHovering] = useState(false);
  return (
    <NextLink href={href} as={as}>
      <Button
        w={245}
        cursor={'pointer'}
        borderRadius={0}
        borderLeftColor={'brand.500'}
        borderLeftWidth={isActive ? 3 : 0}
        mb={2}
        pl={5}
        justifyContent={'flex-start'}
        variant={'ghost'}
        leftIcon={children}
        variantColor={isHovering ? 'brand' : 'gray'}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Stack isInline alignItems={'center'}>
          <Text ml={5} fontSize={14} fontWeight={500}>
            {title}
          </Text>
        </Stack>
      </Button>
    </NextLink>
  );
};

export default () => {
  const { showSidebar } = useStore((state) => ({
    showSidebar: state.ui.showSidebar,
  }));

  const { colorMode } = useColorMode();
  const [inboxAgg] = useAggregate({
    name: 'inbox',
    aggregates: { count: [] },
  });
  const router = useRouter();
  const pathname = router.pathname;
  const logout = () => {
    Router.push('/api/logout');
  };
  return (
    <Flex
      pt={5}
      display={[showSidebar ? 'flex' : 'none', 'flex']}
      position={'fixed'}
      right={0}
      direction={'column'}
      w={250}
      bg={colorMode === 'light' ? '#fff' : '#333'}
      height={'100vh'}
      borderLeftWidth={1}
      overflowX={'hidden'}
    >
      <MenuItem
        href="/inbox"
        as={`/inbox`}
        title={`Inbox ${inboxAgg ? `(${inboxAgg?.count})` : ''}`}
        isActive={pathname === '/inbox'}
      >
        {FiInbox}
      </MenuItem>
      <MenuItem
        href="/thoughts"
        title={'Thoughts'}
        as={`/thoughts`}
        isActive={pathname === '/thoughts'}
      >
        {RiLightbulbFlashLine}
      </MenuItem>
      <MenuItem
        href="/tasks"
        as={`/tasks`}
        title={'Tasks'}
        isActive={pathname === '/tasks'}
      >
        {FaTasks}
      </MenuItem>
      <MenuItem
        href="/glucose"
        as={`/glucose`}
        title={'Glucose'}
        isActive={pathname === '/glucose'}
      >
        {GiSugarCane}
      </MenuItem>
      <MenuItem
        href="/water"
        as={`/water`}
        title={'Water'}
        isActive={pathname === '/water'}
      >
        {GiWaterDrop}
      </MenuItem>
      <MenuItem
        href="/food"
        as={`/food`}
        title={'Food'}
        isActive={pathname === '/food'}
      >
        {GiFruitBowl}
      </MenuItem>
      <MenuItem
        title={'Finance'}
        isActive={pathname === '/transactions'}
        href="/transactions"
        as={`/transactions`}
      >
        {GiMoneyStack}
      </MenuItem>
      <MenuItem
        href="/people"
        as={`/people`}
        title={'People'}
        isActive={pathname === '/people'}
      >
        {IoIosPeople}
      </MenuItem>
      <MenuItem
        href="/dishes"
        as={`/dishes`}
        title={'Dishes'}
        isActive={pathname === '/dishes'}
      >
        {FaPizzaSlice}
      </MenuItem>
      <MenuItem
        href="/sleep"
        as={`/sleep`}
        title={'Sleep'}
        isActive={pathname === '/sleep'}
      >
        {GiBed}
      </MenuItem>
      <MenuItem
        title={'Timesheet'}
        isActive={pathname === '/timesheet'}
        href="/timesheet"
        as={`/timesheet`}
      >
        {MdTimer}
      </MenuItem>
      <MenuItem
        title={'Notes'}
        isActive={pathname === '/notes'}
        href="/notes"
        as={`/notes`}
      >
        {FaFile}
      </MenuItem>
      <MenuItem
        title={'Snippets'}
        isActive={pathname === '/snippets'}
        href="/snippets"
        as={`/snippets`}
      >
        {GiBrain}
      </MenuItem>
      <MenuItem
        href="/heart"
        as={`/heart`}
        title={'Heart'}
        isActive={pathname === '/heart'}
      >
        {FaHeartbeat}
      </MenuItem>
      <MenuItem
        title={'Medications'}
        isActive={pathname === '/medications'}
        href="/medications"
        as={`/medications`}
      >
        {FaBriefcaseMedical}
      </MenuItem>

      <Box flexGrow={1}></Box>
      <Tooltip label={'Logout'}>
        <IconButton
          mb={5}
          size={'md'}
          variant={'ghost'}
          icon={IoIosLogOut}
          onClick={logout}
        />
      </Tooltip>
    </Flex>
  );
};

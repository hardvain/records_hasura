import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Router from 'next/router';
import { createElement, useState } from 'react';
import {
  Box,
  Button,
  Tooltip,
  Divider,
  Collapse,
  Stack,
  Text,
  useColorMode,
  IconButton,
  Flex,
} from '@chakra-ui/core';
import { GoProject } from 'react-icons/go';
import Logo from 'src/assets/Logo';
import Task from 'src/assets/Task';
import Recipes from 'src/assets/Recipes';
import Sugar from 'src/assets/Sugar';
import Fruit from 'src/assets/Fruit';
import Money from 'src/assets/Money';
import Reports from 'src/assets/Reports';
import Medicine from 'src/assets/Medicine';
import Brain from 'src/assets/Brain';
import Team from 'src/assets/Team';
import Settings from 'src/assets/Settings';
import Heart from 'src/assets/Heart';
import Sleep from 'src/assets/Sleep';
import Water from 'src/assets/Water';
import Time from 'src/assets/Time';
import { useStore } from 'src/store';
import { MdTimer } from 'react-icons/md';
import { IoIosLogOut, IoIosPeople } from 'react-icons/io';
import {
  GiSugarCane,
  GiWaterDrop,
  GiFruitBowl,
  GiMoneyStack,
  GiBed,
  GiBrain,
} from 'react-icons/gi';
import {
  FaTasks,
  FaHeartbeat,
  FaBriefcaseMedical,
  FaPizzaSlice,
} from 'react-icons/fa';
const MenuItem = ({ children, isActive, title, href, as }) => {
  const { colorMode } = useColorMode();
  const showSidebar = useStore((state) => state.ui.showSidebar);

  const [isHovering, setIsHovering] = useState(false);
  const content = (
    <Button
      w={showSidebar ? '100%' : 45}
      cursor={'pointer'}
      borderRadius={0}
      borderRightColor={'brand.500'}
      borderRightWidth={isActive ? 3 : 0}
      mb={2}
      pl={5}
      bg={
        isActive || isHovering
          ? colorMode === 'light'
            ? 'brand.50'
            : '#3e4242'
          : ''
      }
      justifyContent={'flex-start'}
      variant={'ghost'}
      leftIcon={children}
      color={
        isActive
          ? colorMode === 'light'
            ? 'brand.500'
            : 'brand.200'
          : colorMode === 'light'
          ? 'gray.700'
          : 'white'
      }
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <NextLink href={href} as={as}>
        <Stack isInline alignItems={'center'}>
          {showSidebar && <Text ml={5}>{title}</Text>}
        </Stack>
      </NextLink>
    </Button>
  );
  return showSidebar ? (
    content
  ) : (
    <Tooltip label={title}>
      <NextLink href={href} as={as}>
        <IconButton
          bg={
            isActive || isHovering
              ? colorMode === 'light'
                ? 'gray.300'
                : '#3e4242'
              : ''
          }
          mb={5}
          variant={'ghost'}
          fontSize={25}
          icon={children}
        />
      </NextLink>
    </Tooltip>
  );
};

export default () => {
  const { showSidebar, toggleFormPopup } = useStore((state) => ({
    showSidebar: state.ui.showSidebar,
    toggleFormPopup: state.toggleFormPopup,
  }));
  const { colorMode, toggleColorMode } = useColorMode();

  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const router = useRouter();
  const pathname = router.pathname;
  const logout = () => {
    Router.push('/api/logout');
  };
  return (
    <Flex
      pt={60}
      direction={'column'}
      w={showSidebar ? 250 : 70}
      bg={colorMode === 'light' ? 'white' : '#232626'}
      position={'fixed'}
      height={'100%'}
      borderRightWidth={1}
      left={0}
      overflowX={'hidden'}
    >
      <MenuItem
        href="/tasks"
        as={`/tasks`}
        title={'Tasks'}
        isActive={pathname === '/tasks'}
      >
        {FaTasks}
      </MenuItem>
      <MenuItem
        href="/records/glucose"
        as={`/records/glucose`}
        title={'Glucose'}
        isActive={pathname === '/records/glucose'}
      >
        {GiSugarCane}
      </MenuItem>
      <MenuItem
        href="/records/water"
        as={`/records/water`}
        title={'Water'}
        isActive={pathname === '/records/water'}
      >
        {GiWaterDrop}
      </MenuItem>
      <MenuItem
        href="/records/food"
        as={`/records/food`}
        title={'Food'}
        isActive={pathname === '/records/food'}
      >
        {GiFruitBowl}
      </MenuItem>
      <MenuItem
        title={'Finance'}
        isActive={pathname === '/records/transactions'}
        href="/records/transactions"
        as={`/records/transactions`}
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
        href="/records/dishes"
        as={`/records/dishes`}
        title={'Dishes'}
        isActive={pathname === '/records/dishes'}
      >
        {FaPizzaSlice}
      </MenuItem>
      <MenuItem
        href="/records/sleep"
        as={`/records/sleep`}
        title={'Sleep'}
        isActive={pathname === '/records/sleep'}
      >
        {GiBed}
      </MenuItem>
      <MenuItem
        title={'Timesheet'}
        isActive={pathname === '/records/timesheet'}
        href="/records/timesheet"
        as={`/records/timesheet`}
      >
        {MdTimer}
      </MenuItem>
      <MenuItem
        title={'Knowledge'}
        isActive={pathname === '/records/knowledge'}
        href="/records/knowledge"
        as={`/records/knowledge`}
      >
        {GiBrain}
      </MenuItem>
      <MenuItem
        href="/records/heart"
        as={`/records/heart`}
        title={'Heart'}
        isActive={pathname === '/records/heart'}
      >
        {FaHeartbeat}
      </MenuItem>
      <MenuItem
        title={'Medications'}
        isActive={pathname === '/records/medications'}
        href="/records/medications"
        as={`/records/medications`}
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

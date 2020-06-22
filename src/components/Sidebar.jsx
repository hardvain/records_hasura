import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Router from 'next/router';
import { useState } from 'react';
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
import { IoIosLogOut } from 'react-icons/io';
const MenuItem = ({ children, isActive, title, href, as }) => {
  const { colorMode } = useColorMode();
  const showSidebar = useStore((state) => state.ui.showSidebar);

  const [isHovering, setIsHovering] = useState(false);
  const content = (
    <Box
      w={showSidebar ? '100%' : 45}
      cursor={'pointer'}
      borderRadius={6}
      p={2}
      mb={2}
      bg={
        isActive || isHovering
          ? colorMode === 'light'
            ? 'gray.300'
            : '#3e4242'
          : ''
      }
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <NextLink href={href} as={as}>
        <Stack isInline alignItems={'center'}>
          {children}
          {showSidebar && <Text ml={3}>{title}</Text>}
        </Stack>
      </NextLink>
    </Box>
  );
  return showSidebar ? content : <Tooltip label={title}>{content}</Tooltip>;
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
      direction={'column'}
      w={70}
      px={3}
      pt={3}
      bg={colorMode === 'light' ? 'white' : '#232626'}
      position={'fixed'}
      zIndex={1000}
      height={'100%'}
      borderRightWidth={1}
      left={0}
      overflowX={'hidden'}
    >
      <Box alignItems={'center'} mx={2} mb={10} cursor={'pointer'}>
        <NextLink href="/" as={`/`}>
          <Box alignSelf={'center'} mr={4}>
            <Logo width={30} height={30} />
          </Box>
        </NextLink>
      </Box>
      <Tooltip label={'Add new record'}>
        <IconButton
          size={'md'}
          onClick={toggleFormPopup}
          icon={'add'}
          isRound
          variantColor={'brand'}
          mb={5}
        />
      </Tooltip>
      <MenuItem
        href="/tasks"
        as={`/tasks`}
        title={'Tasks'}
        isActive={pathname === '/tasks'}
      >
        <Stack isInline alignItems={'center'}>
          <Box mr={5}>
            <Task width={25} height={25} />
          </Box>
        </Stack>
      </MenuItem>
      <MenuItem
        href="/records/glucose"
        as={`/records/glucose`}
        title={'Glucose'}
        isActive={pathname === '/records/glucose'}
      >
        <Stack isInline alignItems={'center'}>
          <Box alignSelf={'center'} mr={5}>
            <Sugar width={30} height={30} />
          </Box>
        </Stack>
      </MenuItem>
      <MenuItem
        href="/records/water"
        as={`/records/water`}
        title={'Water'}
        isActive={pathname === '/records/water'}
      >
        <Stack isInline alignItems={'center'}>
          <Box alignSelf={'center'} mr={4}>
            <Water width={30} height={30} />
          </Box>
        </Stack>
      </MenuItem>
      <MenuItem
        href="/records/food"
        as={`/records/food`}
        title={'Food'}
        isActive={pathname === '/records/food'}
      >
        <Stack isInline alignItems={'center'}>
          <Box alignSelf={'center'} mr={4}>
            <Fruit width={30} height={30} />
          </Box>
        </Stack>
      </MenuItem>
      <MenuItem
        title={'Transactions'}
        isActive={pathname === '/records/transactions'}
        href="/records/transactions"
        as={`/records/transactions`}
      >
        <Stack isInline alignItems={'center'}>
          <Box alignSelf={'center'} mr={4}>
            <Money width={30} height={30} />
          </Box>
        </Stack>
      </MenuItem>
      <Collapse isOpen={show}>
        <MenuItem
          href="/people"
          as={`/people`}
          title={'People'}
          isActive={pathname === '/people'}
        >
          <Stack isInline alignItems={'center'}>
            <Box alignSelf={'center'} mr={5}>
              <Team width={30} height={30} />
            </Box>
          </Stack>
        </MenuItem>
        <MenuItem
          href="/records/dishes"
          as={`/records/dishes`}
          title={'Dishes'}
          isActive={pathname === '/records/dishes'}
        >
          <Stack isInline alignItems={'center'}>
            <Box mr={5}>
              <Recipes width={25} height={25} />
            </Box>
          </Stack>
        </MenuItem>
        <MenuItem
          href="/records/sleep"
          as={`/records/sleep`}
          title={'Sleep'}
          isActive={pathname === '/records/sleep'}
        >
          <Stack isInline alignItems={'center'}>
            <Box alignSelf={'center'} mr={5}>
              <Sleep width={30} height={30} />
            </Box>
          </Stack>
        </MenuItem>
        <MenuItem
          title={'Timesheet'}
          isActive={pathname === '/records/timesheet'}
          href="/records/timesheet"
          as={`/records/timesheet`}
        >
          <Stack isInline alignItems={'center'}>
            <Box alignSelf={'center'} mr={4}>
              <Time width={30} height={30} />
            </Box>
          </Stack>
        </MenuItem>
        <MenuItem
          title={'Knowledge'}
          isActive={pathname === '/records/knowledge'}
          href="/records/knowledge"
          as={`/records/knowledge`}
        >
          <Stack isInline alignItems={'center'}>
            <Box alignSelf={'center'} mr={4}>
              <Brain width={30} height={30} />
            </Box>
          </Stack>
        </MenuItem>
        <MenuItem
          href="/records/heart"
          as={`/records/heart`}
          title={'Heart'}
          isActive={pathname === '/records/heart'}
        >
          <Stack isInline alignItems={'center'}>
            <Box alignSelf={'center'} mr={4}>
              <Heart width={30} height={30} />
            </Box>
          </Stack>
        </MenuItem>
        <MenuItem
          title={'Medications'}
          isActive={pathname === '/records/medications'}
          href="/records/medications"
          as={`/records/medications`}
        >
          <Stack isInline alignItems={'center'}>
            <Box alignSelf={'center'} mr={4}>
              <Medicine width={30} height={30} />
            </Box>
          </Stack>
        </MenuItem>
      </Collapse>
      {showSidebar ? (
        <Button
          variant={'solid'}
          rightIcon={show ? 'chevron-up' : 'chevron-down'}
          w={'100%'}
          onClick={handleToggle}
        >
          {show ? 'Show Less' : 'Show More'}
        </Button>
      ) : (
        <Tooltip label={show ? 'Show Less' : 'Show More'}>
          <IconButton
            onClick={handleToggle}
            variant={'solid'}
            icon={show ? 'chevron-up' : 'chevron-down'}
          />
        </Tooltip>
      )}
      <Divider borderWidth={2} my={5} w={showSidebar ? '100%' : 45} />
      <MenuItem
        href="/projects"
        as={`/projects`}
        title={'Projects'}
        isActive={pathname === '/projects'}
      >
        <Stack isInline alignItems={'center'}>
          <Box
            as={GoProject}
            fontSize={30}
            alignSelf={'center'}
            color={'brand.500'}
            mr={2}
          />
        </Stack>
      </MenuItem>
      <Divider borderWidth={2} my={5} w={showSidebar ? '100%' : 45} />

      <MenuItem
        href="/reports"
        as={`/reports`}
        title={'Reports'}
        isActive={pathname === '/reports'}
      >
        <Stack isInline alignItems={'center'}>
          <Box alignSelf={'center'} mr={4}>
            <Reports width={30} height={30} />
          </Box>
        </Stack>
      </MenuItem>
      <MenuItem
        href="/settings"
        as={`/settings`}
        title={'Settings'}
        isActive={pathname === '/settings'}
      >
        <Stack isInline alignItems={'center'}>
          <Box alignSelf={'center'} mr={4}>
            <Settings width={30} height={30} />
          </Box>
        </Stack>
      </MenuItem>
      <Tooltip label={colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}>
        <IconButton
          size={'lg'}
          variant="default"
          icon={colorMode === 'light' ? 'moon' : 'sun'}
          onClick={toggleColorMode}
        />
      </Tooltip>
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

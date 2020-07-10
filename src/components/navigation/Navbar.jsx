import {
  Flex,
  IconButton,
  Menu,
  MenuButton as ChakraMenuButton,
  MenuList,
  MenuItem,
  Box,
  useColorMode,
  Button,
  Divider,
  Tooltip,
  Text,
  Progress,
  Stack,
  Input,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';
import { GrApps } from 'react-icons/gr';
import React, { useState } from 'react';
import Logo from 'src/assets/Logo';
import useAggregate from 'src/hooks/graphql/useAggregate';
import useMutation from 'src/hooks/graphql/useMutation';
import * as TaskFilters from 'src/modules/Tasks/filters';
import { useStore } from 'src/store';

export default () => {
  const [inboxItem, setInboxItem] = useState('');
  const { colorMode, toggleColorMode } = useColorMode();
  const { toggleFormPopup, toggleSidebar, toggleTeambar, date } = useStore(
    (state) => ({
      toggleFormPopup: state.toggleFormPopup,
      toggleSidebar: state.toggleSidebar,
      toggleTeambar: state.toggleTeambar,
      date: state.ui.date,
    })
  );
  const inboxInsertMutation = useMutation({
    resource: 'inbox',
    operation: 'insert',
  });
  const [todayTasksAgg] = useAggregate({
    name: 'tasks',
    where: TaskFilters.today(date),
    aggregates: { count: [] },
  });

  const [todayPendingTasksAgg] = useAggregate({
    name: 'tasks',
    where: TaskFilters.activeToday(date),
    aggregates: { count: [] },
  });
  const completedTasksCount =
    todayTasksAgg && todayPendingTasksAgg
      ? todayTasksAgg.count - todayPendingTasksAgg.count
      : 0;
  const progressPercentage = todayTasksAgg
    ? (completedTasksCount * 100) / todayTasksAgg.count
    : 0;
  const onKeyDown = (e) => {
    if (e.keyCode === 13 && e.metaKey) {
      inboxInsertMutation({
        variables: {
          object: { name: inboxItem },
        },
      });
      setInboxItem('');
    }
  };
  const CreateMenu = () => (
    <Menu>
      <ChakraMenuButton variantColor={'brand'} size={'sm'} as={Button} mr={4}>
        Create
      </ChakraMenuButton>
      <MenuList bg={colorMode === 'light' ? 'white' : '#3e4242'}>
        <MenuItem onClick={() => toggleFormPopup('inbox')}>Inbox</MenuItem>
        <MenuItem onClick={() => toggleFormPopup('thoughts')}>
          Thoughts
        </MenuItem>
        <MenuItem onClick={() => toggleFormPopup('tasks')}>Task</MenuItem>
        <MenuItem onClick={() => toggleFormPopup('water')}>Water</MenuItem>
        <MenuItem onClick={() => toggleFormPopup('food')}>Food</MenuItem>
        <MenuItem onClick={() => toggleFormPopup('notes')}>Notes</MenuItem>
        <MenuItem onClick={() => toggleFormPopup('glucose')}>Glucose</MenuItem>
        <MenuItem onClick={() => toggleFormPopup('transactions')}>
          Transaction
        </MenuItem>
        <MenuItem onClick={() => toggleFormPopup('dishes')}>Dish</MenuItem>
        <MenuItem onClick={() => toggleFormPopup('people')}>People</MenuItem>
        <MenuItem onClick={() => toggleFormPopup('snippets')}>
          Snippets
        </MenuItem>

        <Divider />
        <MenuItem onClick={() => toggleFormPopup('teams')}>Team</MenuItem>
        <MenuItem onClick={() => toggleFormPopup('projects')}>Project</MenuItem>
      </MenuList>
    </Menu>
  );

  const TaskProgress = () => (
    <Stack
      display={['none', 'inline-flex']}
      borderRadius={3}
      spacing={1}
      alignItems={'baseline'}
      mr={2}
      bg={colorMode === 'light' ? 'brand.50' : ''}
      p={2}
      borderColor={'brand.500'}
      borderWidth={1}
    >
      <Text fontSize={10}>
        Completed {completedTasksCount} out of{' '}
        {todayTasksAgg ? todayTasksAgg.count : 0} Tasks for today
      </Text>
      <Progress
        borderWidth={1}
        color={
          progressPercentage >= 100
            ? 'green'
            : progressPercentage > 75
            ? 'yellow'
            : progressPercentage < 25
            ? 'red'
            : 'orange'
        }
        value={todayTasksAgg ? progressPercentage : 0}
        w={200}
        borderRadius={5}
      />
    </Stack>
  );
  const QuickInbox = () => (
    <Input
      display={['none', 'inline-flex']}
      w={300}
      size={'sm'}
      mr={5}
      value={inboxItem}
      onChange={(e) => setInboxItem(e.target.value)}
      onKeyDown={onKeyDown}
      placeholder={'Quick add'}
    />
  );
  const AppLogo = () => (
    <Box alignItems={'center'} cursor={'pointer'}>
      <NextLink href="/" as={`/`}>
        <Box alignSelf={'center'} mr={4}>
          <Logo width={30} height={30} />
        </Box>
      </NextLink>
    </Box>
  );
  return (
    <Box>
      <Box display={['none', 'block']}>
        <Flex
          position={'fixed'}
          w={'100%'}
          zIndex={1000}
          bg={colorMode === 'light' ? 'white' : '#333'}
          direction="row"
          borderBottomWidth={1}
          borderBottom="gray.200"
          alignItems={'center'}
          py={1}
          pl={4}
        >

          <AppLogo />
          <Box>
            <Link href="/calendar" as={`/calendar`}>
              <Button variant={'ghost'} size={'sm'} mr={4}>
                Calendar
              </Button>
            </Link>
          </Box>
          <Box>
            <Link href="/objectives" as={`/objectives`}>
              <Button variant={'ghost'} size={'sm'} mr={4}>
                Objectives
              </Button>
            </Link>
          </Box>
          <Box>
            <CreateMenu />
          </Box>
          <Box flexGrow={1}></Box>
          <QuickInbox />
          <TaskProgress />
          <Tooltip label={colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}>
            <IconButton
              variant="default"
              icon={colorMode === 'light' ? 'moon' : 'sun'}
              onClick={toggleColorMode}
            />
          </Tooltip>
          <Box>
            <Link href={'/settings'}>
              <IconButton variant="default" icon={'settings'} />
            </Link>
          </Box>

        </Flex>
      </Box>
      <Box display={['block', 'none']}>
        <Flex
          position={'fixed'}
          w={'100%'}
          zIndex={1000}
          bg={colorMode === 'light' ? 'white' : '#333'}
          direction="row"
          borderBottomWidth={1}
          borderBottom="gray.200"
          alignItems={'center'}
          py={1}
          pl={4}
        >
          <IconButton
            variant="default"
            icon={MdMenu}
            onClick={toggleTeambar}
          />
          <AppLogo />
          <Box>
            <Link href="/calendar" as={`/calendar`}>
              <Button variant={'ghost'} size={'sm'} mr={4}>
                Calendar
              </Button>
            </Link>
          </Box>
          <Box>
            <Link href="/objectives" as={`/objectives`}>
              <Button variant={'ghost'} size={'sm'} mr={4}>
                Objectives
              </Button>
            </Link>
          </Box>
          <Box>
            <CreateMenu />
          </Box>
          <Box flexGrow={1} />
          <Tooltip label={colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}>
            <IconButton
              variant="default"
              icon={colorMode === 'light' ? 'moon' : 'sun'}
              onClick={toggleColorMode}
            />
          </Tooltip>
          <Box>
            <Link href={'/settings'}>
              <IconButton variant="default" icon={'settings'} />
            </Link>
          </Box>
          <IconButton
            variant="default"
            icon={GrApps}
            onClick={toggleSidebar}
          />
        </Flex>
      </Box>
    </Box>
  );
};

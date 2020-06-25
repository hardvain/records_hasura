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
} from '@chakra-ui/core';
import NextLink from 'next/link';
import Link from 'next/link';
import React from 'react';
import Logo from 'src/assets/Logo';
import useAggregate from 'src/graphql/hooks/useAggregate';
import * as TaskFilters from 'src/modules/Tasks/filters';
import { useStore } from 'src/store';

export default () => {
  const { colorMode, toggleColorMode, date } = useColorMode();
  const { toggleFormPopup } = useStore((state) => ({
    toggleFormPopup: state.toggleFormPopup,
    date: state.ui.date,
  }));
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
  return (
    <Flex
      position={'fixed'}
      w={'100%'}
      zIndex={1000}
      boxShadow={'none'}
      bg={colorMode === 'light' ? 'white' : '#333'}
      direction="row"
      borderBottomWidth={1}
      borderBottom="gray.200"
      alignItems={'center'}
      py={1}
      pl={4}
      width="100%"
    >
      <Box alignItems={'center'} cursor={'pointer'}>
        <NextLink href="/" as={`/`}>
          <Box alignSelf={'center'} mr={4}>
            <Logo width={30} height={30} />
          </Box>
        </NextLink>
      </Box>
      <Box>
        <Link href="/teams" as={`/teams`}>
          <Button variant={'ghost'} size={'sm'} mr={4}>
            Teams
          </Button>
        </Link>
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
            <MenuItem onClick={() => toggleFormPopup('tasks')}>Task</MenuItem>
            <MenuItem onClick={() => toggleFormPopup('water')}>Water</MenuItem>
            <MenuItem onClick={() => toggleFormPopup('glucose')}>
              Glucose
            </MenuItem>
            <MenuItem onClick={() => toggleFormPopup('transactions')}>
              Transaction
            </MenuItem>
            <MenuItem onClick={() => toggleFormPopup('dishes')}>Dish</MenuItem>
            <Divider />
            <MenuItem onClick={() => toggleFormPopup('teams')}>Team</MenuItem>
            <MenuItem onClick={() => toggleFormPopup('projects')}>
              Project
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box flexGrow={1}></Box>
      <Stack
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
          borderColor={colorMode === 'light' ? 'gray.300' : ''}
          color={
            progressPercentage > 85
              ? 'green'
              : progressPercentage < 25
              ? 'red'
              : 'yellow'
          }
          value={todayTasksAgg ? progressPercentage : 0}
          w={200}
          borderRadius={5}
        />
      </Stack>
      <Tooltip label={'Notifications'}>
        <IconButton variant="default" icon={'bell'} onClick={toggleColorMode} />
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

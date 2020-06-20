import {
  Box,
  Stack,
  Button,
  Divider,
  Heading,
  Select,
  FormControl,
  FormLabel,
  useColorMode,
} from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import DatePicker from 'src/components/DatePicker';
import Card from 'src/components/Card';
import Tasks from 'src/modules/Tasks';
import moment from 'moment';
import * as TaskFilters from 'src/modules/Tasks/filters';
export default () => {
  const { colorMode } = useColorMode();
  const [filters, setFilters] = useState(undefined);
  const [activePreset, setActivePreset] = useState('today');
  const [team, setTeam] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [date, setDate] = useState(moment().toISOString(true));
  const activateTodayFilter = () => {
    setActivePreset('today');
    setFilters(TaskFilters.activeToday(date));
  };
  const activateBacklogFilter = () => {
    setActivePreset('backlog');
    setFilters(TaskFilters.backlog());
  };
  const activateOverdueFilter = () => {
    setActivePreset('overdue');
    setFilters(TaskFilters.overDue(date));
  };
  const activateNext7DaysFilter = () => {
    setActivePreset('next7days');
    setFilters(TaskFilters.activeNext7Days(date));
  };
  useEffect(() => {
    let result = {};
    if (team !== '') {
      result = { ...result, team: { _eq: team } };
    }
    if (status !== '') {
      result = { ...result, status: { _eq: status } };
    }
    if (priority !== '') {
      result = { ...result, priority: { _eq: priority } };
    }
    if (priority !== '') {
      result = { ...result, priority: { _eq: priority } };
    }
    if (date !== '') {
      result = {
        ...result,
        _and: [
          { due_date: { _gte: moment(date).startOf('day').toISOString(true) } },
          { due_date: { _lte: moment(date).endOf('day').toISOString(true) } },
        ],
      };
    }
    setFilters(result);
  }, [team, status, priority, date]);
  useEffect(() => {
    activateTodayFilter();
  }, []);

  return (
    <Box>
      <Stack isInline>
        <Card m={0} borderRadius={0} p={0}>
          <Stack h={'100vh'} px={2}>
            <Heading size={'md'}>Filters</Heading>

            <Button
              bg={
                activePreset === 'today'
                  ? colorMode === 'light'
                    ? 'gray.300'
                    : '#3e4242'
                  : ''
              }
              onClick={activateTodayFilter}
              justifyContent={'flex-start'}
              w={'100%'}
              variant={'ghost'}
            >
              Today
            </Button>
            <Button
              bg={
                activePreset === 'backlog'
                  ? colorMode === 'light'
                    ? 'gray.300'
                    : '#3e4242'
                  : ''
              }
              onClick={activateBacklogFilter}
              justifyContent={'flex-start'}
              w={'100%'}
              variant={'ghost'}
            >
              Backlog
            </Button>
            <Button
              bg={
                activePreset === 'overdue'
                  ? colorMode === 'light'
                    ? 'gray.300'
                    : '#3e4242'
                  : ''
              }
              onClick={activateOverdueFilter}
              justifyContent={'flex-start'}
              w={'100%'}
              variant={'ghost'}
            >
              Overdue
            </Button>
            <Button
              bg={
                activePreset === 'next7days'
                  ? colorMode === 'light'
                    ? 'gray.300'
                    : '#3e4242'
                  : ''
              }
              onClick={activateNext7DaysFilter}
              justifyContent={'flex-start'}
              w={'100%'}
              variant={'ghost'}
            >
              Next 7 days
            </Button>
            <Divider />
            <FormControl mt={5}>
              <FormLabel>Team</FormLabel>
              <Select
                size={'sm'}
                name="team"
                onChange={(e) => setTeam(e.target.value)}
                value={team}
              >
                <option value={''}>All</option>
                <option value={'vndly'}>VNDLY</option>
                <option value={'family'}>Family</option>
                <option value={'relationships'}>Relationships</option>
                <option value={'knowledge'}>Knowledge</option>
                <option value={'health'}>Health</option>
                <option value={'nutrition'}>Nutrition</option>
                <option value={'home'}>Home</option>
                <option value={'personal'}>Personal</option>
                <option value={'finance'}>Finance</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Priority</FormLabel>
              <Select
                size={'sm'}
                onChange={(e) => setPriority(e.target.value)}
                name="priority"
                value={priority}
              >
                <option value={''}>All</option>
                <option value={'very_high'}>Very High</option>
                <option value={'high'}>High</option>
                <option value={'medium'}>Medium</option>
                <option value={'low'}>Low</option>
                <option value={'very_low'}>Very Low</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Status</FormLabel>
              <Select
                size={'sm'}
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value={''}>All</option>
                <option value={'todo'}>To Do</option>
                <option value={'in_progress'}>In Progress</option>
                <option value={'completed'}>Completed</option>
              </Select>
            </FormControl>
            <FormControl display={'grid'}>
              <FormLabel>Due Date</FormLabel>
              <DatePicker
                selected={moment(date)}
                type={'input'}
                includeTime={false}
                onChange={(e) => setDate(e.toISOString(true))}
              />
            </FormControl>
            <Divider />
          </Stack>
        </Card>
        <Box w={'100%'}>
          <Stack spacing={10} w={'100%'}>
            <Box w={'100%'} p={5}>
              <Tasks.List
                order_by={{
                  team: 'asc',
                  due_date: 'asc',
                }}
                where={filters}
              />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

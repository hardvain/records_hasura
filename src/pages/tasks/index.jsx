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
  Flex,
} from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import DatePicker from 'src/components/DatePicker';
import Card from 'src/components/Card';
import Tasks from 'src/modules/Tasks';
import moment from 'moment';
import * as TaskFilters from 'src/modules/Tasks/filters';
import ResourceSelector from 'src/components/collection/Selector';
export default () => {
  const { colorMode } = useColorMode();
  const [filters, setFilters] = useState(undefined);
  const [activePreset, setActivePreset] = useState('today');
  const [team, setTeam] = useState('');
  const [project, setProject] = useState('');
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
  const activateAllFilter = () => {
    setActivePreset('all');
    setFilters();
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
    if (project !== '') {
      result = { ...result, project_id: { _eq: project } };
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
  }, [team, status, priority, date, project]);
  useEffect(() => {
    activateTodayFilter();
  }, []);
  return (
    <Box>
      <Box w={'100%'}>
        <Stack  isInline w={'100%'}>
          <Box m={0} borderRadius={0} px={2} py={5} borderRightWidth={1} width={300}>
            <Flex h={'100vh'} px={2} direction={'column'}>
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
              <Button
                bg={
                  activePreset === 'all'
                    ? colorMode === 'light'
                      ? 'gray.300'
                      : '#3e4242'
                    : ''
                }
                onClick={activateAllFilter}
                justifyContent={'flex-start'}
                w={'100%'}
                variant={'ghost'}
              >
                All
              </Button>
            </Flex>
          </Box>
          <Box w={'100%'} p={2}>
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
    </Box>
  );
};

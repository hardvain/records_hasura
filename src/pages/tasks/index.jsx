import {
  Box,
  Stack,
  Button,
  Divider,
  useColorMode,
  Flex,
} from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import Tasks from 'src/modules/Tasks';
import moment from 'moment';
import * as TaskFilters from 'src/modules/Tasks/filters';

const TaskButton = ({activePreset,filter,label}) => {
  const { colorMode } = useColorMode();

  return <Button
    bg={
      activePreset === 'today'
        ? colorMode === 'light'
        ? 'brand.50'
        : '#3e4242'
        : ''
    }
    onClick={filter}
    justifyContent={'flex-start'}
    w={'100%'}
    variant={'ghost'}
  >
    {label}
  </Button>

}

export default () => {
  const [filters, setFilters] = useState(undefined);
  const [activePreset, setActivePreset] = useState('today');
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
    activateTodayFilter();
  }, []);
  return (
    <Box>
      <Box w={'100%'}>
        <Stack isInline w={'100%'}>
          <Box
            m={0}
            borderRadius={0}
            py={5}
            borderRightWidth={1}
            width={300}
          >
            <Flex h={'100vh'} px={2} direction={'column'}>
              <TaskButton activePreset={'today'} filter={activateTodayFilter} label={'Today'}/>
              <TaskButton activePreset={'backlog'} filter={activateBacklogFilter} label={'Backlog'}/>
              <TaskButton activePreset={'overdue'} filter={activateOverdueFilter} label={'Overdue'}/>
              <TaskButton activePreset={'next7days'} filter={activateNext7DaysFilter} label={'Next 7 days'}/>
              <TaskButton activePreset={'all'} filter={activateAllFilter} label={'All'}/>
              <Divider />
              <TaskButton activePreset={''} filter={activateTodayFilter} label={'VNDLY'}/>
              <TaskButton activePreset={''} filter={activateTodayFilter} label={'Tenure Policy'}/>
              <TaskButton activePreset={''} filter={activateTodayFilter} label={'Next JS'}/>
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

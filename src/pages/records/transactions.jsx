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
import Transactions from 'src/modules/Transactions';
import moment from 'moment';

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
    setFilters({
      _and: [
        {
          timestamp: {
            _gte: moment(date).startOf('day').toISOString(true),
          },
        },
        {
          timestamp: {
            _lte: moment(date).endOf('day').toISOString(true),
          },
        },
      ],
    });
  };
  const activateBacklogFilter = () => {
    setActivePreset('backlog');
  };
  const activateOverdueFilter = () => {
    setActivePreset('overdue');
  };
  const activateNext7DaysFilter = () => {
    setActivePreset('next7days');
  };
  useEffect(() => {
    let result = {};
  }, [team, status, priority, date]);
  useEffect(() => {
    activateTodayFilter();
  }, []);

  return (
    <Box>
      <Stack isInline>
        <Box m={0} borderRadius={0} px={2} py={5} borderRightWidth={1} width={300}>
          <Stack h={'100vh'}>

            <Button
              bg={
                activePreset === 'today'
                  ? colorMode === 'light'
                    ? 'brand.50'
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
                    ? 'brand.50'
                    : '#3e4242'
                  : ''
              }
              onClick={activateBacklogFilter}
              justifyContent={'flex-start'}
              w={'100%'}
              variant={'ghost'}
            >
              Expenses This Week
            </Button>
            <Button
              bg={
                activePreset === 'overdue'
                  ? colorMode === 'light'
                    ? 'brand.50'
                    : '#3e4242'
                  : ''
              }
              onClick={activateOverdueFilter}
              justifyContent={'flex-start'}
              w={'100%'}
              variant={'ghost'}
            >
              Expenses This Month
            </Button>
            <Button
              bg={
                activePreset === 'next7days'
                  ? colorMode === 'light'
                    ? 'brand.50'
                    : '#3e4242'
                  : ''
              }
              onClick={activateNext7DaysFilter}
              justifyContent={'flex-start'}
              w={'100%'}
              variant={'ghost'}
            >
              Income
            </Button>
            <Button
              bg={
                activePreset === 'next7days'
                  ? colorMode === 'light'
                  ? 'brand.50'
                  : '#3e4242'
                  : ''
              }
              onClick={activateNext7DaysFilter}
              justifyContent={'flex-start'}
              w={'100%'}
              variant={'ghost'}
            >
              Upcoming Expenses
            </Button>

          </Stack>
        </Box>
        <Box w={'100%'}>
          <Stack spacing={10} w={'100%'}>
            <Box w={'100%'} p={5}>
              <Transactions.List
                order_by={{
                  team: 'asc',
                  timestamp: 'desc',
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

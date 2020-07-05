import {
  Box,
  Button,
  IconButton,
  Select,
  Skeleton,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/core';

import Link from 'next/link';
import React, { useState } from 'react';
import Card from 'src/components/core/card';
import * as DatePicker from 'src/components/forms/DatePicker';
import useQuery from 'src/hooks/graphql/useQuery';
import * as TaskFilters from 'src/modules/Tasks/filters';
import moment from 'moment';
import DayView from './Day';
import MonthView from './Month';
import WeekView from './Week';
const PreviewCard = ({ record }) => {
  const { colorMode } = useColorMode();

  const statusColor =
    record.status === 'todo'
      ? 'yellow'
      : record.status === 'in_progress'
      ? 'blue'
      : 'green';
  return (
    <Link as={`/tasks/${record.id}`} href={`/tasks/[id]`}>
      <Card
        borderWidth={1}
        borderRadius={5}
        px={5}
        py={1}
        mb={4}
        w={'100%'}
        cursor={'pointer'}
        borderLeftWidth={1}
        borderColor={`${statusColor}.900`}
        bg={`${statusColor}.50`}
        color={'black'}
        minHeight={50}
        maxHeight={120}
      >
        <Stack>
          <Text fontSize={14}>{record.name}</Text>
          <Text fontSize={12}>
            {record.due_date
              ? moment(record.due_date).format('Do, MMMM YYYY, HH:mm')
              : '-'}
          </Text>
          {record?.ref_project && (
            <Text fontSize={12}>{record?.ref_project?.name}</Text>
          )}
        </Stack>
      </Card>
    </Link>
  );
};

export default () => {
  const [view, setView] = useState('day');
  const [date, setDate] = useState(moment());
  const fields = [
    'id',
    'name',
    'due_date',
    'priority',
    'status',
    'ref_project{name,ref_team{name}}',
  ];
  let filters;
  switch (view) {
    case 'day':
      filters = TaskFilters.today(date);
      break;
    case 'month':
      filters = TaskFilters.month(date);
      break;
    case 'week':
      filters = TaskFilters.week(date);
      break;
    default:
      filters = { _and: [] };
  }
  const [tasks] = useQuery({
    name: 'tasks',
    where: filters,
    fields,
  });
  return (
    <Box>
      <Stack isInline minHeight={'100vh'} spacing={0}>
        <Stack flex={3}>
          <Stack
            isInline
            borderBottomWidth={1}
            px={5}
            py={2}
            alignItems={'center'}
          >
            <Button flex={1} size={'sm'} variant={'outline'}>
              Today
            </Button>
            <Stack isInline flex={1}>
              <IconButton
                size={'sm'}
                icon={'chevron-left'}
                variant={'solid'}
                onClick={() => {
                  setDate(moment(date).subtract(1, 'days'));
                }}
              />
              <IconButton
                onClick={() => {
                  setDate(moment(date).add(1, 'days'));
                }}
                size={'sm'}
                icon={'chevron-right'}
                variant={'solid'}
              />
            </Stack>
            <Box flex={2}>
              <DatePicker.Default type={'button'} onChange={setDate} selected={date} />
            </Box>

            <Box flexGrow={1} flex={10} />
            <Select
              size={'sm'}
              flex={2}
              value={view}
              onChange={(e) => setView(e.target.value)}
            >
              <option value={'day'}>Day</option>
              <option value={'week'}>Week</option>
              <option value={'month'}>Month</option>
              <option value={'schedule'}>Schedule</option>
            </Select>
          </Stack>
          {view === 'day' && <DayView tasks={tasks} date={date} />}
          {view === 'month' && <MonthView tasks={tasks} date={date} />}
          {view === 'week' && <WeekView tasks={tasks} date={date} />}
        </Stack>
        {view === 'day' && (
          <Stack
            flex={1}
            borderLeftWidth={1}
            p={3}
            spacing={10}
            overflowY={'scroll'}
          >
            {tasks &&
              tasks.length > 0 &&
              tasks.map((task) => <PreviewCard record={task} key={task.id} />)}
            {!tasks && (
              <Stack>
                {[...Array(10).keys()].map((k) => (
                  <Skeleton h={20} py={5} key={k} />
                ))}
              </Stack>
            )}
            {tasks && tasks.length === 0 && (
              <Stack
                w={'100%'}
                alignItems={'center'}
                h={100}
                justifyContent={'center'}
              >
                <Box>No Results Found.</Box>
                <Button
                  leftIcon={'small-add'}
                  variant={'solid'}
                  variantColor={'brand'}
                  size={'sm'}
                >
                  Add New
                </Button>
              </Stack>
            )}
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

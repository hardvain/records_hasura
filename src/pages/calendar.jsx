import {
  Box,
  Button,
  IconButton,
  Select,
  Skeleton,
  Stack,
  Text,
  Flex,
  SimpleGrid,
  Tag,
} from '@chakra-ui/core';
import { useStore } from 'src/store';
import { groupBy } from 'src/utils';

import Link from 'next/link';
import React, { useState } from 'react';
import Card from 'src/components/Card';
import ListItem from 'src/components/collection/List/ListItem';
import DatePicker from 'src/components/DatePicker';
import useQuery from 'src/graphql/hooks/useQuery';
import Tasks from 'src/modules/Tasks';
import * as TaskFilters from 'src/modules/Tasks/filters';
import Collection from 'src/components/collection';
import moment from 'moment';
import Preview from 'src/modules/Tasks/preview';
const PreviewCard = ({ record }) => {
  const statusColor =
    record.status === 'todo'
      ? 'yellow'
      : record.status === 'in_progress'
      ? 'blue'
      : 'green';
  return (
    <Link as={`/tasks/${record.id}`} href={`/tasks/[id]`}>
      <Box
        borderWidth={1}
        borderRadius={5}
        px={5}
        py={1}
        mb={4}
        w={400}
        cursor={'pointer'}
        borderLeftWidth={5}
        borderLeftColor={`${statusColor}.500`}
      >
        <Stack>
          <Text>{record.name}</Text>
          <Text fontSize={12}>
            {record.due_date
              ? moment(record.due_date).format('Do, MMMM YYYY, HH:mm')
              : '-'}
          </Text>
          {record?.ref_project && (
            <Text fontSize={12}>{record?.ref_project?.name}</Text>
          )}
        </Stack>
      </Box>
    </Link>
  );
};

const HourView = ({ hour, groupedTasks, date }) => {
  const { setNewFormContext, toggleFormPopup } = useStore((state) => ({
    setNewFormContext: state.setNewFormContext,
    toggleFormPopup: state.toggleFormPopup,
  }));
  const addTask = () => {
    const due_date = moment(date).hours(hour).minutes(0);
    setNewFormContext({ due_date: due_date.toISOString(true) });
    toggleFormPopup('tasks');
  };
  const tasks = groupedTasks[hour];
  return (
    <Box
      minHeight={100}
      key={hour}
      borderBottomWidth={1}
      py={1}
      onClick={addTask}
    >
      <Stack w={'100%'}>
        <Box px={2}>
          <Text fontSize={10}>{hour}:00</Text>
        </Box>
        {tasks &&
          tasks.map((t) => (
            <Box px={2} w={'100%'} onClick={e => {
              e.preventDefault();
              e.stopPropagation()
            }}>
              <Link href={`/tasks/[id]`} as={`/tasks/${t.id}`}>
                <Button
                  size={'xs'}
                  variant={'outline'}
                  variantColor={'brand'}
                  w={'100%'}
                  justifyContent={'flex-start'}
                >
                  <Text fontSize={12} key={t.id}>
                    {t.name}
                  </Text>
                </Button>
              </Link>
            </Box>
          ))}
      </Stack>
    </Box>
  );
};
const DayView = ({ tasks, date }) => {
  const groupedTasks = groupBy(tasks || [], (t) => {
    if (t.due_date) {
      const hour = moment(t.due_date).format('HH');
      if (hour === '0' || hour === '00') {
        return '-';
      } else {
        return parseInt(hour);
      }
    } else {
      return '-';
    }
  });
  return (
    <Stack overflowY={'scroll'}>
      {[...Array(24).keys()].map((i) => (
        <HourView hour={i} groupedTasks={groupedTasks} date={date} />
      ))}
    </Stack>
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
  const [tasks] = useQuery({
    name: 'tasks',
    where: TaskFilters.today(date),
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
              <DatePicker type={'button'} onChange={setDate} selected={date} />
            </Box>

            <Box flexGrow={1} flex={10} />
            <Select size={'sm'} flex={2}>
              <option value={'day'}>Day</option>
              <option value={'week'}>Week</option>
              <option value={'month'}>Month</option>
              <option value={'schedule'}>Schedule</option>
            </Select>
          </Stack>
          <DayView tasks={tasks} date={date} />
        </Stack>
        <Stack
          flex={1}
          borderLeftWidth={1}
          p={3}
          spacing={10}
          overflowY={'scroll'}
        >
          <Text>Tasks</Text>
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
      </Stack>
    </Box>
  );
};

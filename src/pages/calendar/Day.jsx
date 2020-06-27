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
  Grid,
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
      minHeight={tasks ? tasks.length * 10 : 50}
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
          <Box
            px={2}
            w={'100%'}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Link href={`/tasks/[id]`} as={`/tasks/${t.id}`}>
              <Button
                size={'xs'}
                variant={'outline'}
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
export default ({ tasks, date }) => {
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
        <HourView hour={i} groupedTasks={groupedTasks} date={date} key={i} />
      ))}
    </Stack>
  );
};

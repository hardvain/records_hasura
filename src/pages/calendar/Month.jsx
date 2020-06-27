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

const MonthDay = ({ day, groupedTasks, date }) => {
  const tasks = groupedTasks[day];
  const { setNewFormContext, toggleFormPopup } = useStore((state) => ({
    setNewFormContext: state.setNewFormContext,
    toggleFormPopup: state.toggleFormPopup,
  }));
  const addTask = () => {
    const due_date = moment(date).date(day).hours(0).minutes(0);
    setNewFormContext({ due_date: due_date.toISOString(true) });
    toggleFormPopup('tasks');
  };
  return (
    <Box h={200} borderWidth={1} minWidth={150} w={'100%'} onClick={addTask}>
      <Stack>
        <Text textAlign={'center'}>{day}</Text>
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
                  overflow={'hidden'}
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
export default ({ tasks }) => {
  const groupedTasks = groupBy(tasks || [], (t) => {
    if (t.due_date) {
      return moment(t.due_date).format('DD');
    } else {
      return '-';
    }
  });
  return (
    <Grid templateColumns="repeat(7, 1fr)" w={'100%'}>
      {[...Array(30).keys()].map((k) => (
        <MonthDay key={k} day={k + 1} groupedTasks={groupedTasks} />
      ))}
    </Grid>
  );
};

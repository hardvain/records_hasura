import { Flex, Box, Stack } from '@chakra-ui/core';
import moment from 'moment';
import React from 'react';
import { groupBy } from 'src/utils';

export default ({ tasks }) => {
  const groupedTasks = groupBy(tasks || [], (t) => {
    if (t.due_date) {
      return (
        moment(t.due_date).week() -
        moment(t.due_date).startOf('month').week() +
        1
      );
    } else {
      return '-';
    }
  });
  return (
    <Flex direction={'column'}>
      {[...Array(24).keys()].map((hour) => (
        <Flex direction={'row'} spacing={0} key={hour}>
          <Box h={75} borderWidth={1} flex={1} textAlign={'center'}>
            123
          </Box>
          {[...Array(7).keys()].map((day) => (
            <Box flex={2} h={75} borderWidth={1} key={day} />
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

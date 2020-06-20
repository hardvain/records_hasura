import {
  Box,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Progress,
  Text,
  Divider,
  Heading,
} from '@chakra-ui/core';
import moment from 'moment';
import React from 'react';
import Task from 'src/assets/Task';
import Card from 'src/components/Card';
import Tasks from 'src/modules/Tasks';
import Water from 'src/modules/Water';
import { useStore } from 'src/store';
export default () => {
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));
  return (
    <Water.Aggregate
      where={{
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
      }}
    >
      {(data) => (
        <Stack spacing={10} isInline>
          <Stat>
            <StatLabel>Water Consumption</StatLabel>
            <Heading size={'lg'}>{data.sum.quantity} Ml</Heading>
            out of 3000 ML
          </Stat>
          <Divider borderWidth={2} orientation={'vertical'} />
          <Stat>
            <StatLabel>Number of Intakes</StatLabel>
            <Heading size={'lg'}>{data.count}</Heading>
          </Stat>
        </Stack>
      )}
    </Water.Aggregate>
  );
};

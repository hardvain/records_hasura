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
import Glucose from 'src/modules/Glucose';
import Tasks from 'src/modules/Tasks';
import Water from 'src/modules/Water';
import { useStore } from 'src/store';
export default () => {
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));
  return (
    <Glucose.Aggregate
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
            <StatLabel>Average Glucose</StatLabel>
            <StatNumber>{Math.ceil(data.avg.value)}</StatNumber>
          </Stat>
          <Divider borderWidth={2} orientation={'vertical'} />

          <Stat>
            <StatLabel>Max Glucose</StatLabel>
            <StatNumber>{data.max.value}</StatNumber>
          </Stat>
          <Divider borderWidth={2} orientation={'vertical'} />

          <Stat>
            <StatLabel>Min Glucose</StatLabel>
            <StatNumber>{data.min.value}</StatNumber>
          </Stat>
        </Stack>
      )}
    </Glucose.Aggregate>
  );
};

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
import useAggregate from 'src/graphql/hooks/useAggregate';
import Glucose from 'src/modules/Glucose';
import Tasks from 'src/modules/Tasks';
import * as GlucoseFilters from 'src/modules/Glucose/filters';
import Water from 'src/modules/Water';
import { useStore } from 'src/store';
export default () => {
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));
  const [today] = useAggregate({
    name: 'glucose',
    where: GlucoseFilters.today(date),
    aggregates: { avg: ['value'], max: ['value'], min: ['value'] },
  });
  return (
    <Stack spacing={10} isInline>
      <Stat>
        <StatLabel>Average Glucose</StatLabel>
        <StatNumber>{today ? Math.ceil(today.avg.value) : ''}</StatNumber>
      </Stat>
      <Divider borderWidth={2} orientation={'vertical'} />

      <Stat>
        <StatLabel>Max Glucose</StatLabel>
        <StatNumber>{today?.max.value}</StatNumber>
      </Stat>
      <Divider borderWidth={2} orientation={'vertical'} />

      <Stat>
        <StatLabel>Min Glucose</StatLabel>
        <StatNumber>{today?.min.value}</StatNumber>
      </Stat>
    </Stack>
  );
};

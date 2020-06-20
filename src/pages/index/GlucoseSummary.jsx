import { Stack, Stat, StatLabel, StatNumber, Divider } from '@chakra-ui/core';
import React from 'react';
import useAggregate from 'src/graphql/hooks/useAggregate';
import * as GlucoseFilters from 'src/modules/Glucose/filters';
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

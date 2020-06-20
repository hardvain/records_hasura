import {
  Stack,
  Stat,
  StatLabel,
  Divider,
  Heading,
} from '@chakra-ui/core';
import React from 'react';
import useAggregate from 'src/graphql/hooks/useAggregate';
import * as WaterFilters from 'src/modules/Water/filters';
import { useStore } from 'src/store';
export default () => {
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));
  const [todayAgg] = useAggregate({
    name: 'water',
    where: WaterFilters.today(date),
    aggregates: { count: [], sum:['quantity'] },
  });
  return (
    <Stack spacing={10} isInline>
      <Stat>
        <StatLabel>Water Consumption</StatLabel>
        <Heading size={'lg'}>{todayAgg?.sum.quantity} Ml</Heading>
        out of 3000 ML
      </Stat>
      <Divider borderWidth={2} orientation={'vertical'} />
      <Stat>
        <StatLabel>Number of Intakes</StatLabel>
        <Heading size={'lg'}>{todayAgg?.count}</Heading>
      </Stat>
    </Stack>
  );
};

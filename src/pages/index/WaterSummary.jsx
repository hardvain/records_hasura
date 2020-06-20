import { Stack, Progress, Text } from '@chakra-ui/core';
import React from 'react';
import useAggregate from 'src/graphql/hooks/useAggregate';
import useView from 'src/graphql/hooks/useView';
import * as WaterFilters from 'src/modules/Water/filters';

import { useStore } from 'src/store';
export default () => {
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));
  const [todayAgg] = useAggregate({
    name: 'water',
    where: WaterFilters.today(date),
    aggregates: { count: [], sum: ['quantity'] },
  });
  const [water_till_now] = useView({ name: 'water_till_now', fields: `{avg}` });
  const percentage = Math.ceil((todayAgg?.sum.quantity * 100) / 3000) || 0;
  const pastAvg = water_till_now ? Math.ceil(water_till_now[0].avg) : 0;
  const pastPercentage = Math.ceil((pastAvg * 100) / 3000);
  const isTodayAhead = percentage > pastPercentage;
  return (
    <Stack spacing={10} isInline>
      <Stack w={'100%'} m={2} spacing={5}>
        <Stack isInline>
          <Text>Today's Consumption:</Text>
          <Text>{todayAgg?.sum.quantity} / 3000 ML</Text>
        </Stack>
        <Progress
          hasStripe
          isAnimated
          value={percentage}
          color={isTodayAhead ? 'green' : 'red'}
        />
        <Stack isInline>
          <Text>Consumption on previous days till this time:</Text>
          <Text>{pastAvg} / 3000 ML</Text>
        </Stack>
        <Progress hasStripe isAnimated value={pastPercentage} />
      </Stack>
    </Stack>
  );
};

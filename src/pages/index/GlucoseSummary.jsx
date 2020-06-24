import {
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Divider,
  Heading,
  Text,
  Progress,
} from '@chakra-ui/core';
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
    <>
      <Stack w={'100%'} p={1} spacing={5} isInline alignItems={'center'}>
        <Stack alignItems={'center'}>
          <Heading mt={2} size={'md'}>
            Sugar
          </Heading>
        </Stack>
        <Stack w={'100%'}>
          <Stack isInline>
            <Text>Average Glucose:</Text>
            <Text>{today ? Math.ceil(today.avg.value) : ''}</Text>
          </Stack>
          <Stack isInline>
            <Text>Max Glucose:</Text>
            <Text>{today?.max.value}</Text>
          </Stack>

          <Stack isInline>
            <Text>Min Glucose:</Text>
            <Text>{today?.min.value}</Text>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

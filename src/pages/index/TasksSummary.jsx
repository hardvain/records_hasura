import {
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Divider,
  Heading,
} from '@chakra-ui/core';
import  useAggregate  from 'src/graphql/hooks/useAggregate';
import { useStore } from 'src/store';
import * as TaskFilters from 'src/modules/Tasks/filters';
export default () => {
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));
  const [totalAgg] = useAggregate({
    name: 'tasks',
    where: TaskFilters.today(date),
    aggregates: { count: [] },
  });
  const [completedAgg] = useAggregate({
    name: 'tasks',
    where: TaskFilters.todayCompleted(date),
    aggregates: { count: [] },
  });
  const [overdueAgg] = useAggregate({
    name: 'tasks',
    where: TaskFilters.overDue(date),
    aggregates: { count: [] },
  });
  const [backlogAgg] = useAggregate({
    name: 'tasks',
    where: TaskFilters.backlog(),
    aggregates: { count: [] },
  });
  const [highPrioCompletedAgg] = useAggregate({
    name: 'tasks',
    where: TaskFilters.highPrioCompleted(date),
    aggregates: { count: [] },
  });
  const [highPrioTotalAgg] = useAggregate({
    name: 'tasks',
    where: TaskFilters.highPrio(date),
    aggregates: { count: [] },
  });
  return (
    <Stack spacing={10} isInline>
      <Stat>
        <StatLabel>Total</StatLabel>
        <Heading size={'lg'}>
          {completedAgg?.count} / {totalAgg?.count}{' '}
        </Heading>
        tasks completed
      </Stat>
      <Divider borderWidth={2} orientation={'vertical'} />
      <Stat>
        <StatLabel>Backlog</StatLabel>
        <StatNumber>{backlogAgg?.count}</StatNumber>
      </Stat>
      <Divider borderWidth={2} orientation={'vertical'} />
      <Stat>
        <StatLabel>Overdue</StatLabel>
        <StatNumber>{overdueAgg?.count}</StatNumber>
      </Stat>
      <Divider borderWidth={2} orientation={'vertical'} />
      <Stat>
        <StatLabel>High Priority</StatLabel>
        <Heading size={'lg'}>
          {highPrioCompletedAgg?.count} / {highPrioTotalAgg?.count}{' '}
        </Heading>
        tasks completed
      </Stat>
    </Stack>
  );
};

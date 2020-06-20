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
  const [total] = useAggregate({
    name: 'tasks',
    where: TaskFilters.today(date),
    aggregates: { count: [] },
  });
  const [completed] = useAggregate({
    name: 'tasks',
    where: TaskFilters.todayCompleted(date),
    aggregates: { count: [] },
  });
  const [overdue] = useAggregate({
    name: 'tasks',
    where: TaskFilters.overDue(date),
    aggregates: { count: [] },
  });
  const [backlog] = useAggregate({
    name: 'tasks',
    where: TaskFilters.backlog(),
    aggregates: { count: [] },
  });
  const [highPrioCompleted] = useAggregate({
    name: 'tasks',
    where: TaskFilters.highPrioCompleted(date),
    aggregates: { count: [] },
  });
  const [highPrioTotal] = useAggregate({
    name: 'tasks',
    where: TaskFilters.highPrio(date),
    aggregates: { count: [] },
  });
  return (
    <Stack spacing={10} isInline>
      <Stat>
        <StatLabel>Total</StatLabel>
        <Heading size={'lg'}>
          {completed?.count} / {total?.count}{' '}
        </Heading>
        tasks completed
      </Stat>
      <Divider borderWidth={2} orientation={'vertical'} />
      <Stat>
        <StatLabel>Backlog</StatLabel>
        <StatNumber>{backlog?.count}</StatNumber>
      </Stat>
      <Divider borderWidth={2} orientation={'vertical'} />
      <Stat>
        <StatLabel>Overdue</StatLabel>
        <StatNumber>{overdue?.count}</StatNumber>
      </Stat>
      <Divider borderWidth={2} orientation={'vertical'} />
      <Stat>
        <StatLabel>High Priority</StatLabel>
        <Heading size={'lg'}>
          {highPrioCompleted?.count} / {highPrioTotal?.count}{' '}
        </Heading>
        tasks completed
      </Stat>
    </Stack>
  );
};

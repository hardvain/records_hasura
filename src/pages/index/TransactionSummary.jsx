import { Stack, Stat, StatLabel, Divider, Heading } from '@chakra-ui/core';
import useAggregate from 'src/graphql/hooks/useAggregate';
import * as TransactionFilters from 'src/modules/Transactions/filters';
import { useStore } from 'src/store';
export default () => {
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));
  const [today] = useAggregate({
    name: 'transactions',
    where: TransactionFilters.today(date),
    aggregates: { sum: ['value'] },
  });
  const [expenses] = useAggregate({
    name: 'transactions',
    where: TransactionFilters.expenses(date),
    aggregates: { sum: ['value'] },
  });
  const [incomes] = useAggregate({
    name: 'transactions',
    where: TransactionFilters.incomes(date),
    aggregates: { sum: ['value'] },
  });
  return (
    <Stack spacing={10} isInline>
      <Stat>
        <StatLabel>Transactions</StatLabel>
        <Heading size={'lg'}>{today ? today?.sum.value : '-'}</Heading>
      </Stat>
      <Divider borderWidth={2} orientation={'vertical'} />
      <Stat>
        <StatLabel>Expenses</StatLabel>
        <Heading size={'lg'}>{expenses ? expenses?.sum.value : '-'}</Heading>
      </Stat>
      <Divider borderWidth={2} orientation={'vertical'} />
      <Stat>
        <StatLabel>Incomes</StatLabel>
        <Heading size={'lg'}>{incomes ? incomes?.sum.value : '-'}</Heading>
      </Stat>
    </Stack>
  );
};

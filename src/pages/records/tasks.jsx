import { Box, Stack, Stat, StatLabel, StatNumber } from '@chakra-ui/core';
import Card from 'src/components/Card';
import Tasks from 'src/modules/Tasks';
import { useStore } from 'src/store';
export default () => {
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));
  return (
    <Box py={30}>
      <Tasks.Aggregate
        where={{
          _and: [
            { due_date: { _gte: date.startOf('day').toISOString(true) } },
            { due_date: { _lte: date.endOf('day').toISOString(true) } },
          ],
        }}
      >
        {(data) => (
          <Card title={'Stats'}>
            <Stack spacing={10} isInline>
              <Stat>
                <StatLabel>Total Tasks</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            </Stack>
          </Card>
        )}
      </Tasks.Aggregate>

      <Tasks.List
        where={{
          _and: [
            { due_date: { _gte: date.startOf('day').toISOString(true) } },
            { due_date: { _lte: date.endOf('day').toISOString(true) } },
          ],
        }}
      />
    </Box>
  );
};

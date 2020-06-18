import { Box, Stack, Stat, StatLabel, StatNumber } from '@chakra-ui/core';
import Card from 'src/components/Card';
import Tasks from 'src/modules/Tasks';
import Water from 'src/modules/Water';
import { useStore } from 'src/store';

export default () => {
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));
  return (
    <Box p={10}>
      <Card title={'Task Stats'}>
        <Stack spacing={10} isInline>
          <Tasks.Aggregate
            where={{
              _and: [
                { due_date: { _gte: date.startOf('day').toISOString(true) } },
                { due_date: { _lte: date.endOf('day').toISOString(true) } },
              ],
            }}
          >
            {(data) => (
              <Stat>
                <StatLabel>Total Tasks</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            )}
          </Tasks.Aggregate>
          <Tasks.Aggregate
            where={{
              _and: [{ due_date: { _is_null: true } }],
            }}
          >
            {(data) => (
              <Stat>
                <StatLabel>Backlog Tasks</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            )}
          </Tasks.Aggregate>
          <Tasks.Aggregate
            where={{
              _and: [
                { due_date: { _gte: date.startOf('day').toISOString(true) } },
                { due_date: { _lte: date.endOf('day').toISOString(true) } },
                { priority: { _eq: 'high' } },
              ],
            }}
          >
            {(data) => (
              <Stat>
                <StatLabel>High Priority Tasks</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            )}
          </Tasks.Aggregate>
          <Tasks.Aggregate
            where={{
              _and: [
                { due_date: { _gte: date.startOf('day').toISOString(true) } },
                { due_date: { _lte: date.endOf('day').toISOString(true) } },
                { priority: { _eq: 'very_high' } },
              ],
            }}
          >
            {(data) => (
              <Stat>
                <StatLabel>Very High Priority Tasks</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            )}
          </Tasks.Aggregate>
        </Stack>
      </Card>

      <Water.Aggregate
        where={{
          _and: [
            { timestamp: { _gte: date.startOf('day').toISOString(true) } },
            { timestamp: { _lte: date.endOf('day').toISOString(true) } },
          ],
        }}
      >
        {(data) => (
          <Card title={'Water Stats'}>
            <Stack spacing={10} isInline>
              <Stat>
                <StatLabel>Total Water Consumed</StatLabel>
                <StatNumber>{data.sum.quantity}</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Number of Intakes</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            </Stack>
          </Card>
        )}
      </Water.Aggregate>
    </Box>
  );
};

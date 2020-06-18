import { Box, Stack, Stat, StatLabel, StatNumber } from '@chakra-ui/core';
import Card from 'src/components/Card';
import Tasks from 'src/modules/Tasks';
import Water from 'src/modules/Water';
import moment from 'moment';
export default () => {
  const weekStart = moment().startOf('week').toISOString(true);
  const weekEnd = moment().endOf('week').toISOString(true);
  return (
    <Box p={10}>
      <Card title={'Task Stats'}>
        <Stack spacing={10} isInline>
          <Tasks.Aggregate
            where={{
              _and: [
                { due_date: { _gte: weekStart } },
                { due_date: { _lte: weekEnd } },
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
                { due_date: { _gte: weekStart } },
                { due_date: { _lte: weekEnd } },
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
                { due_date: { _gte: weekStart } },
                { due_date: { _lte: weekEnd } },
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
            { timestamp: { _gte: weekStart } },
            { timestamp: { _lte: weekEnd } },
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

import {
  Box,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Progress,
  Text,
} from '@chakra-ui/core';
import Task from 'src/assets/Task';
import Card from 'src/components/Card';
import TabCard from 'src/components/TabCard';
import Tasks from 'src/modules/Tasks';
import Water from 'src/modules/Water';
import { useStore } from 'src/store';
export default () => {
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));
  return (
    <Box p={10}>
      <TabCard title={'Task Summary'}>
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
                <StatLabel>Today</StatLabel>
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
                <StatLabel>Backlog</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            )}
          </Tasks.Aggregate>
          <Tasks.Aggregate
            where={{
              _and: [
                { due_date: { _lte: date.startOf('day').toISOString(true) } },
              ],
            }}
          >
            {(data) => (
              <Stat>
                <StatLabel>Overdue</StatLabel>
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
                <StatLabel>High Priority</StatLabel>
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
                <StatLabel>Very High Priority</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            )}
          </Tasks.Aggregate>
        </Stack>
      </TabCard>
      <TabCard title={'Transaction Summary'}>
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
                <StatLabel>Today</StatLabel>
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
                <StatLabel>Backlog</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            )}
          </Tasks.Aggregate>
          <Tasks.Aggregate
            where={{
              _and: [
                { due_date: { _lte: date.startOf('day').toISOString(true) } },
              ],
            }}
          >
            {(data) => (
              <Stat>
                <StatLabel>Overdue</StatLabel>
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
                <StatLabel>High Priority</StatLabel>
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
                <StatLabel>Very High Priority</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            )}
          </Tasks.Aggregate>
        </Stack>
      </TabCard>
      <TabCard title={'Health Stats'}>
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
                <StatLabel>Today</StatLabel>
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
                <StatLabel>Backlog</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            )}
          </Tasks.Aggregate>
          <Tasks.Aggregate
            where={{
              _and: [
                { due_date: { _lte: date.startOf('day').toISOString(true) } },
              ],
            }}
          >
            {(data) => (
              <Stat>
                <StatLabel>Overdue</StatLabel>
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
                <StatLabel>High Priority</StatLabel>
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
                <StatLabel>Very High Priority</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            )}
          </Tasks.Aggregate>
        </Stack>
      </TabCard>
      <TabCard title={'Glucose Stats'}>
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
                <StatLabel>Today</StatLabel>
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
                <StatLabel>Backlog</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            )}
          </Tasks.Aggregate>
          <Tasks.Aggregate
            where={{
              _and: [
                { due_date: { _lte: date.startOf('day').toISOString(true) } },
              ],
            }}
          >
            {(data) => (
              <Stat>
                <StatLabel>Overdue</StatLabel>
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
                <StatLabel>High Priority</StatLabel>
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
                <StatLabel>Very High Priority</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            )}
          </Tasks.Aggregate>
        </Stack>
      </TabCard>
      <TabCard title={'Sleep Stats'}>
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
                <StatLabel>Today</StatLabel>
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
                <StatLabel>Backlog</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            )}
          </Tasks.Aggregate>
          <Tasks.Aggregate
            where={{
              _and: [
                { due_date: { _lte: date.startOf('day').toISOString(true) } },
              ],
            }}
          >
            {(data) => (
              <Stat>
                <StatLabel>Overdue</StatLabel>
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
                <StatLabel>High Priority</StatLabel>
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
                <StatLabel>Very High Priority</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            )}
          </Tasks.Aggregate>
        </Stack>
      </TabCard>
      <TabCard title={'Water Stats'}>
        <Stack>

          <Water.Aggregate
            where={{
              _and: [
                { timestamp: { _gte: date.startOf('day').toISOString(true) } },
                { timestamp: { _lte: date.endOf('day').toISOString(true) } },
              ],
            }}
          >
            {(data) => (
              <Stack isInline>
                <Box w={500}>
                  <Progress value={(data.sum.quantity || 0) / 3000} />
                </Box>
                <Text>{data.sum.quantity || 0} out of 3000 ML</Text>
              </Stack>
            )}
          </Water.Aggregate>
          <Tasks.Aggregate
            where={{
              _and: [
                { due_date: { _gte: date.startOf('day').toISOString(true) } },
                { due_date: { _lte: date.endOf('day').toISOString(true) } },
                { status: { _neq: 'completed' } },
              ],
            }}
          >
            {({ count: notCompletedCount }) => (
              <Tasks.Aggregate
                where={{
                  _and: [
                    {
                      due_date: { _gte: date.startOf('day').toISOString(true) },
                    },
                    { due_date: { _lte: date.endOf('day').toISOString(true) } },
                  ],
                }}
              >
                {({ count: totalCount }) => (
                  <Stack isInline>
                    <Box w={500}>
                      <Progress
                        value={
                          ((totalCount - notCompletedCount) * 100) / totalCount
                        }
                      />
                    </Box>
                    <Text>
                      {notCompletedCount} tasks pending out of {totalCount}{' '}
                      tasks
                    </Text>
                  </Stack>
                )}
              </Tasks.Aggregate>
            )}
          </Tasks.Aggregate>
        </Stack>
      </TabCard>
    </Box>
  );
};

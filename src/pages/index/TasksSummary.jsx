import {
  Box,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Progress,
  Text,
  Divider,
  Heading,
} from '@chakra-ui/core';
import Task from 'src/assets/Task';
import Card from 'src/components/Card';
import Tasks from 'src/modules/Tasks';
import Water from 'src/modules/Water';
import { useStore } from 'src/store';
export default () => {
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));
  return (
    <Stack spacing={10} isInline>
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
          <Tasks.Aggregate
            where={{
              _and: [
                {
                  due_date: {
                    _gte: date.startOf('day').toISOString(true),
                  },
                },
                {
                  due_date: {
                    _lte: date.endOf('day').toISOString(true),
                  },
                },
                { status: { _eq: 'completed' } },
              ],
            }}
          >
            {({ count: completedCount }) => (
              <Stat>
                <StatLabel>Today</StatLabel>
                <Heading size={'lg'}>
                  {completedCount} / {totalCount}{' '}
                </Heading>
                tasks completed
              </Stat>
            )}
          </Tasks.Aggregate>
        )}
      </Tasks.Aggregate>
      <Divider borderWidth={2} orientation={'vertical'} />
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
      <Divider borderWidth={2} orientation={'vertical'} />

      <Tasks.Aggregate
        where={{
          _and: [
            {
              due_date: { _lte: date.startOf('day').toISOString(true) },
            },
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
      <Divider borderWidth={2} orientation={'vertical'} />

      <Tasks.Aggregate
        where={{
          _and: [
            {
              due_date: { _gte: date.startOf('day').toISOString(true) },
            },
            { due_date: { _lte: date.endOf('day').toISOString(true) } },
            {
              _or: [
                { priority: { _eq: 'very_high' } },
                { priority: { _eq: 'high' } },
              ],
            },
          ],
        }}
      >
        {({ count: totalCount }) => (
          <Tasks.Aggregate
            where={{
              _and: [
                {
                  due_date: {
                    _gte: date.startOf('day').toISOString(true),
                  },
                },
                {
                  due_date: {
                    _lte: date.endOf('day').toISOString(true),
                  },
                },
                {
                  _or: [
                    { priority: { _eq: 'very_high' } },
                    { priority: { _eq: 'high' } },
                  ],
                },
                { status: { _eq: 'completed' } },
              ],
            }}
          >
            {({ count: completedCount }) => (
              <Stat>
                <StatLabel>High Priority</StatLabel>
                <Heading size={'lg'}>
                  {completedCount} / {totalCount}{' '}
                </Heading>
                tasks completed
              </Stat>
            )}
          </Tasks.Aggregate>
        )}
      </Tasks.Aggregate>
    </Stack>
  );
};
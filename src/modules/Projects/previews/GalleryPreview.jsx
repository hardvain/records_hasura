import { Divider, Progress, Skeleton, Stack, Text } from '@chakra-ui/core';
import Link from 'next/link';
import Card from 'src/components/Card';
import moment from 'moment';
import useAggregate from 'src/graphql/hooks/useAggregate';
export default ({ record }) => {
  const [totalTasks] = useAggregate({
    name: 'tasks',
    where: { project_id: { _eq: record.id } },
    aggregates: { count: [] },
  });
  const [pendingTasks] = useAggregate({
    name: 'tasks',
    where: {
      _and: [
        { project_id: { _eq: record.id } },
        { status: { _neq: 'completed' } },
      ],
    },
    aggregates: { count: [] },
  });

  const [completedTasks] = useAggregate({
    name: 'tasks',
    where: {
      _and: [
        { project_id: { _eq: record.id } },
        { status: { _eq: 'completed' } },
      ],
    },
    aggregates: { count: [] },
  });

  const [highPriorityTasks] = useAggregate({
    name: 'tasks',
    where: {
      _and: [
        { project_id: { _eq: record.id } },
        { status: { _neq: 'completed' } },
        {
          _or: [
            { priority: { _eq: 'very_high' } },
            { priority: { _eq: 'high' } },
          ],
        },
      ],
    },
    aggregates: { count: [] },
  });
  const [backlogTasks] = useAggregate({
    name: 'tasks',
    where: {
      _and: [
        { project_id: { _eq: record.id } },
        { due_date: { _is_null: true } },
      ],
    },
    aggregates: { count: [] },
  });
  const completedPercentage = (completedTasks?.count * 100) / totalTasks?.count;

  const [overDueTasks] = useAggregate({
    name: 'tasks',
    where: {
      _and: [
        { project_id: { _eq: record.id } },
        { due_date: { _lte: moment().startOf('day').toISOString(true) } },
      ],
    },
    aggregates: { count: [] },
  });

  return (
    <Link href={`/projects/${record.id}`}>
      <Card title={record.name} highlight>
        <Stack>
          <Stack p={3} spacing={10}>
            <Text>Progress:</Text>
            {completedPercentage ? (
              <>
                <Progress
                  w={'100%'}
                  borderRadius={5}
                  value={completedPercentage || 0}
                />
                <Text>
                  {pendingTasks?.count} out {totalTasks?.count} tasks remaining
                </Text>
              </>
            ) : (
              <>
                <Skeleton width={'100%'} h={10} />
                <Skeleton width={'100%'} h={5} />
              </>
            )}
          </Stack>
          <Divider />
          <Stack isInline justifyContent={'space-evenly'} w={'100%'} p={3}>
            <Stack alignItems={'center'}>
              <Text>High Priority</Text>
              <Text>{highPriorityTasks?.count}</Text>
            </Stack>
            <Divider orientation={'vertical'} />
            <Stack alignItems={'center'}>
              <Text>Backlog</Text>
              <Text>{backlogTasks?.count}</Text>
            </Stack>
            <Divider orientation={'vertical'} />
            <Stack alignItems={'center'}>
              <Text>Overdue</Text>
              <Text>{overDueTasks?.count}</Text>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Link>
  );
};

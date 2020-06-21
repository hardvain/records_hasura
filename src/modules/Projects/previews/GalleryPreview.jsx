import { Divider, Progress, Stack, Text } from '@chakra-ui/core';
import Card from 'src/components/Card';
import moment from 'moment'
export default ({ record }) => {
  const totalTasks = record?.ref_tasks;
  const pendingTasks = record?.ref_tasks?.filter(
    (t) => t.status !== 'completed'
  );
  const completedPercentage =
    ((totalTasks?.length - pendingTasks?.length) * 100) / totalTasks;
  const highPriorityTasks = record?.ref_tasks?.filter(
    (t) => t.priority === 'high' || t.priority === 'very_high'
  );
  const backlogTasks = record?.ref_tasks?.filter(
    (t) => !t.due_date
  );
  const overdueTasks = record?.ref_tasks?.filter(
    (t) => t.due_date && moment(t.due_date).unix() < moment().startOf('day').unix()
  );
  return (
    <Card title={record.name} highlight>
      <Stack>
        <Stack isInline alignItems={'center'}>
          <Text>Task Progress:</Text>
          <Progress
            w={'100%'}
            borderRadius={5}
            value={completedPercentage || 0}
          />
        </Stack>
        <Divider />
        <Stack isInline justifyContent={'flex-start'}>
          <Stack>
            <Text>High Priority</Text>
            <Text>{highPriorityTasks?.length}</Text>
          </Stack>
          <Divider orientation={'vertical'}/>
          <Stack>
            <Text>Backlog</Text>
            <Text>{backlogTasks?.length}</Text>
          </Stack>
          <Divider orientation={'vertical'}/>
          <Stack>
            <Text>Overdue</Text>
            <Text>{overdueTasks?.length}</Text>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

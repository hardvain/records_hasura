import { Stack, Text, Badge } from '@chakra-ui/core';
import Card from 'src/components/Card';
import moment from 'moment';

export default ({ record }) => {
  return (
    <Card title={record.name}>
      <Stack>
        <Stack isInline>
          <Text>Description:</Text>
          <Text>{record.description}</Text>
        </Stack>
        <Stack isInline>
          <Text>Due Date:</Text>
          <Text>{moment(record.due_date).format('Do, MMMM YYYY, H:mm')}</Text>
        </Stack>
        <Stack isInline>
          <Text>Priority:</Text>
          <Text>{<Badge>{record.priority}</Badge>}</Text>
        </Stack>
        <Stack isInline>
          <Text>Status:</Text>
          <Text>{<Badge>{record.status}</Badge>}</Text>
        </Stack>
        <Stack isInline>
          <Text>Team:</Text>
          <Text>{<Badge>{record.team}</Badge>}</Text>
        </Stack>
      </Stack>
    </Card>
  );
};

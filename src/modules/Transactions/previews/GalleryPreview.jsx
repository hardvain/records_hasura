import { Stack, Text, Badge } from '@chakra-ui/core';
import Card from 'src/components/Card';
import moment from 'moment';

export default ({ record }) => {
  return (
    <Card title={record.name}>
      <Stack>
        <Stack isInline>
          <Text>Amount:</Text>
          <Text>{record.value}</Text>
        </Stack>
        <Stack isInline>
          <Text>Description:</Text>
          <Text>{record.description}</Text>
        </Stack>
        <Stack isInline>
          <Text>Timestamp:</Text>
          <Text>{moment(record.timestamp).format('Do, MMMM YYYY, H:mm')}</Text>
        </Stack>
        <Stack isInline>
          <Text>Type:</Text>
          <Text>{<Badge>{record.type}</Badge>}</Text>
        </Stack>
        <Stack isInline>
          <Text>Team:</Text>
          <Text>{<Badge>{record.team}</Badge>}</Text>
        </Stack>
      </Stack>
    </Card>
  );
};

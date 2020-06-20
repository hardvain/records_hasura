import { Stack, Text, Badge } from '@chakra-ui/core';
import Card from 'src/components/Card';
import moment from 'moment';

export default ({ record }) => {
  return (
    <Card title={record.quantity}>
      <Stack>
        <Stack isInline>
          <Text>Description:</Text>
          <Text>{record.description}</Text>
        </Stack>
        <Stack isInline>
          <Text>Timestamp:</Text>
          <Text>{moment(record.timestamp).format('Do, MMMM YYYY, H:mm')}</Text>
        </Stack>
      </Stack>
    </Card>
  );
};

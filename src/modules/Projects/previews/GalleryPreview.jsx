import { Stack, Text } from '@chakra-ui/core';
import Card from 'src/components/Card';

export default ({ record }) => {
  return (
    <Card title={record.name}>
      <Stack>
        <Stack isInline>
          <Text>Description:</Text>
          <Text>{record.description}</Text>
        </Stack>
        <Stack isInline>
          <Text>Is Archived:</Text>
          <Text>{record.is_archived}</Text>
        </Stack>
      </Stack>
    </Card>
  );
};

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
          <Text>Carbs:</Text>
          <Text>{record.carbs}</Text>
        </Stack>
        <Stack isInline>
          <Text>Protein:</Text>
          <Text>{record.protein}</Text>
        </Stack>
        <Stack isInline>
          <Text>Fat:</Text>
          <Text>{record.fat}</Text>
        </Stack>
        <Stack isInline>
          <Text>Quantity:</Text>
          <Text>{<Badge>{record.quantity}</Badge>}</Text>
        </Stack>
        <Stack isInline>
          <Text>Unit:</Text>
          <Text>{<Badge>{record.unit}</Badge>}</Text>
        </Stack>
      </Stack>
    </Card>
  );
};

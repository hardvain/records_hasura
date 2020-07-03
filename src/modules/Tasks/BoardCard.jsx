import { Text } from '@chakra-ui/core';
import Card from 'src/components/core/card';

export default ({ record }) => {
  return (
    <Card w={200} h={100} p={2} overflowWrap="break-word" overflowY={'hidden'}>
      <Text fontSize={14}>{record?.name}</Text>
    </Card>
  );
};

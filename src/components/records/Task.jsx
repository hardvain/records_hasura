import { Badge, Box, Checkbox, Flex, Stack, Text } from '@chakra-ui/core';
import { FaTasks } from 'react-icons/fa';
import DatePicker from 'components/DatePicker';

export default ({ record }) => {
  const tags = record.tags || []
  return (
    <Flex alignItems={'center'}>
      <Box as={FaTasks} alignSelf={'center'} mr={3} />
      <Stack flexGrow={1}>
        <Text>{record.data.name}</Text>
        <Badge w={80}>
          <DatePicker.TextDatePicker selected={new Date(record.timestamp)}/>
        </Badge>
      </Stack>
      <Flex alignSelf={'center'}>
        {tags.map((tag) => (
          <Badge key={tag} mr={1}>
            {tag}
          </Badge>
        ))}
      </Flex>
    </Flex>
  );
};

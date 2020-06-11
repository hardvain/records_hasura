import { useState } from 'react';
import { Badge, Box, useToast, Flex, Stack, Text } from '@chakra-ui/core';
import { GiLoveInjection } from 'react-icons/gi';
import DatePicker from 'components/DatePicker';
import moment from 'moment';
export default ({ recordData, refetch }) => {
  const [timestamp, setTimestamp] = useState(new Date(recordData.timestamp));
  const toast = useToast();
  const onDateChange = async (value) => {
    setTimestamp(new Date(value));
    await fetch(`/api/records/${recordData.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        ...recordData,
        timestamp: moment(value).toISOString(),
      }),
    });
    refetch();
    toast({
      title: 'Record updated successfully',
      status: 'success',
      duration: 3000,
      position: 'top',
      isClosable: true,
    });
  };

  return (
    <Flex alignItems={'center'}>
      <Box as={GiLoveInjection} alignSelf={'center'} mr={3} />
      <Stack flexGrow={1}>
        <Text>{recordData.data.value}</Text>
        <Badge w={100}>
          <DatePicker.TextDatePicker
            selected={new Date(timestamp)}
            onChange={onDateChange}
          />
        </Badge>
      </Stack>
    </Flex>
  );
};

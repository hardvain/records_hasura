import { useState } from 'react';
import { Badge, Box, useToast, Flex, Stack, Text } from '@chakra-ui/core';
import DatePicker from 'src/components/DatePicker';
import Diabetes from 'src/assets/Diabetes'
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
      <Box alignSelf={'center'} mr={2}>
        <Diabetes width={30} height={30}/>
      </Box>
      <Stack flexGrow={1}>
        <Text>{recordData.data.value}</Text>
        <Badge w={100}>
          <DatePicker.TextDatePicker
            selected={moment(timestamp)}
            onChange={onDateChange}
          />
        </Badge>
      </Stack>
    </Flex>
  );
};

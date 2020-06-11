import { Badge, Box, Checkbox, Flex, Stack, Text, useToast } from '@chakra-ui/core';
import moment from 'moment';
import { useState } from 'react';
import { IoMdWater } from 'react-icons/io';
import DatePicker from 'components/DatePicker';

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
    refetch()
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
      <Box as={IoMdWater} alignSelf={'center'} mr={3} color={"blue.500"}/>
      <Stack flexGrow={1}>
        <Text>{recordData.data.value}</Text>
        <Badge w={100}>
          <DatePicker.TextDatePicker selected={new Date(timestamp)}  onChange={onDateChange}/>
        </Badge>
      </Stack>
    </Flex>
  );
};

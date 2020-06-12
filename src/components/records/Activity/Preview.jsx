import { Badge, Box, Flex, Stack, Text, useToast } from '@chakra-ui/core';
import moment from 'moment';
import { useState } from 'react';
import {FiActivity} from 'react-icons/fi'
import DatePicker from 'components/DatePicker';

export default ({recordData, refetch}) => {
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
  return <Flex alignItems={"center"}>
    <Box as={FiActivity} color={"white"} alignSelf={'center'} mr={3} color={"white"}/>
    <Stack flexGrow={1}>
      <Text>{recordData.data.value}</Text>
      <Stack isInline>
        <Badge w={100} mr={2}>
          <DatePicker.TextDatePicker selected={moment(recordData.from)}  onChange={onDateChange}/>
        </Badge>
        <Badge w={100}>
          <DatePicker.TextDatePicker selected={moment(recordData.to)}  onChange={onDateChange}/>
        </Badge>
      </Stack>
    </Stack>
  </Flex>
}
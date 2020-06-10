import { Badge, Box, Checkbox, Flex, Stack, Text, useToast } from '@chakra-ui/core';
import moment from 'moment';
import { useState } from 'react';
import {BsGrid} from 'react-icons/bs'
import DatePicker from 'components/DatePicker';

export default ({record, refetch}) => {
  const [timestamp, setTimestamp] = useState(new Date(record.timestamp));
  const toast = useToast();
  const onDateChange = async (value) => {
    setTimestamp(new Date(value));
    await fetch(`/api/records/${record.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        ...record,
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
    <Box as={BsGrid} color={"white"} alignSelf={'center'} mr={3} color={"white"}/>
    <Stack flexGrow={1}>
      <Text>{record.data.value}</Text>
      <Badge w={100}>
        <DatePicker.TextDatePicker selected={new Date(timestamp)}  onChange={onDateChange}/>
      </Badge>
    </Stack>
  </Flex>
}
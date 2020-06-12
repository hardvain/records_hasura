import { Badge, Box, Flex, Stack, Text, useToast } from '@chakra-ui/core';
import moment from 'moment';
import { useState } from 'react';
import { BsGrid } from 'react-icons/bs';
import DatePicker from 'src/components/DatePicker';
import { useStore } from 'src/store';

export default ({ record }) => {
  const { updateRecord } = useStore((state) => ({
    updateRecord: state.updateRecord,
  }));

  const toast = useToast();
  const onDateChange = async (value) => {
    updateRecord(
      { ...record, timestamp: moment(value).toISOString() },
      toast
    );
  };
  return (
    <Flex alignItems={'center'}>
      <Box
        as={BsGrid}
        color={'white'}
        alignSelf={'center'}
        mr={3}
        color={'white'}
      />
      <Stack flexGrow={1}>
        <Text>{record.data.value}</Text>
        <Badge w={100}>
          <DatePicker.TextDatePicker
            selected={moment(record.timestamp)}
            onChange={onDateChange}
          />
        </Badge>
      </Stack>
    </Flex>
  );
};

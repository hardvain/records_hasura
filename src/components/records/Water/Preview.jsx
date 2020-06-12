import { Badge, Box, Flex, Stack, Text, useToast } from '@chakra-ui/core';
import moment from 'moment';
import { useState } from 'react';
import { IoMdWater } from 'react-icons/io';
import DatePicker from 'src/components/DatePicker';
import { useStore } from 'src/store';

export default ({ record }) => {
  const { updateRecord } = useStore((state) => ({
    updateRecord: state.updateRecord,
  }));

  const toast = useToast();
  const onDateChange = async (value) => {
    updateRecord({ ...record, timestamp: moment(value).toISOString() }, toast);
  };
  return (
    <Flex alignItems={'center'}>
      <Box as={IoMdWater} alignSelf={'center'} mr={3} color={'blue.500'} />
      <Stack>
        <Text>{record.data.value}</Text>
        <DatePicker
          type={'text'}
          selected={moment(record.timestamp)}
          onChange={onDateChange}
        />
      </Stack>
    </Flex>
  );
};

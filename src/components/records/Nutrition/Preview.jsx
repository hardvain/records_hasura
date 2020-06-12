import { useState } from 'react';
import { Badge, Box, useToast, Flex, Stack, Text } from '@chakra-ui/core';
import DatePicker from 'src/components/DatePicker';
import Diabetes from 'src/assets/Diabetes';
import moment from 'moment';
import { useStore } from 'src/store';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
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
      <Box
        as={FaRegMoneyBillAlt}
        color={'white'}
        alignSelf={'center'}
        mr={3}
      />
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

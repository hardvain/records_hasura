import { Badge, Box, Flex, Stack, Text, useToast } from '@chakra-ui/core';
import moment from 'moment';
import { useState } from 'react';
import { FiActivity } from 'react-icons/fi';
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
        as={FiActivity}
        color={'white'}
        alignSelf={'center'}
        mr={3}
        color={'white'}
      />
      <Stack>
        <Text>{record.data.value}</Text>
        <Stack isInline>
          <Badge mr={2}>
            <DatePicker
              type={"text"}
              selected={moment(record.from)}
              onChange={onDateChange}
            />
          </Badge>
          <Badge w={100}>
            <DatePicker
              type={"text"}
              selected={moment(record.to)}
              onChange={onDateChange}
            />
          </Badge>
        </Stack>
      </Stack>
    </Flex>
  );
};

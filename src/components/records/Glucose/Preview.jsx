import { useState } from 'react';
import { Badge, Box, useToast, Flex, Stack, Text } from '@chakra-ui/core';
import DatePicker from 'src/components/DatePicker';
import Diabetes from 'src/assets/Diabetes';
import moment from 'moment';
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
      <Box alignSelf={'center'} mr={2}>
        <Diabetes width={30} height={30} />
      </Box>
      <Stack>
        <Text>{record.data.value}</Text>
        <Badge>
          <DatePicker
            type={"text"}
            selected={moment(record.timestamp)}
            onChange={onDateChange}
          />
        </Badge>
      </Stack>
    </Flex>
  );
};

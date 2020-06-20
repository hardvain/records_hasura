import Card from 'src/components/Card';
import Glucose from 'src/modules/Glucose';
import moment from 'moment';
import DatePicker from 'src/components/DatePicker';
import {
  Box,
  Stack,
  Divider,
  Heading,
  FormControl,
  FormLabel,
} from '@chakra-ui/core';
import React, { useState } from 'react';

export default () => {
  const [date, setDate] = useState(moment().toISOString(true));

  return (
    <Box>
      <Stack isInline>
        <Card m={0} borderRadius={0} p={0}>
          <Stack h={'100vh'} px={2}>
            <Heading size={'md'}>Filters</Heading>

            <FormControl display={'grid'}>
              <FormLabel>Due Date</FormLabel>
              <DatePicker
                selected={moment(date)}
                type={'input'}
                includeTime={false}
                onChange={(e) => setDate(e.toISOString(true))}
              />
            </FormControl>
            <Divider />
          </Stack>
        </Card>
        <Box w={'100%'} p={10}>
          <Glucose.List
            where={{
              _and: [
                {
                  timestamp: {
                    _gte: moment(date).startOf('day').toISOString(true),
                  },
                },
                {
                  timestamp: {
                    _lte: moment(date).endOf('day').toISOString(true),
                  },
                },
              ],
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

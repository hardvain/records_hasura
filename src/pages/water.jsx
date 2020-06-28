import Card from 'src/components/core/card';
import Water from 'src/modules/Water';
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
        <Box w={'100%'} px={2} py={5}>
          <Water.List
            showFilterBar
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

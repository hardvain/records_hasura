import Glucose from 'src/modules/Glucose';
import moment from 'moment';
import {
  Box,
  Stack,
} from '@chakra-ui/core';
import React, { useState } from 'react';

export default () => {
  const [date, setDate] = useState(moment().toISOString(true));

  return (
    <Box>
      <Stack isInline>
        <Box w={'100%'} px={2} py={5}>
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

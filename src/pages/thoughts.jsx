import Thoughts from 'src/modules/Thoughts';
import moment from 'moment';
import { Box, Stack } from '@chakra-ui/core';
import React, { useState } from 'react';

export default () => {
  const [date, setDate] = useState(moment().toISOString(true));

  return (
    <Box p={5}>
      <Stack isInline>
        <Box w={'100%'} px={2} py={5}>
          <Thoughts.List orderBy={{ created_at: 'desc' }} />
        </Box>
      </Stack>
    </Box>
  );
};

import People from 'src/modules/People';
import moment from 'moment';
import { Box, Stack } from '@chakra-ui/core';
import React, { useState } from 'react';

export default () => {
  const [date, setDate] = useState(moment().toISOString(true));

  return (
    <Box p={5}>
      <Stack isInline>
        <Box w={'100%'} px={2} py={5}>
          <People.List />
        </Box>
      </Stack>
    </Box>
  );
};

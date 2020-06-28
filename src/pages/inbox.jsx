import Inbox from 'src/modules/Inbox';
import moment from 'moment';
import { Box, Stack } from '@chakra-ui/core';
import React, { useState } from 'react';

export default () => {
  const [date, setDate] = useState(moment().toISOString(true));

  return (
    <Box p={5}>
      <Stack isInline>
        <Box w={'100%'} px={2} py={5}>
          <Inbox.List
            group_by_field={(row) => moment(row['created_at']).format("DD-MM-yyyy")}
            orderBy={{created_at:'desc'}}
          />
        </Box>
      </Stack>
    </Box>
  );
};

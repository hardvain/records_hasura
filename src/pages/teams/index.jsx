import Card from 'src/components/Card';
import Teams from 'src/modules/Teams';
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
      <Stack isInline>
        <Box w={'100%'} p={10}>
          <Teams.List />
        </Box>
      </Stack>
  );
};

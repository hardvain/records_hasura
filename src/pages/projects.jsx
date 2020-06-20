import Card from 'src/components/Card';
import Projects from 'src/modules/Projects';
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
        <Box w={'100%'} p={10}>
          <Projects.Gallery />
        </Box>
      </Stack>
    </Box>
  );
};

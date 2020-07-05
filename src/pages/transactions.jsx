import {
  Box,
  Stack,
  Button,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorMode,
  Flex,
} from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import Transactions from 'src/modules/Transactions';
import moment from 'moment';
import * as TaskFilters from 'src/modules/Tasks/filters';

export default () => {
  const { colorMode } = useColorMode();

  const [date, setDate] = useState(moment().toISOString(true));
  return (
    <Box w={'100%'} px={10} py={3}>
      <Transactions.List
        showFilterBar
        where={{ _and: [] }}
        order_by={{ timestamp: 'desc_nulls_last' }}
        group_by_field={(row) => moment(row['timestamp']).format('DD-MM-yyyy')}
      />
    </Box>
  );
};

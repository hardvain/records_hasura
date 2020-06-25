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
    <Box w={'100%'} p={3}>
      <Tabs variantColor={'brand'} variant="soft-rounded" size={'sm'}>
        <TabList>
          <Tab color={colorMode === 'light' ? 'gray.800' : 'white'}>Today</Tab>
          <Tab color={colorMode === 'light' ? 'gray.800' : 'white'}>
            Backlog
          </Tab>
          <Tab color={colorMode === 'light' ? 'gray.800' : 'white'}>
            Overdue
          </Tab>
          <Tab color={colorMode === 'light' ? 'gray.800' : 'white'}>
            Next 7 Days
          </Tab>
          <Tab color={colorMode === 'light' ? 'gray.800' : 'white'}>All</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box w={'100%'} p={2}>
              <Transactions.List showFilterBar where={{ _and: [] }} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box w={'100%'} p={2}>
              <Transactions.List showFilterBar where={{ _and: [] }} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box w={'100%'} p={2}>
              <Transactions.List showFilterBar where={{ _and: [] }} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box w={'100%'} p={2}>
              <Transactions.List showFilterBar where={{ _and: [] }} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box w={'100%'} p={2}>
              <Transactions.List showFilterBar where={{ _and: [] }} />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

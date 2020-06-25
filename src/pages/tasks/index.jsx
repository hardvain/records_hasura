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
import Tasks from 'src/modules/Tasks';
import moment from 'moment';
import * as TaskFilters from 'src/modules/Tasks/filters';

export default () => {
  const { colorMode } = useColorMode();

  const [date, setDate] = useState(moment().toISOString(true));
  return (
    <Box w={'100%'} p={3}>
      <Tabs variantColor={'brand'} variant="soft-rounded" size={'sm'} >
        <TabList>
          <Tab  color={colorMode === 'light' ? 'gray.800' : 'white'}>Today</Tab>
          <Tab  color={colorMode === 'light' ? 'gray.800' : 'white'}>
            Backlog
          </Tab>
          <Tab  color={colorMode === 'light' ? 'gray.800' : 'white'}>
            Overdue
          </Tab>
          <Tab  color={colorMode === 'light' ? 'gray.800' : 'white'}>
            Next 7 Days
          </Tab>
          <Tab  color={colorMode === 'light' ? 'gray.800' : 'white'}>All</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box w={'100%'} p={2}>
              <Tasks.List
                group_by_field={row => row['ref_project']['ref_team']['name']}
                order_by={{
                  ref_project: { ref_team: { created_at: 'asc' } },
                  due_date: 'asc',
                }}
                showFilterBar
                where={TaskFilters.today(date)}
              />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box w={'100%'} p={2}>
              <Tasks.List
                group_by_field={row => row['ref_project']['ref_team']['name']}
                order_by={{
                  ref_project: { ref_team: { created_at: 'asc' } },
                  due_date: 'asc',
                }}
                showFilterBar
                where={TaskFilters.backlog()}
              />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box w={'100%'} p={2}>
              <Tasks.List
                group_by_field={row => row['ref_project']['ref_team']['name']}
                order_by={{
                  ref_project: { ref_team: { created_at: 'asc' } },
                  due_date: 'asc',
                }}
                showFilterBar
                where={TaskFilters.overDue(date)}
              />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box w={'100%'} p={2}>
              <Tasks.List
                group_by_field={row => row['ref_project']['ref_team']['name']}
                order_by={{
                  ref_project: { ref_team: { created_at: 'asc' } },
                  due_date: 'asc',
                }}
                showFilterBar
                where={TaskFilters.activeNext7Days(date)}
              />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box w={'100%'} p={2}>
              <Tasks.List
                group_by_field={row => row['ref_project']['ref_team']['name']}
                order_by={{
                  ref_project: { ref_team: { created_at: 'asc' } },
                  due_date: 'asc',
                }}
                showFilterBar
                where={{ _and: [] }}
              />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

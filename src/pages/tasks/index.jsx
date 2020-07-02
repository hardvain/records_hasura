import {
  Box,
  Stack,
  Button,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Tab,
  TabPanel,
  useColorMode,
  Flex,
} from '@chakra-ui/core';
import Card from 'src/components/core/card';
import React, { useEffect, useState } from 'react';
import Tasks from 'src/modules/Tasks';
import moment from 'moment';
import * as TaskFilters from 'src/modules/Tasks/filters';

export default () => {
  const { colorMode } = useColorMode();
  const [currentTab, setCurrentTab] = useState(0);

  const [date, setDate] = useState(moment().toISOString(true));
  return (
    <Box w={'100%'} px={10} py={5}>
      <Tabs variantColor={'brand'}  size={'sm'} isManual>
        <Stack isInline spacing={0}>
          <TabList borderWidth={0}>
            <Tab
              onClick={() => setCurrentTab(0)}
              color={colorMode === 'light' ? 'gray.800' : 'white'}
            >
              Today
            </Tab>
            <Tab
              onClick={() => setCurrentTab(1)}
              color={colorMode === 'light' ? 'gray.800' : 'white'}
            >
              Backlog
            </Tab>
            <Tab
              onClick={() => setCurrentTab(2)}
              color={colorMode === 'light' ? 'gray.800' : 'white'}
            >
              Overdue
            </Tab>
            <Tab
              onClick={() => setCurrentTab(3)}
              color={colorMode === 'light' ? 'gray.800' : 'white'}
            >
              Next 7 Days
            </Tab>
            <Tab
              onClick={() => setCurrentTab(4)}
              color={colorMode === 'light' ? 'gray.800' : 'white'}
            >
              All
            </Tab>
          </TabList>
          <Box flexGrow={1} />
          <InputGroup>
            <InputLeftElement
              children={<Icon name="search" color="gray.300" />}
            />
            <Input type="phone" placeholder="Search" w={400} />
          </InputGroup>
        </Stack>

        <TabPanels>
          <TabPanel>
            {currentTab === 0 && (
              <Box w={'100%'}>
                <Tasks.List
                  group_by_field={(row) =>
                    row['ref_project']
                      ? row['ref_project']['ref_team']['name']
                      : row['ref_team']['name']
                  }
                  order_by={{
                    ref_project: { ref_team: { created_at: 'asc' } },
                    due_date: 'asc',
                  }}
                  showFilterBar
                  where={TaskFilters.today(date)}
                />
              </Box>
            )}
          </TabPanel>
          <TabPanel>
            {currentTab === 1 && (
              <Box w={'100%'}>
                <Tasks.List
                  group_by_field={(row) =>
                    row['ref_project']
                      ? row['ref_project']['ref_team']['name']
                      : row['ref_team']['name']
                  }
                  order_by={{
                    ref_project: { ref_team: { created_at: 'asc' } },
                    due_date: 'asc',
                  }}
                  showFilterBar
                  where={TaskFilters.backlog()}
                />
              </Box>
            )}
          </TabPanel>
          <TabPanel>
            {currentTab === 2 && (
              <Box w={'100%'}>
                <Tasks.List
                  group_by_field={(row) =>
                    row['ref_project']
                      ? row['ref_project']['ref_team']['name']
                      : row['ref_team']['name']
                  }
                  order_by={{
                    ref_project: { ref_team: { created_at: 'asc' } },
                    due_date: 'asc',
                  }}
                  showFilterBar
                  where={TaskFilters.overDue(date)}
                />
              </Box>
            )}
          </TabPanel>
          <TabPanel>
            {currentTab === 3 && (
              <Box w={'100%'}>
                <Tasks.List
                  group_by_field={(row) =>
                    row['ref_project']
                      ? row['ref_project']['ref_team']['name']
                      : row['ref_team']['name']
                  }
                  order_by={{
                    ref_project: { ref_team: { created_at: 'asc' } },
                    due_date: 'asc',
                  }}
                  showFilterBar
                  where={TaskFilters.activeNext7Days(date)}
                />
              </Box>
            )}
          </TabPanel>
          <TabPanel>
            {currentTab === 4 && (
              <Box w={'100%'}>
                <Tasks.List
                  group_by_field={(row) =>
                    row['ref_project']
                      ? row['ref_project']['ref_team']['name']
                      : row['ref_team']['name']
                  }
                  order_by={{
                    ref_project: { ref_team: { created_at: 'asc' } },
                    due_date: 'asc',
                  }}
                  showFilterBar
                  where={{ _and: [{ parent_id: { _is_null: true } }] }}
                />
              </Box>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

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
import React, { useEffect, useState } from 'react';
import Tasks from 'src/modules/Tasks';
import moment from 'moment';
import * as TaskFilters from 'src/modules/Tasks/filters';

export default () => {
  const { colorMode } = useColorMode();
  const [currentTab, setCurrentTab] = useState(0);

  const [date, setDate] = useState(moment().toISOString(true));
  return (
    <Box w={'100%'} p={3}>
      <Tabs variantColor={'brand'} size={'sm'} variant={'soft-rounded'} isManual>
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
            <Tab
              onClick={() => setCurrentTab(5)}
              color={colorMode === 'light' ? 'gray.800' : 'white'}
            >
              Tenure Policy
            </Tab>
            <Tab
              onClick={() => setCurrentTab(6)}
              color={colorMode === 'light' ? 'gray.800' : 'white'}
            >
              Records App
            </Tab>
          </TabList>
          <Box flexGrow={1} />
          <InputGroup>
            <InputLeftElement
              children={<Icon name="search" color="gray.300" />}
            />
            <Input type="phone" placeholder="Search" w={400}/>
          </InputGroup>

          <Button variant={'outline'} color={'#77808F'}>
            Filters
          </Button>
        </Stack>
        <Divider />

        <TabPanels>
          <TabPanel>
            {currentTab === 0 && (
              <Box w={'100%'} p={2}>
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
              <Box w={'100%'} p={2}>
                <Tasks.List
                  group_by_field={(row) =>
                    row['ref_project']['ref_team']['name']
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
              <Box w={'100%'} p={2}>
                <Tasks.List
                  group_by_field={(row) =>
                    row['ref_project']['ref_team']['name']
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
              <Box w={'100%'} p={2}>
                <Tasks.List
                  group_by_field={(row) =>
                    row['ref_project']['ref_team']['name']
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
              <Box w={'100%'} p={2}>
                <Tasks.List
                  group_by_field={(row) =>
                    row['ref_project']['ref_team']['name']
                  }
                  order_by={{
                    ref_project: { ref_team: { created_at: 'asc' } },
                    due_date: 'asc',
                  }}
                  showFilterBar
                  where={{ _and: [] }}
                />
              </Box>
            )}
          </TabPanel>
          <TabPanel>
            {currentTab === 5 && (
              <Box w={'100%'} p={2}>
                <Tasks.List
                  order_by={{
                    due_date: 'asc',
                  }}
                  showFilterBar
                  where={{
                    _and: [
                      {
                        project_id: {
                          _eq: '3a0ec3a0-75cd-4642-bff4-6075a9aef177',
                        },
                      },
                    ],
                  }}
                />
              </Box>
            )}
          </TabPanel>
          <TabPanel>
            {currentTab === 6 && (
              <Box w={'100%'} p={2}>
                <Tasks.List
                  order_by={{
                    due_date: 'asc',
                  }}
                  showFilterBar
                  where={{
                    _and: [
                      {
                        project_id: {
                          _eq: 'e4fa423c-9eda-48f8-a509-11e161675dab',
                        },
                      },
                    ],
                  }}
                />
              </Box>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

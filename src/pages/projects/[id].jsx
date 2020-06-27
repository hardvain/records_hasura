import {
  Box,
  Skeleton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  useColorMode, Heading,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import useQuery from 'src/graphql/hooks/useQuery';
import Projects from 'src/modules/Projects';
import { useRouter } from 'next/router';
import Card from 'src/components/Card';
import Tasks from 'src/modules/Tasks';
import * as TaskFilters from 'src/modules/Tasks/filters';
export default () => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(0);
  const { colorMode } = useColorMode();

  const { id } = router.query;
  const [project] = useQuery({
    name: 'projects',
    where: { id: { _eq: id } },
    fields: ['id', 'name', 'description'],
  });
  return (
    <Stack>
      {project ? (
        <Stack m={0}>
          <Card
            id={'card'}
            mt={0}
            borderLeftWidth={0}
            borderRadius={0}
            pb={0}
            mb={0}
          >
            <Box p={5}>
              <Heading size={'md'}>{project[0].name}</Heading>
            </Box>
            <Tabs variantColor={'brand'} isFitted>
              <TabList borderWidth={0}>
                <Tab color={colorMode === 'light' ? 'gray.800' : 'white'}>
                  Tasks
                </Tab>
                <Tab color={colorMode === 'light' ? 'gray.800' : 'white'}>
                  Resources
                </Tab>
                <Tab color={colorMode === 'light' ? 'gray.800' : 'white'}>
                  Conversations
                </Tab>
              </TabList>
            </Tabs>
          </Card>
          <Box m={5}>
            <Tabs
              variantColor={'brand'}
              variant="soft-rounded"
              size={'sm'}
              isManual
            >
              <TabList>
                <Tab
                  onClick={() => setCurrentTab(0)}
                  color={colorMode === 'light' ? 'gray.800' : 'white'}
                >
                  Todo
                </Tab>
                <Tab
                  onClick={() => setCurrentTab(1)}
                  color={colorMode === 'light' ? 'gray.800' : 'white'}
                >
                  In Progress
                </Tab>
                <Tab
                  onClick={() => setCurrentTab(2)}
                  color={colorMode === 'light' ? 'gray.800' : 'white'}
                >
                  Completed
                </Tab>
                <Tab
                  onClick={() => setCurrentTab(3)}
                  color={colorMode === 'light' ? 'gray.800' : 'white'}
                >
                  All
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  {currentTab === 0 && (
                    <Box w={'100%'} p={2}>
                      <Tasks.List
                        showFilterBar
                        where={{
                          _and: [
                            { project_id: { _eq: project[0].id } },
                            { status: { _eq: 'todo' } },
                          ],
                        }}
                      />
                    </Box>
                  )}
                </TabPanel>
                <TabPanel>
                  {currentTab === 1 && (
                    <Box w={'100%'} p={2}>
                      <Tasks.List
                        showFilterBar
                        where={{
                          _and: [
                            { project_id: { _eq: project[0].id } },
                            { status: { _eq: 'in_progress' } },
                          ],
                        }}
                      />
                    </Box>
                  )}
                </TabPanel>
                <TabPanel>
                  {currentTab === 2 && (
                    <Box w={'100%'} p={2}>
                      <Tasks.List
                        showFilterBar
                        where={{
                          _and: [
                            { project_id: { _eq: project[0].id } },
                            { status: { _eq: 'completed' } },
                          ],
                        }}
                      />
                    </Box>
                  )}
                </TabPanel>
                <TabPanel>
                  {currentTab === 3 && (
                    <Box w={'100%'} p={2}>
                      <Tasks.List
                        showFilterBar
                        where={{
                          _and: [{ project_id: { _eq: project[0].id } }],
                        }}
                      />
                    </Box>
                  )}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Stack>
      ) : (
        <Skeleton />
      )}
    </Stack>
  );
};

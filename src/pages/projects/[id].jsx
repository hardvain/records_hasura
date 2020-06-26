import {
  Box,
  Skeleton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  useColorMode,
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
    <Card m={3} h={'100%'} p={8}>
      {project ? (
        <Stack>
          <Projects.Form model={project[0]} showForm={false} />
          <Tabs variantColor={'brand'} variant="soft-rounded" size={'sm'} isManual>
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
        </Stack>
      ) : (
        <Skeleton />
      )}
    </Card>
  );
};

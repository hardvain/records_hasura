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
  Heading,
  Button,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import useQuery from 'src/hooks/graphql/useQuery';
import Projects from 'src/modules/Projects';
import { useRouter } from 'next/router';
import Card from 'src/components/core/card';
import Tasks from 'src/modules/Tasks';
import * as TaskFilters from 'src/modules/Tasks/filters';
export default () => {
  const [showForm, setShowForm] = useState(false);
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
            <Stack isInline spacing={10} p={5}>
              <Box p={5} pb={10} flexGrow={1}>
                <Heading size={'md'}>{project[0].name}</Heading>
              </Box>
              <Button size={'sm'} onClick={() => setShowForm(!showForm)}>
                Edit
              </Button>
            </Stack>
            {showForm && (
              <Box p={5}>
                <Projects.Form model={project[0]} showList={false} />
              </Box>
            )}
          </Card>
          <Box m={5}>
            <Tasks.List
              where={{
                _and: [{ project_id: { _eq: project[0].id } }],
              }}
            />
          </Box>
        </Stack>
      ) : (
        <Skeleton />
      )}
    </Stack>
  );
};

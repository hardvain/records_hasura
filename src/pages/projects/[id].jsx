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
import moment from 'moment';
import React, { useState } from 'react';
import useQuery from 'src/hooks/graphql/useQuery';
import Projects from 'src/modules/Projects';
import { useRouter } from 'next/router';
import Card from 'src/components/core/card';
import Tasks from 'src/modules/Tasks';
import { useStore } from 'src/store';
export default () => {
  const [showForm, setShowForm] = useState(false);
  const [expandAll, setExpandAll] = useState(false);

  const router = useRouter();
  const { colorMode } = useColorMode();
  const { toggleFormPopup, setNewFormContext } = useStore((state) => ({
    toggleFormPopup: state.toggleFormPopup,
    setNewFormContext: state.setNewFormContext,
  }));
  const { id } = router.query;
  const [project] = useQuery({
    name: 'projects',
    where: { id: { _eq: id } },
    fields: ['id', 'name', 'description'],
  });
  const addTask = () => {
    setNewFormContext({ project_id: project[0]?.id });
    toggleFormPopup('tasks');
  };
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
          <Stack m={5} isInline>
            <Button
              variant={'solid'}
              variantColor={'brand'}
              leftIcon={'small-add'}
              size={'sm'}
              onClick={addTask}
            >
              Add Task
            </Button>
            <Button
              variant={'outline'}
              variantColor={'brand'}
              size={'sm'}
              onClick={() => setExpandAll(!expandAll)}
            >
              Toggle Sub Tasks
            </Button>
          </Stack>
          <Card m={5} borderRadius={5} shadow={'none'}>
            <Tasks.List
              expandAll={expandAll}
              where={{
                _and: [
                  { project_id: { _eq: project[0].id } },
                  { parent_id: { _is_null: true } },
                ],
              }}
            />
          </Card>
        </Stack>
      ) : (
        <Skeleton />
      )}
    </Stack>
  );
};

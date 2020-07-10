import {
  Box,
  Skeleton,
  Stack,
  useColorMode,
  Heading,
  Button,
} from '@chakra-ui/core';
import moment from 'moment';
import React, { useState } from 'react';
import Modal from 'src/components/core/modal';
import ListItem from 'src/containers/collection/list/ListItem';
import useQuery from 'src/hooks/graphql/useQuery';
import Projects from 'src/modules/Projects';
import { useRouter } from 'next/router';
import Card from 'src/components/core/card';
import Tasks from 'src/modules/Tasks';
import Summary from 'src/pages/index/Summary';
import { useStore } from 'src/store';
export default () => {
  const [expandAll, setExpandAll] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  const router = useRouter();
  const { colorMode } = useColorMode();
  const { toggleFormPopup, setNewFormContext } = useStore((state) => ({
    toggleFormPopup: state.toggleFormPopup,
    setNewFormContext: state.setNewFormContext,
  }));
  const [show, setShow] = useState(false);

  const { id } = router.query;
  const [project] = useQuery({
    name: 'projects',
    where: { id: { _eq: id } },
    fields: ['id', 'name', 'description', 'team_id'],
  });
  const addTask = () => {
    setNewFormContext({ project_id: project[0]?.id });
    toggleFormPopup('tasks');
  };
  const taskFilters = {
    _and: [
      { project_id: { _eq: project ? project[0].id : null } },
      { parent_id: { _is_null: true } },
    ],
  };
  if (!showCompleted) {
    taskFilters._and.push({ status: { _neq: 'completed' } });
  }
  return project ? (
    <Stack m={0}>
      <Card
        shadow={false}
        mt={0}
        borderLeftWidth={0}
        borderTopWidth={0}
        borderRadius={0}
        pb={0}
        mb={0}
      >
        <Stack isInline spacing={10} p={5}>
          <Box p={5} pb={10} flexGrow={1}>
            <Heading size={'md'}>{project[0].name}</Heading>
          </Box>
          <Button
            variant={'ghost'}
            variantColor={'brand'}
            size={'sm'}
            onClick={() => setShow(!show)}
          >
            Edit
          </Button>
        </Stack>
        <Box p={5}>
          <Modal
            title={project[0].name}
            show={show}
            onClose={() => setShow(!show)}
            href={`/projects/[id]`}
            as={`/projects/${project[0]?.id}`}
          >
            <Projects.Form model={project[0]} showList={false} />
          </Modal>
        </Box>
      </Card>

      <Stack m={5} isInline>
        <Box flexGrow={1} />
        <Button
          variant={'ghost'}
          variantColor={'brand'}
          size={'sm'}
          onClick={() => setExpandAll(!expandAll)}
        >
          Toggle Sub Tasks
        </Button>
        <Button
          mx={2}
          variant={'ghost'}
          variantColor={'brand'}
          size={'sm'}
          onClick={() => setShowCompleted(!showCompleted)}
        >
          Toggle Completed
        </Button>
        <Button
          variant={'solid'}
          variantColor={'brand'}
          leftIcon={'small-add'}
          size={'sm'}
          onClick={addTask}
        >
          Add Task
        </Button>
      </Stack>
      <Box m={5} p={0} borderRadius={5}>
        <Tasks.List
          expandAll={expandAll}
          where={taskFilters}
          listItemProps={{ showCompleted }}
        />
      </Box>
    </Stack>
  ) : (
    <Skeleton />
  );
};

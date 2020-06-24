import {
  Box,
  IconButton,
  Stack,
  Collapse,
  Text,
  Progress,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import useMutation from 'src/graphql/hooks/useMutation';
import Form from './form';
import ListItem from 'src/components/collection/List/ListItem';

export default ({ record }) => {
  const allTasks = record.ref_projects.map((proj) => proj.ref_tasks).flat();
  const totalTasks = allTasks?.length;
  const completedTasks = (allTasks || []).filter(
    (t) => t.status === 'completed'
  ).length;
  const progress = (completedTasks * 100) / totalTasks;
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const mutate = useMutation({
    resource: 'teams',
    operation: 'delete',
  });
  return (
    <ListItem expand={show}>
      <Stack isInline textAlign={'center'} alignItems={'center'} pr={4}>
        <IconButton
          variant={'ghost'}
          icon={show ? 'chevron-down' : 'chevron-right'}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleToggle();
          }}
          flex={1}
        />
        <Box flex={10} textAlign={'initial'}>
          <Text fontSize={'sm'}>{record.name}</Text>
        </Box>
        <Stack flex={4} spacing={1} alignItems={'baseline'}>
          <Text fontSize={12}>
            Completed {completedTasks} out of {totalTasks} Tasks
          </Text>
          <Progress
            color={progress > 85 ? 'green' : progress < 25 ? 'red' : 'yellow'}
            value={totalTasks ? progress : 0}
            w={200}
            borderRadius={5}
          />
        </Stack>
        <Box flex={5} />

        <IconButton
          flex={2}
          ml={2}
          variant={'ghost'}
          size={'sm'}
          icon={'delete'}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            mutate({ variables: { where: { id: { _eq: record.id } } } });
          }}
        />
      </Stack>
      <Collapse isOpen={show}>
        <Form model={record} />
      </Collapse>
    </ListItem>
  );
};

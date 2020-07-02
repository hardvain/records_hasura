import {
  Box,
  IconButton,
  Stack,
  Text,
  Progress,
  useColorMode, Tooltip,
} from '@chakra-ui/core';
import Link from 'next/link';
import React, { useState } from 'react';
import Delete from 'src/containers/actions/delete';
import useMutation from 'src/hooks/graphql/useMutation';
import Form from './form';
import ListItem from 'src/containers/collection/list/ListItem';
import Drawer from 'src/components/drawer';
export default ({ record }) => {
  const projects = record.ref_projects;
  const allTasks = record.ref_projects.map((proj) => proj.ref_tasks).flat();
  const totalTasks = allTasks?.length;
  const completedTasks = (allTasks || []).filter(
    (t) => t.status === 'completed'
  ).length;
  const progress = (completedTasks * 100) / totalTasks;

  return (
    <ListItem>
      <Link href={`/teams/[id]`} as={`/teams/${record?.id}`}>
        <Stack
          isInline
          textAlign={'center'}
          alignItems={'center'}
          pr={4}
        >
          <Box flex={6} textAlign={'initial'}>
            <Text fontSize={'md'}>{record.name}</Text>
          </Box>
          <Text fontSize={14} flex={6}>
            {projects.length} Active Project(s)
          </Text>
          <Tooltip label={`Completed ${completedTasks} out of ${totalTasks} Tasks`}>
            <Progress
              color={progress > 85 ? 'green' : progress < 25 ? 'red' : 'yellow'}
              value={totalTasks ? progress : 0}
              w={200}
              borderRadius={5}
            />
          </Tooltip>
          <Box flex={5} />
          <Delete resource={'teams'} id={record.id} />
        </Stack>
      </Link>
    </ListItem>
  );
};

import {
  Box,
  IconButton,
  Stack,
  Collapse,
  Progress,
  Text,
  Button,
  Divider,
  Badge,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorMode,
  Tooltip,
} from '@chakra-ui/core';
import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react';
import Delete from 'src/containers/actions/delete';
import ListItem from 'src/containers/collection/list/ListItem';

export default ({ record }) => {
  const totalTasks = record.ref_tasks?.length;
  const completedTasks = (record.ref_tasks || []).filter(
    (t) => t.status === 'completed'
  ).length;
  const progress = (completedTasks * 100) / totalTasks;

  return (
    <ListItem highlight>
      <Stack isInline textAlign={'center'} alignItems={'center'} pr={4}>
        <Box flex={10}>
          <Link as={`/projects/${record.id}`} href={`/projects/[id]`}>
            <Box textAlign={'initial'}>{record.name}</Box>
          </Link>
        </Box>

        <Box flex={1}>
          {totalTasks > 0 && (
            <Tooltip
              label={`Completed ${completedTasks} out of ${totalTasks} Tasks`}
            >
              <Box>
                <Progress
                  h={3}
                  w={200}
                  color={
                    progress > 85 ? 'green' : progress < 25 ? 'red' : 'yellow'
                  }
                  value={totalTasks ? progress : 0}
                  borderRadius={2}
                />
              </Box>
            </Tooltip>
          )}
        </Box>
        <Box flex={5} />
        <Delete resource={'projects'} id={record.id} />
      </Stack>
    </ListItem>
  );
};

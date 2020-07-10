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
import KeyResults from 'src/modules/KeyResults';
import Tasks from 'src/modules/Tasks';

export default ({ record, indent = 0 }) => {
  let sum = 0;
  const krs = record.ref_key_results;
  krs.forEach((v) => (sum = sum + v.progress));
  let percentage = krs?.length > 0 ? sum / krs.length : 0;
  return (
    <ListItem highlight>
      <Stack isInline textAlign={'center'} alignItems={'center'} pr={4}>
        <Box flex={10}>
          <Link as={`/objectives/${record.id}`} href={`/objectives/[id]`}>
            <Box textAlign={'initial'}>{record.name}</Box>
          </Link>
        </Box>
        <Box flexGrow={1} />
        <Tooltip label={`${percentage} %`}>
          <Box>
            <Progress
              h={3}
              w={200}
              color={
                percentage > 85 ? 'green' : percentage < 25 ? 'red' : 'yellow'
              }
              value={percentage}
              borderRadius={2}
            />
          </Box>
        </Tooltip>
        <Delete resource={'objectives'} id={record.id} />
      </Stack>
    </ListItem>
  );
};

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
  return (
    <ListItem highlight>
      <Stack isInline textAlign={'center'} alignItems={'center'} pr={4}>
        <Box flex={10}>
          <Link as={`/objectives/${record.id}`} href={`/objectives/[id]`}>
            <Box textAlign={'initial'}>{record.name}</Box>
          </Link>
        </Box>

        <Delete resource={'objectives'} id={record.id} />
      </Stack>
    </ListItem>
  );
};

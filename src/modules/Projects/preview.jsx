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
  DrawerCloseButton, useColorMode, Tooltip,
} from '@chakra-ui/core';
import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react';
import Delete from 'src/containers/actions/delete';
import useMutation from 'src/hooks/graphql/useMutation';
import Form from './form';
import ListItem from 'src/containers/collection/list/ListItem';

export default ({ record }) => {
  const totalTasks = record.ref_tasks?.length;
  const completedTasks = (record.ref_tasks || []).filter(
    (t) => t.status === 'completed'
  ).length;
  const progress = (completedTasks * 100) / totalTasks;
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode } = useColorMode();

  return (
    <ListItem highlight>
      <Link as={`/projects/${record.id}`} href={`/projects/[id]`}>
        <Stack isInline textAlign={'center'} alignItems={'center'} pr={4}>
          <Box flex={10} textAlign={'initial'}>
            {record.name}
          </Box>
         <Box flex={1}>
           <Tooltip label={`Completed ${completedTasks} out of ${totalTasks} Tasks`}>
             <Progress
               color={progress > 85 ? 'green' : progress < 25 ? 'red' : 'yellow'}
               value={totalTasks ? progress : 0}
               borderRadius={5}
             />
           </Tooltip>
         </Box>
          <Box flex={5} />
          <Delete resource={'projects'} id={record.id} />
        </Stack>
      </Link>

      <Drawer
        size={'xl'}
        isOpen={show}
        placement="right"
        onClose={() => setShow(false)}
        finalFocusRef={show}
        bg={colorMode === 'light' ? 'white' : '#333'}
      >
        <DrawerOverlay />
        <DrawerContent overflowY={'scroll'} bg={colorMode === 'light' ? 'white' : '#333'}>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody bg={colorMode === 'light' ? 'white' : '#333'}>
            <Form model={record} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </ListItem>
  );
};

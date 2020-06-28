import {
  Box,
  IconButton,
  Stack,
  Collapse,
  Badge,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Divider,
  Button,
  Progress,
  Tag,
  useColorMode,
} from '@chakra-ui/core';
import Link from 'next/link';
import React, { useState } from 'react';
import moment from 'moment';
import useMutation from 'src/hooks/graphql/useMutation';
import Form from './form';
import ListItem from 'src/containers/collection/list/ListItem';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
export default ({ record }) => {
  const mutate = useMutation({
    resource: 'tasks',
    operation: 'update',
  });
  const changeStatus = (value) => {
    mutate({
      variables: {
        object: { ...record, status: value },
        where: { id: { _eq: record?.id } },
      },
    });
  };
  const subTasks = record.ref_sub_tasks;
  const totalTasks = subTasks?.length;
  const completedTasks = (subTasks || []).filter(
    (t) => t.status === 'completed'
  ).length;
  const progress = (completedTasks * 100) / totalTasks;
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode } = useColorMode();

  const statusColor =
    record.status === 'todo'
      ? 'yellow'
      : record.status === 'in_progress'
      ? 'blue'
      : 'green';
  return (
    <ListItem borderLeftWidth={3} borderLeftColor={`${statusColor}.500`}>
      <Stack
        isInline
        textAlign={'center'}
        alignItems={'center'}
        pr={4}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleToggle();
        }}
      >
        <Stack alignItems={'baseline'}>
          <Box>{record.name}</Box>
          <Stack isInline>
            <Text fontSize={12}>
              {record.due_date
                ? moment(record.due_date).format('Do, MMMM YYYY')
                : '-'}
            </Text>
          </Stack>
        </Stack>
        <Box flexGrow={1}></Box>
        {totalTasks > 0 && (
          <Stack flex={1} spacing={1} alignItems={'baseline'}>
            <Text fontSize={12}>
              Completed {completedTasks} out of {totalTasks} Sub Tasks
            </Text>
            <Progress
              color={progress > 85 ? 'green' : progress < 25 ? 'red' : 'yellow'}
              value={totalTasks ? progress : 0}
              w={200}
              borderRadius={5}
            />
          </Stack>
        )}
        {record?.status !== 'completed' ? (
          <Button
            variant={'outline'}
            variantColor={'green'}
            size={'xs'}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              changeStatus('completed');
            }}
          >
            Mark as Done
          </Button>
        ) : (
          <Button
            variant={'outline'}
            variantColor={'orange'}
            size={'xs'}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              changeStatus('todo');
            }}
          >
            Reopen
          </Button>
        )}
        {record?.ref_project && (
          <Tag size={'sm'}>{record?.ref_project?.name}</Tag>
        )}
      </Stack>
      <Drawer
        size={'xl'}
        isOpen={show}
        placement="right"
        onClose={() => setShow(false)}
        finalFocusRef={show}
        bg={colorMode === 'light' ? 'white' : '#333'}
      >
        <DrawerOverlay />
        <DrawerContent
          overflowY={'scroll'}
          bg={colorMode === 'light' ? 'white' : '#333'}
        >
          <DrawerCloseButton />
          <DrawerHeader>{record.name}</DrawerHeader>

          <DrawerBody bg={colorMode === 'light' ? 'white' : '#333'}>
            <Form model={record} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </ListItem>
  );
};

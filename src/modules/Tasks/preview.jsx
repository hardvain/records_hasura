import {
  Box,
  IconButton,
  Stack,
  Collapse,
  Badge,
  Text,
  Divider,
  Button,
  Progress,
} from '@chakra-ui/core';
import Link from 'next/link';
import React, { useState } from 'react';
import moment from 'moment';
import useMutation from 'src/graphql/hooks/useMutation';
import Form from './form';
import ListItem from 'src/components/collection/List/ListItem';

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
  const deleteMutate = useMutation({ resource: 'tasks', operation: 'delete' });
  const statusBadgeColor =
    record.status === 'todo'
      ? 'yellow'
      : record.status === 'in_progress'
      ? 'blue'
      : 'green';
  return (
    <ListItem expand={show}>
      <Stack isInline textAlign={'center'} alignItems={'center'} pr={4}>
        <IconButton
          mr={0}
          variant={'ghost'}
          icon={show ? 'chevron-down' : 'chevron-right'}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleToggle();
          }}
        />
        <Stack alignItems={'baseline'}>
          <Box>{record.name}</Box>
          <Stack isInline>
            <Text fontSize={12}>Team: {record?.team || '-'}</Text>
            <Divider orientation={'vertical'} />
            <Text fontSize={12}>Project: {record?.ref_project?.name}</Text>
            <Divider orientation={'vertical'} />
            <Text fontSize={12}>
              Due Date:{' '}
              {record.due_date
                ? moment(record.due_date).format('Do, MMMM YYYY, H:mm')
                : '-'}
            </Text>
            <Divider orientation={'vertical'} />

            <Box mr={2}>
              <Badge>{record.priority}</Badge>
            </Box>
            <Divider orientation={'vertical'} />

            <Box mr={2}>
              <Badge variantColor={statusBadgeColor}>{record.status}</Badge>
            </Box>
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
            onClick={() => changeStatus('completed')}
          >
            Mark as Done
          </Button>
        ) : (
          <Button
            variant={'outline'}
            variantColor={'orange'}
            size={'xs'}
            onClick={() => changeStatus('todo')}
          >
            Reopen
          </Button>
        )}
        <Box>
          <Link as={`/tasks/${record.id}`} href={'/tasks/[id]'}>
            <Button variant={'outline'} size={'xs'} rightIcon={'chevron-right'}>
              View Details
            </Button>
          </Link>
        </Box>
        <IconButton
          variant={'ghost'}
          ml={2}
          size={'sm'}
          icon={'delete'}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            deleteMutate({ variables: { where: { id: { _eq: record.id } } } });
          }}
        />
      </Stack>
      <Collapse isOpen={show}>
        <Form model={record} />
      </Collapse>
    </ListItem>
  );
};

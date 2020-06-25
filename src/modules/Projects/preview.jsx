import {
  Box,
  IconButton,
  Stack,
  Collapse,
  Progress,
  Text,
  Button, Divider,
} from '@chakra-ui/core';
import Link from 'next/link';
import React, { useState } from 'react';
import useMutation from 'src/graphql/hooks/useMutation';
import Form from './form';
import ListItem from 'src/components/collection/List/ListItem';

export default ({ record }) => {
  const totalTasks = record.ref_tasks?.length;
  const completedTasks = (record.ref_tasks || []).filter(
    (t) => t.status === 'completed'
  ).length;
  const progress = (completedTasks * 100) / totalTasks;
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const mutate = useMutation({
    resource: 'projects',
    operation: 'delete',
  });
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
          flex={1}
        />
        <Box flex={15} textAlign={'initial'}>
          {record.name}
        </Box>
        <Stack flex={1} spacing={1} alignItems={'baseline'}>
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
        <Link as={`/projects/${record.id}`} href={'/projects/[id]'}>
          <Button
            flex={2}
            variant={'outline'}
            size={'xs'}
            rightIcon={'chevron-right'}
          >
            View Details
          </Button>
        </Link>
        <IconButton
          flex={1}
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
        <Divider />
        <Form model={record} />
      </Collapse>
    </ListItem>
  );
};

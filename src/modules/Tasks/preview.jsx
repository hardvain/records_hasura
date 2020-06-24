import {
  Box,
  IconButton,
  Stack,
  Collapse,
  Badge,
  Text,
  Divider,
  Button,
} from '@chakra-ui/core';
import Link from 'next/link';
import React, { useState } from 'react';
import Card from 'src/components/Card';
import moment from 'moment';
import useMutation from 'src/graphql/hooks/useMutation';
import Form from './form';

export default ({ record }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const mutate = useMutation({ resource: 'tasks', operation: 'delete' });
  return (
    <Card
      m={0}
      borderRadius={0}
      borderBottomWidth={0}
      condensed
      highlight
      thickLeftBorder={show}
    >
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
              <Badge variantColor={'yellow'}>{record.status}</Badge>
            </Box>
          </Stack>
        </Stack>
        <Box flexGrow={1}></Box>
        <Link as={`/tasks/${record.id}`} href={'/tasks/[id]'}>
          <Button variant={'outline'} size={'xs'} rightIcon={'chevron-right'}>
            View Details
          </Button>
        </Link>
        <IconButton
          variant={'ghost'}
          ml={2}
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
    </Card>
  );
};

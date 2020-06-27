import { Box, IconButton, Stack, Collapse, Badge, Text } from '@chakra-ui/core';
import React, { useState } from 'react';
import moment from 'moment';
import useMutation from 'src/graphql/hooks/useMutation';
import Form from './form';
import ListItem from 'src/components/collection/List/ListItem';

export default ({ record }) => {
  const [show, setShow] = useState(false);
  const mutate = useMutation({
    resource: 'transactions',
    operation: 'delete',
  });
  const handleToggle = () => setShow(!show);
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
        <Stack alignItems={'flex-start'} flexGrow={1}>
          <Stack isInline spacing={10} w={'100%'}>
            <Box>
              {record.name} - {record.value}
            </Box>
            <Box flexGrow={1}></Box>
          </Stack>
          <Box>
            <Text fontSize={12}>
              {record.timestamp
                ? moment(record.timestamp).format('Do, MMMM YYYY')
                : '-'}
            </Text>
          </Box>
        </Stack>
        <Box mr={2}>
          <Badge>{record.priority}</Badge>
        </Box>
        <Box mr={2}>
          <Badge variantColor={'yellow'}>{record.status}</Badge>
        </Box>
        <Box>
          <Badge variantColor={'brand'}>{record.team}</Badge>
        </Box>
        <IconButton
          variant={'ghost'}
          variantColor={'red'}
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
    </ListItem>
  );
};

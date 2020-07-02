import { Box, IconButton, Stack, Collapse, Badge, Text } from '@chakra-ui/core';
import React, { useState } from 'react';
import moment from 'moment';
import Delete from 'src/containers/actions/delete';
import useMutation from 'src/hooks/graphql/useMutation';
import Form from './form';
import ListItem from 'src/containers/collection/list/ListItem';

export default ({ record }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <ListItem expand={show}>
      <Stack isInline textAlign={'center'} alignItems={'center'} pr={4}>
        <IconButton
          mr={0}
          variant={'ghost'}
          size="sm"
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
        <Delete resource={'transactions'} id={record.id} />
      </Stack>
      <Collapse isOpen={show}>
        <Form model={record} />
      </Collapse>
    </ListItem>
  );
};

import { Box, IconButton, Stack, Collapse, Badge, Text } from '@chakra-ui/core';
import React, { useState } from 'react';
import moment from 'moment';
import Modal from 'src/components/core/modal';
import Delete from 'src/containers/actions/delete';
import useMutation from 'src/hooks/graphql/useMutation';
import Form from './form';
import ListItem from 'src/containers/collection/list/ListItem';

export default ({ record }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <ListItem
      expand={show}
      borderLeftWidth={4}
      borderLeftColor={record?.type === 'expense' ? 'red.500' : 'green.500'}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        handleToggle();
      }}
    >
      <Modal
        title={record.name}
        show={show}
        onClose={() => setShow(!show)}
        href={`/transactions/[id]`}
        as={`/transactions/${record?.id}`}
      >
        <Form model={record} isPreview={true} />
      </Modal>
      <Stack isInline textAlign={'center'} alignItems={'center'} pr={4}>
        <Stack isInline flex={5} alignItems={'baseline'}>
          <Box>{record.name}</Box>
        </Stack>
        <Box flex={1}>
          <Text fontSize={14}>{record.value}</Text>
        </Box>

        <Box flexGrow={1}></Box>
        <Delete resource={'transactions'} id={record.id} />
      </Stack>
    </ListItem>
  );
};

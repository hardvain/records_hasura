import { Box, Collapse, IconButton, Stack, Text } from '@chakra-ui/core';
import Link from 'next/link';
import Card from 'src/components/core/card';
import Drawer from 'src/components/core/drawer';
import Modal from 'src/components/core/modal';
import Delete from 'src/containers/actions/delete';
import Tasks from 'src/modules/Tasks';

import Snippets from './index';
import React, { useState } from 'react';
import useMutation from 'src/hooks/graphql/useMutation';
import ListItem from 'src/containers/collection/list/ListItem';
export default ({ record }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <ListItem
      borderWidth={1}
      borderLeftWidth={1}
      cursor={'pointer'}
      px={3}
      py={1}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        handleToggle();
      }}
    >
      <Stack isInline textAlign={'center'} alignItems={'center'} pr={4}>
        <Box flexGrow={1} textAlign={'initial'}>
          <Text fontSize={'md'}>{record.name}</Text>
        </Box>
        <Delete resource={'snippets'} id={record.id} />
      </Stack>
      <Modal
        title={record.name}
        show={show}
        onClose={() => setShow(!show)}
        href={`/snippets/[id]`}
        as={`/snippets/${record?.id}`}
      >
        <Snippets.Form model={record} isPreview={true} />
      </Modal>
    </ListItem>
  );
};

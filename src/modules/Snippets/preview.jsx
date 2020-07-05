import { Box, Collapse, IconButton, Stack, Text } from '@chakra-ui/core';
import Link from 'next/link';
import Drawer from 'src/components/drawer';
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
    <ListItem py={1}>
      <Stack
        py={2}
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
        <Box flexGrow={1} textAlign={'initial'}>
          <Text fontSize={'md'}>{record.name}</Text>
        </Box>
        <Delete resource={'snippets'} id={record.id} />
      </Stack>
      <Drawer
        size={'xl'}
        title={record.name}
        show={show}
        setShow={setShow}
        href={`/snippets/[id]`}
        as={`/snippets/${record?.id}`}
      >
        <Snippets.Form model={record} />
      </Drawer>
    </ListItem>
  );
};

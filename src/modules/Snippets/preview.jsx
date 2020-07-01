import { Box, Collapse, IconButton, Stack, Text } from '@chakra-ui/core';
import Link from 'next/link';

import Snippets from './index';
import React, { useState } from 'react';
import useMutation from 'src/hooks/graphql/useMutation';
import ListItem from 'src/containers/collection/list/ListItem';
export default ({ record }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const mutate = useMutation({
    resource: 'snippets',
    operation: 'delete',
  });
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

        <IconButton
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
        <Snippets.Form model={record} />
      </Collapse>
    </ListItem>
  );
};

import {
  Box,
  IconButton,
  Stack,
  Text,
  Progress,
  useColorMode,
} from '@chakra-ui/core';
import Link from 'next/link';
import React, { useState } from 'react';
import useMutation from 'src/hooks/graphql/useMutation';
import Form from './form';
import ListItem from 'src/containers/collection/list/ListItem';
import Drawer from 'src/components/drawer';
export default ({ record }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const mutate = useMutation({
    resource: 'snippets',
    operation: 'delete',
  });
  return (
    <ListItem>
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
        <Box flex={6} textAlign={'initial'}>
          <Text fontSize={'md'}>{record.name}</Text>
        </Box>

        <Box flex={5} />
        <IconButton
          flex={2}
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
      <Drawer title={record.name} show={show} setShow={setShow}>
        <Form model={record} />
      </Drawer>
    </ListItem>
  );
};

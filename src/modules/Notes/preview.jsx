import { Box, IconButton, Stack, Text } from '@chakra-ui/core';
import Link from 'next/link';
import React, { useState } from 'react';
import Delete from 'src/containers/actions/delete';
import useMutation from 'src/hooks/graphql/useMutation';
import ListItem from 'src/containers/collection/list/ListItem';
export default ({ record }) => {
  const [show, setShow] = useState(false);

  return (
    <ListItem>
      <Link href={`/notes/[id]`} as={`/notes/${record.id}`}>
        <Stack
          py={2}
          isInline
          textAlign={'center'}
          alignItems={'center'}
          pr={4}
        >
          <Box flex={6} textAlign={'initial'}>
            <Text fontSize={'md'}>{record.name}</Text>
          </Box>

          <Box flex={5} />
          <Delete resource={'notes'} id={record.id} />
        </Stack>
      </Link>
    </ListItem>
  );
};

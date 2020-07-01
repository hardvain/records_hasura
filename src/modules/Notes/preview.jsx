import { Box, IconButton, Stack, Text } from '@chakra-ui/core';
import Link from 'next/link';
import React, { useState } from 'react';
import useMutation from 'src/hooks/graphql/useMutation';
import ListItem from 'src/containers/collection/list/ListItem';
export default ({ record }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const mutate = useMutation({
    resource: 'notes',
    operation: 'delete',
  });
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
      </Link>
    </ListItem>
  );
};

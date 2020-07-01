import { Box, Button, Divider, Skeleton, Stack } from '@chakra-ui/core';
import React from 'react';
import useQuery from 'src/hooks/graphql/useQuery';
import Notes from 'src/modules/Notes';
import { useRouter } from 'next/router';
import Card from 'src/components/core/card';
export default () => {
  const router = useRouter();
  const { id } = router.query;
  const [snippet] = useQuery({
    name: 'notes',
    where: { id: { _eq: id } },
    fields: ['id', 'name', 'description'],
  });
  return snippet ? (
    <Box m={3} shadow p={5}>
      <Notes.Form model={snippet[0]} />
    </Box>
  ) : (
    <Skeleton />
  );
};

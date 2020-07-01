import { Box, Button, Divider, Skeleton, Stack } from '@chakra-ui/core';
import React from 'react';
import useQuery from 'src/hooks/graphql/useQuery';
import Snippets from 'src/modules/Snippets';
import { useRouter } from 'next/router';
import Card from 'src/components/core/card';
export default () => {
  const router = useRouter();
  const { id } = router.query;
  const [snippet] = useQuery({
    name: 'snippets',
    where: { id: { _eq: id } },
    fields: ['id', 'name', 'description'],
  });
  return snippet ? (
    <Box m={3} shadow p={5}>
      <Snippets.Form model={snippet[0]} />
    </Box>
  ) : (
    <Skeleton />
  );
};

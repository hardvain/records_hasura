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
    fields: ['id', 'name', 'description', 'checkins', 'status', 'priority'],
  });
  return snippet ? (
    <Card m={5} p={5}>
      <Snippets.Form model={snippet[0]} />
    </Card>
  ) : (
    <Skeleton />
  );
};

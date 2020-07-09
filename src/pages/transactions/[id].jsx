import { Box, Button, Divider, Skeleton, Stack } from '@chakra-ui/core';
import React from 'react';
import useQuery from 'src/hooks/graphql/useQuery';
import Transactions from 'src/modules/Transactions';
import { useRouter } from 'next/router';
import Card from 'src/components/core/card';
export default () => {
  const router = useRouter();
  const { id } = router.query;
  const [task] = useQuery({
    name: 'transactions',
    where: { id: { _eq: id } },
    fields: [
      'id',
      'name',
      'timestamp',
      'description',
      'team',
      'team',
      'type',
      'value',
      'mode',
      'category_id',
      'ref_category{id,name}',
    ],
  });
  return task ? (
    <Box m={3} shadow p={5}>
      <Transactions.Form model={task[0]} />
    </Box>
  ) : (
    <Skeleton />
  );
};

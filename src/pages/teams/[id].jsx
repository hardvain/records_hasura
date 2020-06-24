import { Box, Skeleton } from '@chakra-ui/core';
import React from 'react';
import useQuery from 'src/graphql/hooks/useQuery';
import Teams from 'src/modules/Teams';
import { useRouter } from 'next/router';
export default () => {
  const router = useRouter();
  const { id } = router.query;
  const [task] = useQuery({
    name: 'teams',
    where: { id: { _eq: id } },
    fields: ['id', 'name', 'description'],
  });
  return (
    <Box p={8}>{task ? <Teams.Form model={task[0]} /> : <Skeleton />}</Box>
  );
};

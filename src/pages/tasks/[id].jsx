import { Box, Skeleton } from '@chakra-ui/core';
import React from 'react';
import useQuery from 'src/graphql/hooks/useQuery';
import Tasks from 'src/modules/Tasks';
import { useRouter } from 'next/router';
import Card from 'src/components/Card';
export default () => {
  const router = useRouter();
  const { id } = router.query;
  const [task] = useQuery({
    name: 'tasks',
    where: { id: { _eq: id } },
    fields: ['id', 'name', 'due_date'],
  });
  return (
    <Box p={3}>
      <Card>{task ? <Tasks.Form model={task[0]} /> : <Skeleton />}</Card>
    </Box>
  );
};
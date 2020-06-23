import { Box } from '@chakra-ui/core';
import React from 'react';
import useQuery from 'src/graphql/hooks/useQuery';
import Tasks from 'src/modules/Tasks';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();
  const { id } = router.query;
  const [project] = useQuery({
    name: 'projects',
    where: { id: { _eq: id } },
    fields: ['id', 'name'],
  });
  return (
    <Box p={3}>
      <Tasks.List
        order_by={{
          team: 'asc',
          due_date: 'asc',
        }}
        where={{ _and: [{ project_id: { _eq: id } }] }}
      />
    </Box>
  );
};

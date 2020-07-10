import { Box, Button, Divider, Skeleton, Stack } from '@chakra-ui/core';
import React from 'react';
import useQuery from 'src/hooks/graphql/useQuery';
import Thoughts from 'src/modules/Thoughts';
import { useRouter } from 'next/router';
import Card from 'src/components/core/card';
export default () => {
  const router = useRouter();
  const { id } = router.query;
  const [thought] = useQuery({
    name: 'thoughts',
    where: { id: { _eq: id } },
    fields: ['id', 'name', 'description', 'project_id', 'team_id', 'task_id'],
  });
  return thought ? (
    <Card m={5} p={5}>
      <Thoughts.Form model={thought[0]} />
    </Card>
  ) : (
    <Skeleton />
  );
};

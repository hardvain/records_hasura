import { Box, Skeleton } from '@chakra-ui/core';
import React from 'react';
import useQuery from 'src/graphql/hooks/useQuery';
import Projects from 'src/modules/Projects';
import { useRouter } from 'next/router';
import Card from 'src/components/Card';
export default () => {
  const router = useRouter();
  const { id } = router.query;
  const [project] = useQuery({
    name: 'projects',
    where: { id: { _eq: id } },
    fields: ['id', 'name', 'description'],
  });
  return (
    <Card m={3} h={'100%'} p={8}>
      {project ? <Projects.Form model={project[0]} /> : <Skeleton />}
    </Card>
  );
};

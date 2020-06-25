import { Box, Skeleton } from '@chakra-ui/core';
import React from 'react';
import Card from 'src/components/Card';
import useQuery from 'src/graphql/hooks/useQuery';
import Teams from 'src/modules/Teams';
import { useRouter } from 'next/router';
export default () => {
  const router = useRouter();
  const { id } = router.query;
  const [team] = useQuery({
    name: 'teams',
    where: { id: { _eq: id } },
    fields: ['id', 'name', 'description'],
  });
  return (
    <Card m={3} h={'100%'} p={8}>{team ? <Teams.Form model={team[0]} /> : <Skeleton />}</Card>
  );
};

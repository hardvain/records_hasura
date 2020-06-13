import { Box, Skeleton } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Card from 'src/components/Card';
import Filters from 'src/components/records/Filters';
import RecordsWithForm from 'src/components/records/RecordsWithForm';
export default () => {
  const router = useRouter();
  const { id } = router.query;
  const [team, setTeam] = useState();
  useEffect(() => {
    if (id) {
      fetch(`/api/teams/${id}`, { method: 'GET' })
        .then((r) => r.json())
        .then((r) => setTeam(r));
    }
  }, [id]);
  if (!team || !id) {
    return <Skeleton colorStart="#232626" colorEnd="#232626" h={300} />;
  }
  return (
    <Box py={10}>
      <Filters filters={{ team: team.id }}>
        {(filters) => <RecordsWithForm filters={filters} />}
      </Filters>
    </Box>
  );
};

import { Box, Heading, SimpleGrid } from '@chakra-ui/core';
import { useEffect, useState } from 'react';
import SearchSelect from 'src/components/SearchSelect';
import { useStore } from 'src/store';
import Card from 'src/components/Card';
export default () => {
  const [teams, setTeams] = useState([]);
  const { getTeams } = useStore((state) => ({
    getTeams: state.getTeams,
  }));
  useEffect(() => {
    getTeams().then((r) => setTeams(r.items));
  }, []);

  return (
    <Box>
      <Box my={4}>
        <Heading size={'lg'}>Teams</Heading>
      </Box>
      <Box w={200}>
        <SearchSelect items={teams}/>
      </Box>
      <SimpleGrid columns={3} spacing={20}>
        {teams.map((team) => (
          <Card key={team.id} mb={10} textAlign={"center"}>
            {team.name}
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/core';
import { useEffect, useState } from 'react';
import NextLink from 'next/link';
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
      <SimpleGrid columns={3} spacing={20}>
        {teams.map((team) => (
          <NextLink as={`/teams/${team.id}`} href={`/teams/[id]`} key={team.id}>
            <Card  mb={10} textAlign={'center'}>
              <Flex
                alignItems={'center'}
                justifyContent={'space-around'}
                h={'100%'}
              >
                {team.name}
              </Flex>
            </Card>
          </NextLink>
        ))}
      </SimpleGrid>
    </Box>
  );
};

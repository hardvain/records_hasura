import {
  Box,
  Skeleton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Heading,
  SimpleGrid,
} from '@chakra-ui/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Card from 'src/components/Card';
import DailyTrends from 'src/components/records/charts/DailyTrends';
import WeeklyTrends from 'src/components/records/charts/WeeklyTrends';
import Filters from 'src/components/records/Filters';
import RecordsWithForm from 'src/components/records/RecordsWithForm';
import { useStore } from 'src/store';
export default () => {
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));
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
    <Card>
      <Box pt={5} px={5}>
        <Stack isInline pb={10}>
          <Heading size={'lg'}>{team.name}</Heading>
        </Stack>
        <Tabs>
          <TabList>
            <Tab>Dashboard</Tab>
            <Tab>Goals</Tab>
            <Tab>Objectives</Tab>
            <Tab>Projects</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box p={10}>
                <Filters
                  filters={{
                    recordType: 'water',
                    orderBy: 'timestamp',
                    orderDirection: 'asc',
                    date,
                  }}
                >
                  {(filters) => (
                    <SimpleGrid columns={2} spacing={10}>
                      <DailyTrends filters={filters} />
                      <WeeklyTrends filters={filters} />
                    </SimpleGrid>
                  )}
                </Filters>
              </Box>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Card>
  );
};

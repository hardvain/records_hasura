import { Box, SimpleGrid, Stack } from '@chakra-ui/core';
import { useEffect } from 'react';
import Filters from 'src/components/records/Filters';
import RecordsWithForm from 'src/components/records/RecordsWithForm';
import DailyTrends from 'src/components/records/charts/DailyTrends';
import WeeklyTrends from 'src/components/records/charts/WeeklyTrends';
import { useStore } from 'src/store';

export default () => {
  const { date, setColors } = useStore((state) => ({
    date: state.ui.date,
    setColors: state.setColors,
  }));

  useEffect(() => {
    setColors({ primary: 'blue', secondary: 'cyan' });
  }, []);
  return (
    <Box py={30}>
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
            <RecordsWithForm filters={filters} frozenType={'water'} />
            <Stack spacing={10}>
              <DailyTrends filters={filters} h={300} />
              <WeeklyTrends filters={filters} h={300} />
            </Stack>
          </SimpleGrid>
        )}
      </Filters>
    </Box>
  );
};

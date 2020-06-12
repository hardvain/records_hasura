import { Box, SimpleGrid, Stack } from '@chakra-ui/core';
import { useEffect } from 'react';
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
    <Box py={30} px={50}>
      <RecordsWithForm
        filters={{ date: date.format('yyyy-MM-DD'), recordType: 'water' }}
        frozenType={'water'}
        collapseList={true}
      />
      <Box mt={4}>
        <SimpleGrid columns={2} spacing={10}>
          <DailyTrends date={date.format('yyyy-MM-DD')} recordType={'water'} />
          <WeeklyTrends recordType={'water'} />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

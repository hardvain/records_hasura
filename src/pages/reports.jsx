import {
  Box,
  Button,
  Flex,
  IconButton,
  SimpleGrid,
  Stack,
} from '@chakra-ui/core';
import DatePicker from 'src/components/DatePicker';
import RecordForm from 'src/components/records/form';
import GlucoseDailyTrends from 'src/components/records/Glucose/DailyTrends';
import WaterDailyTrends from 'src/components/records/Water/DailyTrends';
import RecordsList from 'src/components/records/list';
import moment from 'moment';
import { useState } from 'react';
import { useStore } from 'src/store';

export default () => {
  const { date, nextDate, prevDate, setDate } = useStore((state) => ({
    date: state.ui.date,
    nextDate: state.nextDate,
    prevDate: state.prevDate,
    setDate: state.setDate,
  }));
  const [selectedRecord, setSelectedRecord] = useState();

  return (
    <Box py={30} px={50}>
      <Flex justifyContent={'flex-start'}>
        <IconButton
          size={'sm'}
          icon={'chevron-left'}
          mr={2}
          onClick={prevDate}
        />
        <DatePicker type={'button'} selected={date} onChange={setDate} />
        <IconButton
          size={'sm'}
          icon={'chevron-right'}
          ml={2}
          onClick={nextDate}
        />
      </Flex>
      <SimpleGrid columns={2} spacing={10} mt={5}>
        <GlucoseDailyTrends date={date.format('yyyy-MM-DD')} />
        <WaterDailyTrends date={date.format('yyyy-MM-DD')} />
      </SimpleGrid>
    </Box>
  );
};

import { Box, Stack, Stat, StatLabel, StatNumber } from '@chakra-ui/core';
import Card from 'src/components/Card';
import Glucose from 'src/modules/Glucose';
import moment from 'moment';
import DatePicker from 'src/components/DatePicker';
import { useStore } from 'src/store';
export default () => {
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));
  return (
    <Box py={30}>

      <Glucose.List
        where={{
          _and: [
            { timestamp: { _gte: date.startOf('day').toISOString(true) } },
            { timestamp: { _lte: date.endOf('day').toISOString(true) } },
          ],
        }}
      />
    </Box>
  );
};

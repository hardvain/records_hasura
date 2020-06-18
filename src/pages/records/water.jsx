import { Box, Stack, Stat, StatLabel, StatNumber } from '@chakra-ui/core';
import Card from 'src/components/Card';
import Water from 'src/modules/Water';
import moment from 'moment';
import DatePicker from 'src/components/DatePicker';
import { useStore } from 'src/store';
export default () => {
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));
  return (
    <Box py={30}>
      <Water.Aggregate
        where={{
          _and: [
            { timestamp: { _gte: date.startOf('day').toISOString(true) } },
            { timestamp: { _lte: date.endOf('day').toISOString(true) } },
          ],
        }}
      >
        {(data) => (
          <Card title={'Stats'}>
            <Stack spacing={10} isInline>
              <Stat>
                <StatLabel>Total Water Consumed Today</StatLabel>
                <StatNumber>{data.sum.quantity}</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Number of Intakes</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            </Stack>
          </Card>
        )}
      </Water.Aggregate>

      <Water.List
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

import { Box, Stack, Stat, StatLabel, StatNumber } from '@chakra-ui/core';
import Card from 'src/components/Card';
import Tasks from 'src/modules/Tasks';
import Water from 'src/modules/Water';

export default () => {
  return (
    <Box p={10}>
      <Card title={'Task Stats'}>
        <Stack spacing={10} isInline>
          <Tasks.Aggregate>
            {(data) => (
              <Stat>
                <StatLabel>Total Tasks</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            )}
          </Tasks.Aggregate>
          <Tasks.Aggregate where={{priority:{_eq:"high"}}}>
            {(data) => (
              <Stat>
                <StatLabel>High Priority Tasks</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            )}
          </Tasks.Aggregate>
          <Tasks.Aggregate where={{priority:{_eq:"very_high"}}}>
            {(data) => (
              <Stat>
                <StatLabel>Very High Priority Tasks</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            )}
          </Tasks.Aggregate>
        </Stack>
      </Card>

      <Water.Aggregate>
        {(data) => (
          <Card title={'Water Stats'}>
            <Stack spacing={10} isInline>
              <Stat>
                <StatLabel>Total Water Consumed</StatLabel>
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
    </Box>
  );
};

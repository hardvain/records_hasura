import { Box, Stack, Stat, StatLabel, StatNumber } from '@chakra-ui/core';
import Card from 'src/components/Card';
import Tasks from 'src/modules/Tasks';
export default () => {
  return (
    <Box py={30}>
      <Tasks.Aggregate>
        {(data) => (
          <Card title={'Stats'}>
            <Stack spacing={10} isInline>
              <Stat>
                <StatLabel>Total Tasks</StatLabel>
                <StatNumber>{data.count}</StatNumber>
              </Stat>
            </Stack>
          </Card>
        )}
      </Tasks.Aggregate>

      <Card my={5}>
        <Tasks.Form />
      </Card>

      <Tasks.List />
    </Box>
  );
};

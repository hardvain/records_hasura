import { Box, Stack, Stat, StatLabel, StatNumber } from '@chakra-ui/core';
import Card from 'src/components/Card';
import Water from 'src/modules/Water';
export default () => {
  return (
    <Box py={30}>
      <Water.Aggregate>
        {(data) => (
          <Card title={'Stats'}>
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

      <Card my={5}>
        <Water.Form />
      </Card>

      <Water.List />
    </Box>
  );
};

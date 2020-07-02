import { Box, Icon, Stack } from '@chakra-ui/core';
import {
  GiSugarCane,
  GiWaterDrop,
  GiFruitBowl,
  GiMoneyStack,
  GiBed,
  GiBrain,
} from 'react-icons/gi';
import StatsCard from 'src/components/stats/StatsCard';
export default () => {
  return (
    <Stack isInline spacing={10} w={'100%'} justifyContent={'space-evenly'}>
      <StatsCard icon={<Box as={GiWaterDrop} w={5} h={5} />}>
        200
      </StatsCard>
      <StatsCard icon={<Box as={GiWaterDrop} w={5} h={5} />}>
        200
      </StatsCard>
      <StatsCard icon={<Box as={GiWaterDrop} w={5} h={5} />}>
        200
      </StatsCard>
      <StatsCard icon={<Box as={GiWaterDrop} w={5} h={5} />}>
        200
      </StatsCard>
      <StatsCard icon={<Box as={GiWaterDrop} w={5} h={5} />}>
        200
      </StatsCard>
      <StatsCard icon={<Box as={GiWaterDrop} w={5} h={5} />}>
        200
      </StatsCard>
      <StatsCard icon={<Box as={GiWaterDrop} w={5} h={5} />}>
        200
      </StatsCard>
    </Stack>
  );
};

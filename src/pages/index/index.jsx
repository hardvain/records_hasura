import { Box, Stack } from '@chakra-ui/core';
import React from 'react';
import Card from 'src/components/core/card';
import TasksSummary from 'src/pages/index/TasksSummary';
import GlucoseSummary from 'src/pages/index/GlucoseSummary';
import WaterSummary from 'src/pages/index/WaterSummary';
import TransactionSummary from 'src/pages/index/TransactionSummary';
export default () => {
  return (
    <Box p={10}>
      <Stack spacing={10}>
        <Card animate highlight>
          <TasksSummary />
        </Card>
        <Stack isInline spacing={10}>
          <Card animate highlight w={'100%'}>
            <GlucoseSummary />
          </Card>
          <Card animate highlight w={'100%'}>
            <WaterSummary />
          </Card>
        </Stack>
        <Card animate highlight>
          <TransactionSummary />
        </Card>
      </Stack>
    </Box>
  );
};

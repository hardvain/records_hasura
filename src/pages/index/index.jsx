import {
  Box,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
} from '@chakra-ui/core';
import React from 'react';
import Card from 'src/components/Card';
import { useStore } from 'src/store';
import TasksSummary from 'src/pages/index/TasksSummary';
import GlucoseSummary from 'src/pages/index/GlucoseSummary';
import WaterSummary from 'src/pages/index/WaterSummary';
import TransactionSummary from 'src/pages/index/TransactionSummary';
export default () => {
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));
  return (
    <Box p={10}>
      <Stack spacing={10}>
        <Stack my={5}>
          <Card animate highlight>
            <TasksSummary />
          </Card>
        </Stack>
        <Stack isInline spacing={10}>
          <Stack flex={1} my={5}>
            <Card animate highlight>
              <GlucoseSummary />
            </Card>
          </Stack>
          <Stack flex={1} my={5}>
            <Card animate highlight>
              <WaterSummary />
            </Card>
          </Stack>
        </Stack>
        <Stack my={5}>
          <Card animate highlight>
            <TransactionSummary />
          </Card>
        </Stack>
      </Stack>
    </Box>
  );
};

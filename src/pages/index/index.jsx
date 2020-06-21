import {
  Box,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Flex,
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
        <Card animate highlight>
          <TasksSummary />
        </Card>
        <Flex direction={['column', 'row']} justifyContent={'space-between'}>
          <Card animate highlight w={'100%'}>
            <GlucoseSummary />
          </Card>
          <Card animate highlight w={'100%'}>
            <WaterSummary />
          </Card>
        </Flex>
        <Card animate highlight>
          <TransactionSummary />
        </Card>
      </Stack>
    </Box>
  );
};

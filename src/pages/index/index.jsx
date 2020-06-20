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
      <Tabs variant="soft-rounded" variantColor={'brand'}>
        <TabList borderWidth={0}>
          <Tab>Tasks</Tab>
          <Tab>Health</Tab>
          <Tab>Finance</Tab>
          <Tab>Knowledge</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Stack my={5}>
              <Card animate highlight>
                <TasksSummary />
              </Card>
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack isInline spacing={10}>
              <Stack flex={1}>
                <Card animate highlight>
                  <GlucoseSummary />
                </Card>
              </Stack>
              <Stack flex={1}>
                <Card animate highlight>
                  <WaterSummary />
                </Card>
              </Stack>
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack>
              <Heading size={'md'}>Transactions</Heading>
              <Card animate highlight>
                <TransactionSummary />
              </Card>
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

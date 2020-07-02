import { Box, Stack } from '@chakra-ui/core';
import React from 'react';
import Card from 'src/components/core/card';
import Summary from 'src/pages/index/Summary';
import Thoughts from 'src/pages/thoughts';
import Glucose from 'src/pages/glucose';
import Food from 'src/pages/food';
import Finance from 'src/pages/transactions';
import Dishes from 'src/pages/dishes';
import People from 'src/pages/people';
import Notes from 'src/pages/notes';
import Tabs, { TabItem } from 'src/components/core/tabs';
import Water from 'src/pages/water';
export default () => {
  return (
    <Box>
      <Tabs>
        <TabItem title={'Overview'}>
          <Summary />
        </TabItem>
        <TabItem title={'Thoughts'}>
          <Thoughts />
        </TabItem>
        <TabItem title={'Water'}>
          <Water />
        </TabItem>
        <TabItem title={'Glucose'}>
          <Glucose />
        </TabItem>
        <TabItem title={'Food'}>
          <Food />
        </TabItem>
        <TabItem title={'Finance'}>
          <Finance />
        </TabItem>
        <TabItem title={'People'}>
          <People />
        </TabItem>
        <TabItem title={'Dishes'}>
          <Dishes />
        </TabItem>
        <TabItem title={'Notes'}>
          <Notes />
        </TabItem>
      </Tabs>
    </Box>
  );
};

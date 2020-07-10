import Snippets from 'src/modules/Snippets';
import {
  Box,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/core';

export default () => {
  return (
    <Box w={'100%'} p={10}>
      <Tabs>
        <TabList borderWidth={0}>
          <Tab>Tech</Tab>
          <Tab>Math</Tab>
          <Tab>Miscellaneous</Tab>
        </TabList>

        <TabPanels py={5}>
          <TabPanel>
            <Box w={'100%'}>
              <Snippets.List
                showBanners
                order_by={{ due_date: 'asc_nulls_first' }}
                where={{ _and: [{ type: { _eq: 'tech' } }] }}
              />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box w={'100%'}>
              <Snippets.List
                showBanners
                order_by={{ due_date: 'asc_nulls_first' }}
                where={{ _and: [{ type: { _eq: 'math' } }] }}
              />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box w={'100%'}>
              <Snippets.List
                showBanners
                groupByField={(row) => row['type']}
                order_by={{ due_date: 'asc_nulls_first' }}
                where={{ _and: [{ type: { _nin: ['tech', 'math'] } }] }}
              />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

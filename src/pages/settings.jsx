import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/core';
import Categories from 'src/modules/Categories';
export default ({}) => {
  return (
    <Box p={5}>
      <Tabs>
        <TabList>
          <Tab>Categories</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Categories.List />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

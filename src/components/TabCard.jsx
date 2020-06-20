import {
  Flex,
  Box,
  Heading,
  useColorMode,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/core';
import { useState } from 'react';
import { useStore } from 'src/store';

export default ({ title, children, ...rest }) => {
  const { colorMode } = useColorMode();
  const { colors } = useStore((state) => ({
    colors: state.ui.colors,
  }));
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Box
      onClick={() => setShowDetails(!showDetails)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      minWidth={300}
      borderWidth={1}
      borderRadius={5}
      shadow={isHovered ? 'lg' : 'none'}
      my={4}
      borderColor={colors.primary}
      h={'100%'}
      bg={colorMode === 'light' ? 'white' : '#232626'}
      {...rest}
    >
      <Tabs variantColor={"teal"} size={"sm"} align="end" >
        {title && (
          <Box px={1} pt={1} borderBottomWidth={1}>
            <Flex direction={'row'}>
              <Box p={3} flexGrow={1}>
                <Heading size={'sm'} >
                  {title}
                </Heading>
              </Box>
              <TabList borderWidth={0}>
                <Tab>Daily</Tab>
                <Tab>Weekly</Tab>
                <Tab>Monthly</Tab>
              </TabList>
            </Flex>
          </Box>
        )}
        <Box h={'100%'} p={3}>
          <TabPanels>
            <TabPanel>
              {children}
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>

        </Box>
      </Tabs>
    </Box>
  );
};

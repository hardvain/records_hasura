import { Box, Button, TabPanels, Tab, TabPanel, Stack } from '@chakra-ui/core';
import { useState } from 'react';
export const TabItem = ({ title, children }) => {
  return <div />;
};
export default ({ children }) => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <Box py={1}>
      <Stack isInline borderBottomWidth={1} mb={5} px={2} justifyContent={'space-between'}>
        {children.map((c, index) => (
          <Button
            py={5}
            size={'sm'}
            variant={'ghost'}
            borderBottomWidth={currentTab === index ? 1 : 0}
            borderRadius={0}
            borderBottomColor={currentTab === index ? 'brand.500' : ''}
            key={c.props.title}
            textDecoration={'none'}
            onClick={() => setCurrentTab(index)}
          >
            {c.props.title}
          </Button>
        ))}
      </Stack>
      <Box m={10} h={'100%'}>
        {children[currentTab].props.children}
      </Box>
    </Box>
  );
};

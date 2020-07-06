import {
  Box,
  Stack,
  Button,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Tab,
  TabPanel,
  useColorMode,
  Flex,
} from '@chakra-ui/core';
import Card from 'src/components/core/card';
import React, { useEffect, useState } from 'react';
import Projects from 'src/modules/Projects';
import moment from 'moment';
import * as TaskFilters from 'src/modules/Projects/filters';

export default () => {
  return (
    <Box w={'100%'} px={10} py={5}>
      <Projects.List
        group_by_field={(row) => row['ref_team']['name']}
        order_by={{
          created_at: 'asc',
        }}
        showFilterBar
      />
    </Box>
  );
};

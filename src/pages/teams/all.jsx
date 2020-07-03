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
import Tasks from 'src/modules/Tasks';
import moment from 'moment';
import * as TaskFilters from 'src/modules/Tasks/filters';

export default () => {
  return (
    <Box w={'100%'} px={10} py={5}>
      <Tasks.List
        group_by_field={(row) =>
          row['ref_project']
            ? row['ref_project']['ref_team']['name']
            : row['ref_team']['name']
        }
        order_by={{
          ref_project: { ref_team: { created_at: 'asc' } },
          due_date: 'asc',
        }}
        showFilterBar
        where={{ _and: [{ parent_id: { _is_null: true } }] }}
      />
    </Box>
  );
};

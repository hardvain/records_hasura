import { Box } from '@chakra-ui/core';
import { useEffect, useState } from 'react';
import Water from 'src/modules/Water';
import RecordsWithForm from 'src/components/records/RecordsWithForm';
import { useStore } from 'src/store';
import Filters from 'src/components/records/Filters';
export default () => {
  const filters = {
    timestamp: {
      // _gt: '2020-06-17T07:01:15.579Z',
    },
    quantity: {
      // _gte: 100,
    },
  };
  return (
    <Box py={30}>
      <Water where={filters} limit={5} offset={2} />
    </Box>
  );
};

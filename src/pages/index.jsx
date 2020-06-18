import { Box } from '@chakra-ui/core';
import { useEffect, useState } from 'react';
import Water from 'src/modules/Water';
import RecordsWithForm from 'src/components/records/RecordsWithForm';
import { useStore } from 'src/store';
import Filters from 'src/components/records/Filters';
export default () => {
  return (
    <Box py={30}>
      <Water.List />
    </Box>
  );
};

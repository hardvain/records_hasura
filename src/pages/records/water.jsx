import { Box } from '@chakra-ui/core';
import { useEffect, useState } from 'react';
import Water from 'src/modules/Water';
import RecordsWithForm from 'src/components/records/RecordsWithForm';
import { useStore } from 'src/store';
import Filters from 'src/components/records/Filters';
import moment from 'moment';
export default () => {
  return (
    <Box py={30}>
      <Water
        limit={50}
        offset={0}
        where={{
          _and: [
            { timestamp: { _gte: moment().startOf('day').toISOString() } },
            { timestamp: { _lte: moment().endOf('day').toISOString() } },
          ],
        }}
      />
    </Box>
  );
};

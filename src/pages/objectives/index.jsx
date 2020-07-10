import Objectives from 'src/modules/Objectives';
import { Box, Stack } from '@chakra-ui/core';

export default () => {
  return (
    <Box>
      <Stack isInline>
        <Box w={'100%'} p={10}>
          <Objectives.List
            order_by={{
              created_at: 'asc_nulls_first',
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

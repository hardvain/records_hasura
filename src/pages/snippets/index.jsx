import Snippets from 'src/modules/Snippets';
import { Box, Stack } from '@chakra-ui/core';

export default () => {
  return (
    <Stack isInline>
      <Box w={'100%'} p={10}>
        <Snippets.List
          showFilterBar
          showBanners
          order_by={{ due_date: 'asc_nulls_first' }}
        />
      </Box>
    </Stack>
  );
};

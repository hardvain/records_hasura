import Snippets from 'src/modules/Snippets';
import { Box, Stack } from '@chakra-ui/core';

export default () => {
  return (
    <Stack isInline>
      <Box w={'100%'} p={10}>
        <Snippets.List showFilterBar/>
      </Box>
    </Stack>
  );
};

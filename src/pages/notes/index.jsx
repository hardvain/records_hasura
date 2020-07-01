import Notes from 'src/modules/Notes';
import { Box, Stack } from '@chakra-ui/core';

export default () => {
  return (
    <Stack isInline>
      <Box w={'100%'} p={10}>
        <Notes.List showFilterBar/>
      </Box>
    </Stack>
  );
};

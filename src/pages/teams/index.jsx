import Teams from 'src/modules/Teams';
import { Box, Stack } from '@chakra-ui/core';

export default () => {
  return (
    <Stack isInline>
      <Box w={'100%'} p={10}>
        <Teams.List />
      </Box>
    </Stack>
  );
};

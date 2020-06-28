import Food from 'src/modules/Food';
import { Box, Stack } from '@chakra-ui/core';

export default () => {
  return (
    <Box w={'100%'} p={10}>
      <Food.List />
    </Box>
  );
};

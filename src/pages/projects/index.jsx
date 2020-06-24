import Projects from 'src/modules/Projects';
import {
  Box,
  Stack,
} from '@chakra-ui/core';

export default () => {
  return (
    <Box>
      <Stack isInline>
        <Box w={'100%'} p={10}>
          <Projects.List />
        </Box>
      </Stack>
    </Box>
  );
};

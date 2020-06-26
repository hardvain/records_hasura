import Projects from 'src/modules/Projects';
import { Box, Stack } from '@chakra-ui/core';

export default () => {
  return (
    <Box>
      <Stack isInline>
        <Box w={'100%'} p={10}>
          <Projects.List group_by_field={(row) => row['ref_team']['name']} />
        </Box>
      </Stack>
    </Box>
  );
};

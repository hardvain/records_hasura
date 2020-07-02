import Projects from 'src/modules/Projects';
import { Box, Stack } from '@chakra-ui/core';

export default () => {
  return (
    <Box>
      <Stack isInline>
        <Box w={'100%'} p={10}>
          <Projects.List
            group_by_field={(row) => row['ref_team']['name']}
            order_by={{
              ref_team: { created_at: 'asc_nulls_first' },
              created_at: 'asc_nulls_first',
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

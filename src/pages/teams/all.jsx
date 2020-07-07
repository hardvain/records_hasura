import { Box } from '@chakra-ui/core';
import Projects from 'src/modules/Projects';

export default () => {
  return (
    <Box w={'100%'} px={10} py={5}>
      <Projects.List
        group_by_field={(row) => row['ref_team']['name']}
        order_by={{
          created_at: 'asc',
        }}
        showFilterBar
      />
    </Box>
  );
};

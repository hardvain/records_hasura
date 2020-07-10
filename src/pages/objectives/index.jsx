import Objectives from 'src/modules/Objectives';
import { Box, Heading, Stack } from '@chakra-ui/core';

export default () => {
  return (
    <Stack spacing={10} p={5}>
      <Objectives.List
        group_by_field={(row) => row['ref_objective_teams'][0]['ref_team']['name']}
        order_by={{
          created_at: 'asc_nulls_first',
        }}
      />
    </Stack>
  );
};

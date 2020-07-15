import Tasks from 'src/modules/TypedTasks';
import { Box } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import { useGetTasksSubscription } from '../../../generated/graphql';
export default () => {
  return (
    <Box p={5}>
      <Tasks.Collection />
    </Box>
  );
};

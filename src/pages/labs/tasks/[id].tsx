import Tasks from 'src/modules/TypedTasks';
import { Box, Stack } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import { Field } from 'src/components/forms/v2';
import { useGetTasksSubscription } from '../../../generated/graphql';
export default () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, loading } = useGetTasksSubscription({
    variables: { where: { id: { _eq: id } } },
  });
  if (loading) {
    return <div>Loading</div>;
  } else if (error) {
    return <div>Error</div>;
  }
  return (
    <Box p={5}>
      <Tasks.Form smartEdit model={data.tasks[0]}>
        {(submit) => (
          <Stack>
            <Field name={'name'} />
          </Stack>
        )}
      </Tasks.Form>
    </Box>
  );
};

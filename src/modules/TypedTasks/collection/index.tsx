import {
  Tasks_Bool_Exp,
  Tasks_Order_By,
  Tasks_Select_Column,
  useDeleteTasksMutation,
  useGetTasksSubscription,
} from 'src/generated/graphql';
import Collection, { QueryProps } from 'src/components/core/collection';
import { Box } from '@chakra-ui/core';
import React from 'react';
import ListItem from './list';
const TasksCollection = ({
  where,
  orderBy,
  limit,
  offset,
  type,
}: QueryProps<Tasks_Bool_Exp, Tasks_Order_By>) => {
  const { data, error, loading } = useGetTasksSubscription({
    variables: { limit, offset, orderBy, where },
  });
  return (
    <Collection
      type={type}
      loading={loading}
      error={error?.toString()}
      data={data?.tasks}
      listProps={{
        hasDetails: (task) => task.ref_sub_tasks.length > 0,
        listItem: ListItem,
        deleteResolver: useDeleteTasksMutation,
        details: (task) => (
          <Box py={2}>
            <TasksCollection where={{ parent_id: { _eq: task.id } }} />
          </Box>
        ),
      }}
      tableProps={{
        columns: [Tasks_Select_Column.Id, Tasks_Select_Column.Name],
      }}
    />
  );
};

export default TasksCollection;

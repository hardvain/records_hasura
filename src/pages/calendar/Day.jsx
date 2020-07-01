import { Box, Button, Stack, Text, useColorMode } from '@chakra-ui/core';
import useMutation from 'src/hooks/graphql/useMutation';
import { useStore } from 'src/store';
import { groupBy } from 'src/utils';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Link from 'next/link';
import React, { useState } from 'react';
import moment from 'moment';
const getStatusColor = (status) => {
  return status === 'todo'
    ? 'yellow'
    : status === 'in_progress'
    ? 'blue'
    : 'green';
};
const HourView = ({ hour, groupedTasks, date }) => {
  const { colorMode } = useColorMode();

  const { setNewFormContext, toggleFormPopup } = useStore((state) => ({
    setNewFormContext: state.setNewFormContext,
    toggleFormPopup: state.toggleFormPopup,
  }));
  const addTask = () => {
    const due_date = moment(date).hours(hour).minutes(0);
    setNewFormContext({ due_date: due_date.toISOString(true) });
    toggleFormPopup('tasks');
  };
  const tasks = groupedTasks[hour];
  return (
    <Box
      minHeight={tasks ? tasks.length * 10 : 50}
      key={hour}
      borderBottomWidth={1}
      py={1}
      onClick={addTask}
    >
      <Stack w={'100%'} px={2}>
        <Box px={2}>
          <Text fontSize={10}>{hour}:00</Text>
        </Box>
        {tasks &&
          tasks.map((t, index) => (
            <Draggable key={t.id} draggableId={t.id} index={index}>
              {(provided) => (
                <div
                  style={{ height: 30 }}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <Link href={'/tasks/[id]'} as={`/tasks/${t.id}`}>
                    <Box
                      borderRadius={2}
                      maxHeight={30}
                      minWidth={'100%'}
                      px={2}
                      borderWidth={1}
                      borderColor={`${getStatusColor(t.status)}.900`}
                      bg={`${getStatusColor(t.status)}.50`}
                      color={'black'}
                      size={'xs'}
                      variant={'outline'}
                      justifyContent={'flex-start'}
                    >
                      <Text fontSize={12} key={t.id}>
                        {t.name}
                      </Text>
                    </Box>
                  </Link>
                </div>
              )}
            </Draggable>
          ))}
      </Stack>
    </Box>
  );
};
export default ({ tasks, date }) => {
  const taskUpdateMutation = useMutation({
    resource: 'tasks',
    operation: 'update',
  });
  const groupedTasks = groupBy(tasks || [], (t) => {
    if (t.due_date) {
      const hour = moment(t.due_date).format('HH');
      if (hour === '0' || hour === '00') {
        return '-';
      } else {
        return parseInt(hour);
      }
    } else {
      return '-';
    }
  });
  const onDragEnd = (result) => {
    const {
      draggableId,
      destination: { droppableId },
    } = result;
    const task = tasks.filter((t) => t.id === draggableId)[0];
    const newDueDate = moment(task).hours(droppableId);
    taskUpdateMutation({
      variables: {
        object: { ...task, due_date: newDueDate },
        where: { id: { _eq: task?.id } },
      },
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Stack overflowY={'scroll'}>
        {[...Array(24).keys()].map((i) => (
          <Droppable key={i} droppableId={i.toString()}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <HourView
                  key={i}
                  hour={i}
                  groupedTasks={groupedTasks}
                  date={date}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </Stack>
    </DragDropContext>
  );
};

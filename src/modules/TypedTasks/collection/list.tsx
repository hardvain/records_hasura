import { Tasks, useDeleteTasksMutation } from 'src/generated/graphql';
import {
  Badge,
  Box,
  Button,
  Progress,
  PseudoBox,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import Modal from 'src/components/core/modal';
import { Delete } from 'src/components/forms/v2';
import { useStore } from 'src/store';

import moment from 'moment';
const TaskStatusBadge = ({ task }) => {
  const statusColor = {
    todo: 'yellow',
    in_progress: 'blue',
    completed: 'green',
  };
  return <Badge variantColor={statusColor[task.status]}>{task.status}</Badge>;
};
const TaskModal = ({ task, show, setShow }) => {
  return (
    <Modal
      title={task.name}
      show={show}
      onClose={() => setShow(!show)}
      href={`/tasks/[id]`}
      as={`/tasks/${task.id}`}
    >
      {JSON.stringify(task)}
    </Modal>
  );
};

const TaskProgress = ({ task }) => {
  const subTasks = task.ref_sub_tasks;
  const totalTasks = subTasks?.length;
  const completedTasks = (subTasks || []).filter(
    (t) => t.status === 'completed'
  ).length;
  const progress = (completedTasks * 100) / totalTasks;
  return (
    <Box flex={3} mr={2}>
      {totalTasks > 0 && (
        <Tooltip
          aria-label={'task-progress'}
          label={`Completed ${completedTasks} out of ${totalTasks} Sub Tasks`}
        >
          <Box>
            <Progress
              h={3}
              w={200}
              color={progress > 85 ? 'green' : progress < 25 ? 'red' : 'yellow'}
              value={totalTasks ? progress : 0}
              borderRadius={2}
            />
          </Box>
        </Tooltip>
      )}
    </Box>
  );
};
const ListItem = (task: Tasks) => {
  const [show, setShow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { toggleFormPopup, setNewFormContext } = useStore((state) => ({
    toggleFormPopup: state.toggleFormPopup,
    setNewFormContext: state.setNewFormContext,
  }));
  const addSubTask = (task) => {
    setNewFormContext({ project_id: task.project_id, parent_id: task.id });
    toggleFormPopup('tasks');
  };
  const isToday = moment(task.due_date)
    .startOf('day')
    .isSame(moment().startOf('day'));
  const SubTaskButton = () => (
    <PseudoBox>
      <Button
        visibility={isHovered ? 'visible' : 'hidden'}
        leftIcon={'small-add'}
        variant={'link'}
        variantColor={'brand'}
        size={'xs'}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          addSubTask(task);
        }}
      >
        Add Sub Task
      </Button>
    </PseudoBox>
  );
  return (
    <>
      <Stack
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        isInline
        onClick={() => setShow(true)}
        alignItems={'center'}
        w={'100%'}
      >
        <Box flex={10}>
          <Text>{task.name}</Text>
        </Box>
        <Box>
          <SubTaskButton />
        </Box>
        <Box flex={1}>
          {isToday && <Badge variantColor={'brand'}>Today</Badge>}
        </Box>
        <Box flex={2}>
          <TaskProgress task={task} />
        </Box>
        <Box flex={2}>
          <TaskStatusBadge task={task} />
        </Box>
        <Box>
          <Delete id={task.id} deleteResolver={useDeleteTasksMutation} />
        </Box>
      </Stack>
      <TaskModal task={task} show={show} setShow={setShow} />
    </>
  );
};

export default ListItem;

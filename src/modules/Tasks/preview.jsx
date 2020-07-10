import {
  Box,
  Stack,
  Text,
  Button,
  Progress,
  Tag,
  useColorMode,
  IconButton,
  Tooltip,
  Grid,
  Badge,
  PseudoBox,
} from '@chakra-ui/core';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Drawer from 'src/components/core/drawer';
import Modal from 'src/components/core/modal';
import moment from 'moment';
import Delete from 'src/containers/actions/delete';
import { useStore } from 'src/store';
import Tasks from './index';
import useMutation from 'src/hooks/graphql/useMutation';
import ListItem from 'src/containers/collection/list/ListItem';
export default ({ record, index, expandAll, indent = 0, listItemProps }) => {
  const subTasks = record.ref_sub_tasks;
  const totalTasks = subTasks?.length;
  const completedTasks = (subTasks || []).filter(
    (t) => t.status === 'completed'
  ).length;
  const progress = (completedTasks * 100) / totalTasks;
  const [show, setShow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showSubTasks, setShowSubTasks] = useState(expandAll);
  const handleToggle = () => setShow(!show);
  const { colorMode } = useColorMode();
  const deleteMutate = useMutation({ resource: 'tasks', operation: 'delete' });
  useEffect(() => {
    setShowSubTasks(expandAll);
  }, [expandAll]);
  const { toggleFormPopup, setNewFormContext } = useStore((state) => ({
    toggleFormPopup: state.toggleFormPopup,
    setNewFormContext: state.setNewFormContext,
  }));
  const addSubTask = (task) => {
    setNewFormContext({ project_id: task.project_id, parent_id: task.id });
    toggleFormPopup('tasks');
  };
  const statusColor =
    record.status === 'todo'
      ? 'yellow'
      : record.status === 'in_progress'
      ? 'blue'
      : 'green';
  const isToday = moment(record.due_date)
    .startOf('day')
    .isSame(moment().startOf('day'));
  const subTasksFilters = { _and: [{ parent_id: { _eq: record?.id } }] };
  if (!listItemProps?.showCompleted) {
    subTasksFilters._and.push({ status: { _neq: 'completed' } });
  }
  const ProgressBar = () => (
    <Box flex={3} mr={2}>
      {totalTasks > 0 && (
        <Tooltip
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
          addSubTask(record);
        }}
      >
        Add Sub Task
      </Button>
    </PseudoBox>
  );
  return (
    <Stack m={0} p={0} spacing={0}>
      <ListItem
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        borderWidth={0}
        borderLeftWidth={0}
        borderBottomWidth={1}
        cursor={'pointer'}
        px={1}
        py={2}
      >
        <Box>
          <Box
            display={['none', 'block']}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleToggle();
            }}
          >
            <Stack isInline pr={4} alignItems={'baseline'} pl={indent}>
              <Stack flex={30} isInline alignItems={'baseline'}>
                <Box mr={2}>
                  <IconButton
                    visibility={subTasks && subTasks.length > 0 ? '' : 'hidden'}
                    variant={'ghost'}
                    size={'xs'}
                    icon={showSubTasks ? 'chevron-down' : 'chevron-right'}
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      setShowSubTasks(!showSubTasks);
                    }}
                  />
                </Box>
                <Box flexGrow={1}>
                  <Text
                    fontSize={15}
                    textDecoration={
                      record?.status === 'completed' ? 'line-through' : ''
                    }
                  >
                    {record.name}
                  </Text>
                </Box>
                <SubTaskButton />

                <Box>
                  {isToday && <Badge variantColor={'brand'}>Today</Badge>}
                </Box>
              </Stack>
              <ProgressBar />
              <Box flex={2} mx={2} textAlign={'right'}>
                <Badge variantColor={statusColor}>{record?.status}</Badge>
              </Box>
              <Box flex={1} ml={2}>
                <Delete resource={'tasks'} id={record.id} />
              </Box>
            </Stack>
          </Box>
          <Box display={['block', 'none']}>
            <Link href={'/tasks/[id]'} as={`/tasks/${record?.id}`}>
              <Stack isInline alignItems={'center'}>
                <IconButton
                  visibility={subTasks && subTasks.length > 0 ? '' : 'hidden'}
                  variant={'ghost'}
                  size={'xs'}
                  icon={showSubTasks ? 'chevron-down' : 'chevron-right'}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setShowSubTasks(!showSubTasks);
                  }}
                />
                <Stack>
                  <Text
                    fontSize={15}
                    textDecoration={
                      record?.status === 'completed' ? 'line-through' : ''
                    }
                  >
                    {record.name}
                  </Text>
                  <ProgressBar />
                </Stack>
                <Box>
                  {isToday && <Badge variantColor={'brand'}>Today</Badge>}
                </Box>
                <Box flex={2} mx={2} textAlign={'right'}>
                  <Badge variantColor={statusColor}>{record?.status}</Badge>
                </Box>
                <Box flex={1} ml={2}>
                  <Delete resource={'tasks'} id={record.id} />
                </Box>
              </Stack>
            </Link>
          </Box>
        </Box>
        <Modal
          title={record.name}
          show={show}
          onClose={() => setShow(!show)}
          href={`/tasks/[id]`}
          as={`/tasks/${record?.id}`}
        >
          <Tasks.Form model={record} isPreview={true} />
        </Modal>
      </ListItem>
      {showSubTasks && (
        <Box>
          <Tasks.List
            noBorder
            showBanners={false}
            indent={indent + 5}
            where={subTasksFilters}
            expandAll={expandAll}
          />
        </Box>
      )}
    </Stack>
  );
};

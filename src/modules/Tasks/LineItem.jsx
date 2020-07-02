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
} from '@chakra-ui/core';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Drawer from 'src/components/drawer';
import moment from 'moment';
import { useStore } from 'src/store';
import Tasks from './index';
import useMutation from 'src/hooks/graphql/useMutation';
import ListItem from 'src/containers/collection/list/ListItem';
export default ({ record, index, expandAll, indent = 0 }) => {
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
  const background =
    index % 2 !== 0 && !record?.parent_id
      ? colorMode === 'light'
        ? '#F5F6FC'
        : '#232626'
      : '';
  return (
    <Stack m={0} p={0} spacing={0} bg={background}>
      <ListItem
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        borderWidth={0}
        borderLeftWidth={0}
        borderBottomWidth={1}
        cursor={'pointer'}
        bg={background}
        px={3}
        py={2}
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

            <Box>
              {isHovered && (
                <Button
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
              )}
            </Box>
            <Box>{isToday && <Badge variantColor={'brand'}>Today</Badge>}</Box>
          </Stack>
          <Box flex={3} mr={2}>
            {totalTasks > 0 && (
              <Tooltip
                label={`Completed ${completedTasks} out of ${totalTasks} Sub Tasks`}
              >
                <Box>
                  <Progress
                    color={
                      progress > 85 ? 'green' : progress < 25 ? 'red' : 'yellow'
                    }
                    value={totalTasks ? progress : 0}
                    borderRadius={5}
                  />
                </Box>
              </Tooltip>
            )}
          </Box>
          <Box flex={2} mx={2} textAlign={'right'}>
            <Badge variantColor={statusColor}>{record?.status}</Badge>
          </Box>
          <Box flex={1}>
            <IconButton
              size={'xs'}
              variant={'link'}
              icon={'delete'}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                deleteMutate({
                  variables: { where: { id: { _eq: record.id } } },
                });
              }}
            />
          </Box>
        </Stack>
        <Drawer size={'xl'} title={record.name} show={show} setShow={setShow}>
          <Tasks.Form model={record} />
        </Drawer>
      </ListItem>
      {showSubTasks && (
        <Box>
          <Tasks.List
            indent={indent + 10}
            where={{ _and: [{ parent_id: { _eq: record?.id } }] }}
            expandAll={expandAll}
          />
        </Box>
      )}
    </Stack>
  );
};

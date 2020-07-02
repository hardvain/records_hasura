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
import React, { useState } from 'react';
import Drawer from 'src/components/drawer';
import moment from 'moment';
import Tasks from './index';
import useMutation from 'src/hooks/graphql/useMutation';
import Form from './form';
import ListItem from 'src/containers/collection/list/ListItem';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
export default ({ record }) => {
  const subTasks = record.ref_sub_tasks;
  const totalTasks = subTasks?.length;
  const completedTasks = (subTasks || []).filter(
    (t) => t.status === 'completed'
  ).length;
  const progress = (completedTasks * 100) / totalTasks;
  const [show, setShow] = useState(false);
  const [showSubTasks, setShowSubTasks] = useState(true);
  const handleToggle = () => setShow(!show);
  const { colorMode } = useColorMode();

  const statusColor =
    record.status === 'todo'
      ? 'yellow'
      : record.status === 'in_progress'
      ? 'blue'
      : 'green';
  return (
    <Stack m={0} p={0} spacing={0}>
      <ListItem borderLeftWidth={3} borderLeftColor={`${statusColor}.500`}>
        <Stack isInline pr={4} alignItems={'baseline'}>
          <Box flex={1}>
            {subTasks && subTasks.length > 0 && (
              <IconButton
                variant={'ghost'}
                size={'xs'}
                icon={showSubTasks ? 'chevron-down' : 'chevron-right'}
                onClick={() => setShowSubTasks(!showSubTasks)}
              />
            )}
          </Box>
          <Box flex={50}>{record.name}</Box>
          <Box flex={2} mx={2} textAlign={'right'}>
            <Badge variantColor={statusColor}>{record?.status}</Badge>
          </Box>
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

          <Box flex={2}>
            <Button
              variant={'outline'}
              size={'xs'}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleToggle();
              }}
            >
              Preview
            </Button>
          </Box>
        </Stack>
        <Drawer size={'xl'} title={record.name} show={show} setShow={setShow}>
          <Tasks.Preview model={record} />
        </Drawer>
      </ListItem>
      {showSubTasks && (
        <Box pl={2}>
          <Tasks.List where={{ _and: [{ parent_id: { _eq: record?.id } }] }} />
        </Box>
      )}
    </Stack>
  );
};

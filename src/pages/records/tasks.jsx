import {
  Box,
  Stack,
  Stat,
  StatLabel,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
  Text,
  Heading,
  Select,
  FormControl,
  FormLabel,
} from '@chakra-ui/core';
import { ErrorMessage } from 'formik';
import React, { useState } from 'react';
import Card from 'src/components/Card';
import Tasks from 'src/modules/Tasks';
import { useStore } from 'src/store';
import moment from 'moment';
export default () => {
  const [team, setTeam] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));

  let filters = [];
  if (team !== '') {
    filters.push({ team: { _eq: team } });
  }
  if (status !== '') {
    filters.push({ status: { _eq: status } });
  }
  if (priority !== '') {
    filters.push({ priority: { _eq: priority } });
  }

  return (
    <Box py={10}>
      <Card>
        <Stack isInline spacing={10}>
          <FormControl>
            <FormLabel>Team</FormLabel>
            <Select
              size={'sm'}
              name="team"
              onChange={(e) => setTeam(e.target.value)}
              value={team}
              placeholder={'Select a Team'}
            >
              <option value={''}>All</option>
              <option value={'vndly'}>VNDLY</option>
              <option value={'family'}>Family</option>
              <option value={'relationships'}>Relationships</option>
              <option value={'knowledge'}>Knowledge</option>
              <option value={'health'}>Health</option>
              <option value={'nutrition'}>Nutrition</option>
              <option value={'home'}>Home</option>
              <option value={'personal'}>Personal</option>
              <option value={'finance'}>Finance</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Priority</FormLabel>
            <Select
              size={'sm'}
              onChange={(e) => setPriority(e.target.value)}
              name="priority"
              value={priority}
              placeholder={'Select a Priority'}
            >
              <option value={''}>All</option>
              <option value={'very_high'}>Very High</option>
              <option value={'high'}>High</option>
              <option value={'medium'}>Medium</option>
              <option value={'low'}>Low</option>
              <option value={'very_low'}>Very Low</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Status</FormLabel>
            <Select
              size={'sm'}
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder={'Select a status'}
            >
              <option value={''}>All</option>
              <option value={'todo'}>To Do</option>
              <option value={'in_progress'}>In Progress</option>
              <option value={'completed'}>Completed</option>
            </Select>
          </FormControl>
        </Stack>
      </Card>
      <Box>
        <Stack isInline spacing={10}>
          <Box w={'100%'}>
            <Card title={"Today's Tasks"}>
              <Tasks.List
                where={{
                  _and: [
                    {
                      due_date: {
                        _gte: date.startOf('day').toISOString(true),
                      },
                    },
                    {
                      due_date: { _lte: date.endOf('day').toISOString(true) },
                    },
                    ...filters,
                  ],
                }}
              />
            </Card>
          </Box>
          <Stack spacing={10} w={'100%'}>
            <Box>
              <Card title={'Overdue Tasks'}>
                <Tasks.List
                  where={{
                    _and: [{ due_date: { _is_null: true } }, ...filters],
                  }}
                />
              </Card>
            </Box>
            <Box>
              <Card title={'Next 7 Days'}>
                <Tasks.List
                  where={{
                    _and: [
                      {
                        due_date: { _gte: date.endOf('day').toISOString(true) },
                      },
                      {
                        due_date: {
                          _lte: moment(date.toISOString(false))
                            .add(1, 'week')
                            .endOf('day')
                            .toISOString(true),
                        },
                      },
                      ...filters,
                    ],
                  }}
                />
              </Card>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

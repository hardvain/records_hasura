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
} from '@chakra-ui/core';
import { useState } from 'react';
import Card from 'src/components/Card';
import Tasks from 'src/modules/Tasks';
import { useStore } from 'src/store';
import moment from 'moment';
export default () => {
  const [team, setTeam] = useState('');
  const { date } = useStore((state) => ({
    date: state.ui.date,
  }));
  const teamFilter = team !== '' ? { team: { _eq: team } } : undefined;

  return (
    <Box py={10}>
      <Stack isInline>
        <Box w={250} mx={5}>
          <Stack alignItems={'flex-start'}>
            <Box my={2} ml={2} onClick={() => setTeam('')}>
              All
            </Box>
            <Divider />
            <Text fontSize={12}>Teams</Text>
            <Box my={2} ml={2} onClick={() => setTeam('vndly')}>
              VNDLY
            </Box>
            <Box my={2} ml={2} onClick={() => setTeam('family')}>
              Family
            </Box>
            <Box my={2} ml={2} onClick={() => setTeam('personal')}>
              Personal
            </Box>
            <Box my={2} ml={2} onClick={() => setTeam('knowledge')}>
              Knowledge
            </Box>
            <Box my={2} ml={2} onClick={() => setTeam('health')}>
              Health
            </Box>
            <Box my={2} ml={2} onClick={() => setTeam('nutrition')}>
              Nutrition
            </Box>
            <Box my={2} ml={2} onClick={() => setTeam('home')}>
              Home
            </Box>
            <Box my={2} ml={2} onClick={() => setTeam('relationships')}>
              Relationships
            </Box>
            <Box my={2} ml={2} onClick={() => setTeam('finance')}>
              Finance
            </Box>
          </Stack>
        </Box>
        <Box w={'100%'}>
          <Box>
            <Heading size={'sm'}>Overdue</Heading>
            <Tasks.List
              where={{
                _and: [{ due_date: { _is_null: true } }, teamFilter],
              }}
            />
          </Box>

          <Box>
            <Heading size={'sm'}>Today's Tasks</Heading>
            <Tasks.List
              where={{
                _and: [
                  {
                    due_date: { _gte: date.startOf('day').toISOString(true) },
                  },
                  { due_date: { _lte: date.endOf('day').toISOString(true) } },
                  teamFilter,
                ],
              }}
            />
          </Box>
          <Box>
            <Heading size={'sm'}>Next 7 Days</Heading>
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
                  teamFilter,
                ],
              }}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

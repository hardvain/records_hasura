import {
  Box,
  Input,
  InputGroup,
  InputRightAddon,
  Button,
  Flex,
  Checkbox,
  Text,
  Badge,
  Stack,
  IconButton,
  Textarea,
  Skeleton,
} from '@chakra-ui/core';
import moment from 'moment';
import { FaTasks, FaCalendarAlt } from 'react-icons/fa';

import { MdLabelOutline } from 'react-icons/md';
import { GoProject } from 'react-icons/go';
import Card from 'components/Card';
import DatePicker from 'components/DatePicker';
import Records from 'components/records';
import { useQuery } from 'react-query';

const records = [
  {
    id: 1,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 2,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 3,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 4,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 5,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 6,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 7,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 8,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 9,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 10,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 1,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 2,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 3,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 4,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 5,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 6,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 7,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 8,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 9,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 10,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 1,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 2,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 3,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 4,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 5,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 6,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 7,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 8,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 9,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 10,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 1,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 2,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 3,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 4,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 5,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 6,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 7,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 8,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 9,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 10,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 1,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 2,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 3,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 4,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 5,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 6,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 7,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 8,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 9,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 10,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 1,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 2,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 3,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 4,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 5,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 6,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 7,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 8,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 9,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
  {
    id: 10,
    recordType: 'task',
    timestamp: moment().toISOString(),
    data: { dueDate: moment().toISOString(), name: 'Clean hall windows' },
    tags: ['home', 'finance'],
  },
];

const recordDisplay = (record) => {
  switch (record.recordType) {
    case 'task':
      return <Records.Task record={record} />;
    case 'glucose':
      return <Records.BloodGlucose record={record} />;
  }
};
const fetchRecords = async (key) => {
  return fetch('/api/records').then((r) => r.json());
};

const Loading = ({ count }) => {
  return (
    <Box>
      {[...Array(count).keys()].map((k) => (
        <Card  my={5} height="60px">
          <Skeleton
            key={k}
            colorStart="#232626"
            colorEnd="#232626"
          />
        </Card>
      ))}
    </Box>
  );
};

export default () => {
  const { status, data, error } = useQuery('records', fetchRecords);

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Box py={30} px={50}>
      <Flex justifyContent={'space-around'}>
        <DatePicker.ButtonDatePicker />
        <Button size="sm">Tasks</Button>
        <Button size="sm">Projects</Button>
        <Button size="sm">Initiatives</Button>
      </Flex>
      <Card my={3} borderWidth={1} p={3}>
        <Stack w={'100%'}>
          <Textarea
            rounded="0"
            variant="filled"
            placeholder="Add new record"
            borderRadius={3}
          />
          <Flex justifyContent={'space-around'} mt={2}>
            <Box mr={2}>
              <DatePicker.IconDatePicker />
            </Box>
            <IconButton size={'sm'} icon={'sun'} mr={2} />
            <IconButton size={'sm'} icon={GoProject} mr={2} />
            <IconButton size={'sm'} icon={MdLabelOutline} mr={2} />
            <Box flexGrow={1}></Box>
            <Button variant="solid" size={'sm'} mr={2}>
              Clear
            </Button>
            <Button variant="solid" variantColor={'teal'} size={'sm'}>
              Add
            </Button>
          </Flex>
        </Stack>
      </Card>

      <Stack w={'100%'}>
        {status === 'loading' ? (
          <Loading count={20} />
        ) : (
          data.items.map((record) => (
            <Card borderWidth={1} my={3} px={4} py={2} borderRadius={3}>
              <Box width={'100%'}>{recordDisplay(record)}</Box>
            </Card>
          ))
        )}
      </Stack>
    </Box>
  );
};

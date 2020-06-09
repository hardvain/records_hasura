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
} from '@chakra-ui/core';
import moment from 'moment'
import { FaTasks, FaCalendarAlt } from 'react-icons/fa';
import { MdLabelOutline } from 'react-icons/md';
import { GoProject } from 'react-icons/go';
import Card from 'components/Card';
import DatePicker from 'components/DatePicker';

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
      return (
        <Flex alignItems={'center'}>
          <Box as={FaTasks} alignSelf={'center'} mr={3} />
          <Checkbox defaultIsChecked={record.data.status === 'done'} mr={4} />
          <Stack flexGrow={1}>
            <Text>{record.data.name}</Text>
            <Badge w={80} >
              <DatePicker.TextDatePicker />
            </Badge>
          </Stack>
          <Flex alignSelf={'center'}>
            {record.tags.map((tag) => (
              <Badge key={tag} mr={1}>
                {tag}
              </Badge>
            ))}
          </Flex>
        </Flex>
      );
  }
};
export default () => {
  console.log(records)
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
          <Input
            rounded="0"
            variant="filled"
            placeholder="Add new record"
            borderRadius={3}
          />
          <Flex justifyContent={'space-around'}>
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

        <Stack w={"100%"}>
          {records.map((record) => (
            <Card borderWidth={1} my={3} px={4} py={2} borderRadius={3}>
              <Box width={"100%"}>
                {recordDisplay(record)}
              </Box>
            </Card>
          ))}
        </Stack>
    </Box>
  );
};

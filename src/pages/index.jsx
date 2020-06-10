import { useState } from 'react'
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
  Divider,
} from '@chakra-ui/core';
import moment from 'moment';
import { FaTasks, FaCalendarAlt } from 'react-icons/fa';
import Dropdown from 'components/Dropdown';
import { MdLabelOutline } from 'react-icons/md';
import { GoProject } from 'react-icons/go';
import Card from 'components/Card';
import DatePicker from 'components/DatePicker';
import Records from 'components/records';
import { useQuery } from 'react-query';


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
        <Card my={5} height="60px" key={k}>
          <Skeleton key={k} colorStart="#232626" colorEnd="#232626" />
        </Card>
      ))}
    </Box>
  );
};

export default () => {
  const [date,setDate] = useState(Date.now())
  const { status, data, error } = useQuery('records', fetchRecords);

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Box py={30} px={50}>
      <Flex justifyContent={'space-around'}>
        <Button mr={2} size="sm">
          Tasks
        </Button>
        <Button mr={2} size="sm">
          Projects
        </Button>
        <Button mr={2} size="sm">
          Initiatives
        </Button>
        <Box ml={'auto'}>
          <Flex>
            <IconButton size={'sm'} icon={'chevron-left'} mr={2} />
            <DatePicker.ButtonDatePicker selected={date}/>
            <IconButton size={'sm'} icon={'chevron-right'} ml={2} />
          </Flex>
        </Box>
      </Flex>
      <Card my={3} borderWidth={1} p={3}>
        <Stack w={'100%'}>
          <Textarea
            rounded="0"
            variant="filled"
            placeholder="Add new record"
            borderRadius={3}
            resize={'none'}
          />
          <Divider />
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
            <Button variant="solid" variantColor={'cyan'} size={'sm'}>
              Add
            </Button>
          </Flex>
        </Stack>
      </Card>

      <Stack w={'100%'}>
        {status === 'loading' ? (
          <Loading count={10} />
        ) : (
          data.items.map((record) => (
            <Card borderWidth={1} my={3} px={4} py={2} key={record.id}>
              <Box width={'100%'}>{recordDisplay(record)}</Box>
            </Card>
          ))
        )}
      </Stack>
    </Box>
  );
};

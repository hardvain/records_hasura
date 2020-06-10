import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Select,
  Stack,
  Textarea,
} from '@chakra-ui/core';
import { useState } from 'react';
import Card from 'components/Card';
import DatePicker from 'components/DatePicker';
import { FaTasks, FaCalendarAlt } from 'react-icons/fa';
import Dropdown from 'components/Dropdown';
import { MdLabelOutline } from 'react-icons/md';
import { GoProject } from 'react-icons/go';

export default ({date}) => {
  const [newRecordType, setNewRecordType] = useState();
  return (
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
          <Select
            placeholder="Record Type"
            w={200}
            mr={2}
            size={'sm'}
            value={newRecordType}
            onChange={(v) => setNewRecordType(v)}
          >
            <option value="task">Task</option>
            <option value="glucose">Blood Glucose</option>
            <option value="water">Water Consumption</option>
            <option value="insulin">Insulin</option>
            <option value="note">Note</option>
          </Select>
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
  );
};

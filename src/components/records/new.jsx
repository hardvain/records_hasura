import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Input,
  Select,
  Stack,
  useToast,
  Textarea,
} from '@chakra-ui/core';
import { useState } from 'react';
import Card from 'components/Card';
import DatePicker from 'components/DatePicker';
import { FaTasks, FaCalendarAlt } from 'react-icons/fa';
import Dropdown from 'components/Dropdown';
import { MdLabelOutline } from 'react-icons/md';
import { GoProject } from 'react-icons/go';
import moment from 'moment';
const TaskInput = ({ data, setData }) => {
  return (
    <Textarea
      ref={input => input && input.focus()}
      variant="unstyled"
      placeholder="Add new task"
      borderRadius={3}
      resize={'none'}
      value={data.name}
      onChange={(e) => setData({ ...data, name: e.target.value })}
    />
  );
};

const GenericInput = ({ data, setData }) => {
  return (
    <Textarea
      ref={input => input && input.focus()}
      variant="unstyled"
      placeholder="Add new record"
      borderRadius={3}
      resize={'none'}
      value={data.value}
      onChange={(e) => setData({ ...data, value: e.target.value })}
    />
  );
};

const GlucoseInput = ({ data, setData }) => {
  return (
    <Input
      ref={input => input && input.focus()}
      type={'number'}
      variant="unstyled"
      placeholder={'Enter blood glucose value'}
      value={data.value}
      onChange={(e) => setData({ ...data, value: e.target.value })}
    />
  );
};

const InputMap = {
  task: TaskInput,
  glucose: GlucoseInput,
  generic: GenericInput,
};

export default ({ date, recordData = {}, onSave }) => {
  const toast = useToast();
  const [newRecordType, setNewRecordType] = useState('generic');
  const [data, setData] = useState(recordData);
  const InputElement = InputMap[newRecordType];

  const getTimestamp = (data) => {
    const timestamp = moment().toISOString();
    switch (newRecordType) {
      case 'task':
        return data.dueDate || timestamp;
      default:
        return timestamp;
    }
  };

  const submit = async () => {
    await fetch(
      recordData.id ? `/api/records/${recordData.id}` : `/api/records`,
      {
        method: recordData.id ? 'PUT' : 'POST',
        body: JSON.stringify({
          data,
          recordType: newRecordType,
          timestamp: getTimestamp(data),
        }),
      }
    );
    toast({
      title: recordData.id ? 'Record updated' : 'Record Created',
      status: 'success',
      duration: 3000,
      position: 'top',
      isClosable: true,
    });
    setData({});
    onSave();
  };
  return (
    <Card my={3} borderWidth={1} p={3}>
      <Stack w={'100%'}>
        {InputElement && React.createElement(InputElement, { data, setData })}
        <Divider />
        <Flex justifyContent={'space-around'} mt={2}>
          <Select
            w={200}
            mr={2}
            size={'sm'}
            value={newRecordType}
            onChange={(v) => setNewRecordType(v.target.value)}
          >
            <option value="generic">Generic</option>
            <option value="task">Task</option>
            <option value="glucose">Blood Glucose</option>
            <option value="water">Water Consumption</option>
            <option value="insulin">Insulin</option>
            <option value="note">Note</option>
          </Select>
          <Box mr={2}>
            <DatePicker.IconDatePicker />
          </Box>
          <IconButton size={'sm'} icon={GoProject} mr={2} />
          <IconButton size={'sm'} icon={MdLabelOutline} mr={2} />
          <Box flexGrow={1}></Box>
          <Button variant="solid" size={'sm'} mr={2}>
            Clear
          </Button>
          <Button
            variant="solid"
            variantColor={'cyan'}
            size={'sm'}
            onClick={submit}
          >
            {recordData.id ? 'Update' : 'Save'}
          </Button>
        </Flex>
      </Stack>
    </Card>
  );
};

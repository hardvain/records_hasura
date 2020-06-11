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
import { useEffect, useState, createElement } from 'react';
import Card from 'components/Card';
import DatePicker from 'components/DatePicker';
import { FaTasks, FaCalendarAlt } from 'react-icons/fa';
import { MdLabelOutline } from 'react-icons/md';
import { GoProject } from 'react-icons/go';
import moment from 'moment';

const TaskInput = ({ record = {}, setRecord }) => {
  const value = record ? (record.data ? record.data.name : '') : '';
  return (
    <Textarea
      ref={(input) => input && input.focus()}
      variant="unstyled"
      placeholder="Add new task"
      borderRadius={3}
      resize={'none'}
      value={value}
      onChange={(e) =>
        setRecord({ ...record, data: { ...record.data, name: e.target.value } })
      }
    />
  );
};

const GenericInput = ({ record = {}, setRecord }) => {
  const value = record ? (record.data ? record.data.value : '') : '';
  return (
    <Textarea
      ref={(input) => input && input.focus()}
      variant="unstyled"
      placeholder="Add new record"
      borderRadius={3}
      resize={'none'}
      value={value}
      onChange={(e) =>
        setRecord({
          ...record,
          data: { ...record.data, value: e.target.value },
        })
      }
    />
  );
};

const GlucoseInput = ({ record = {}, setRecord }) => {
  const value = record ? (record.data ? record.data.value : '') : '';

  return (
    <Input
      ref={(input) => input && input.focus()}
      type={'number'}
      variant="unstyled"
      placeholder={'Enter blood glucose value'}
      value={value}
      onChange={(e) =>
        setRecord({
          ...record,
          data: { ...record.data, value: e.target.value },
        })
      }
    />
  );
};

const WaterInput = ({ record = {}, setRecord }) => {
  const value = record ? (record.data ? record.data.value : '') : '';
  return (
    <Input
      ref={(input) => input && input.focus()}
      type={'number'}
      variant="unstyled"
      placeholder={'Enter water consumption value'}
      value={value}
      onChange={(e) =>
        setRecord({ ...record, data: { ...record.data, value: e.target.value } })
      }
    />
  );
};

const InputMap = {
  task: TaskInput,
  glucose: GlucoseInput,
  generic: GenericInput,
  water: WaterInput,
};

export default ({ date, recordModel = {}, onSave }) => {
  const toast = useToast();
  const [newRecordType, setNewRecordType] = useState(
    recordModel.recordType || 'generic'
  );
  const [record = {}, setRecord] = useState(recordModel);
  const InputElement = InputMap[newRecordType];

  useEffect(() => {
    setRecord(recordModel);
    setNewRecordType(recordModel.recordType);
  }, [recordModel]);

  const getTimestamp = (data) => {
    const timestamp = date || moment().toISOString();
    switch (newRecordType) {
      case 'task':
        return data.dueDate || timestamp;
      default:
        return timestamp;
    }
  };

  const submit = async () => {
    await fetch(
      recordModel.id ? `/api/records/${recordModel.id}` : `/api/records`,
      {
        method: recordModel.id ? 'PUT' : 'POST',
        body: JSON.stringify({
          data: record.data,
          recordType: newRecordType,
          timestamp: recordModel.id
            ? record.timestamp
            : getTimestamp(record.data),
        }),
      }
    );
    toast({
      title: recordModel.id ? 'Record updated' : 'Record Created',
      status: 'success',
      duration: 3000,
      position: 'top',
      isClosable: true,
    });
    setRecord({});
    onSave();
  };
  return (
    <Card my={3} borderWidth={1} p={3}>
      <Stack w={'100%'}>
        {InputElement && createElement(InputElement, { record, setRecord })}
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
            {recordModel.id ? 'Update' : 'Save'}
          </Button>
        </Flex>
      </Stack>
    </Card>
  );
};

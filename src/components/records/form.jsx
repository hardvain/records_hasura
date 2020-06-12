import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Select,
  Stack,
  useToast,
} from '@chakra-ui/core';
import { useEffect, useState, createElement } from 'react';
import Card from 'components/Card';
import DatePicker from 'components/DatePicker';
import { MdLabelOutline } from 'react-icons/md';
import { GoProject } from 'react-icons/go';
import moment from 'moment';
import { RecordForm } from './index';
export default ({ date, model = {}, onSave }) => {
  const toast = useToast();
  const [recordType, setRecordType] = useState(model.recordType || 'generic');
  const [record = {}, setRecord] = useState(model);

  useEffect(() => {
    setRecord(model);
    setRecordType(model.recordType || 'generic');
  }, [model]);

  const getTimestamp = (data) => {
    const timestamp = moment(date).toISOString() || moment().toISOString();
    switch (recordType) {
      case 'task':
        return data.dueDate || timestamp;
      default:
        return timestamp;
    }
  };

  const submit = async () => {
    await fetch(model.id ? `/api/records/${model.id}` : `/api/records`, {
      method: model.id ? 'PUT' : 'POST',
      body: JSON.stringify({
        data: record.data,
        recordType: recordType,
        timestamp: model.id ? record.timestamp : getTimestamp(record.data),
      }),
    });
    toast({
      title: model.id ? 'Record updated' : 'Record Created',
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
        <RecordForm recordType={recordType} record={record} setRecord={setRecord} />
        <Divider />
        <Flex justifyContent={'space-around'} mt={2}>
          <Select
            w={200}
            mr={2}
            size={'sm'}
            value={recordType}
            onChange={(v) => setRecordType(v.target.value)}
          >
            <option value="generic">Generic</option>
            <option value="activity">Activity</option>
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
            {model.id ? 'Update' : 'Save'}
          </Button>
        </Flex>
      </Stack>
    </Card>
  );
};

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

let defaultRecord = { recordType: 'generic' };
export default ({ date, model = defaultRecord, onSave }) => {
  const toast = useToast();
  const [record, setRecord] = useState(model);

  useEffect(() => {
    setRecord(model);
  }, [model]);

  const submit = async () => {
    await fetch(model.id ? `/api/records/${model.id}` : `/api/records`, {
      method: model.id ? 'PUT' : 'POST',
      body: JSON.stringify(record),
    });
    toast({
      title: model.id ? 'Record updated' : 'Record Created',
      status: 'success',
      duration: 3000,
      position: 'top',
      isClosable: true,
    });
    setRecord(defaultRecord);
    onSave();
  };
  return (
    <Card my={3} borderWidth={1} p={3}>
      <Stack w={'100%'}>
        <RecordForm record={record} setRecord={setRecord} />
        <Divider />
        <Flex justifyContent={'space-around'} mt={2}>
          <Select
            w={200}
            mr={2}
            size={'sm'}
            value={record.recordType}
            onChange={(v) => {
              setRecord({ ...record, recordType: v.target.value });
            }}
          >
            <option value="generic">Generic</option>
            <option value="activity">Activity</option>
            <option value="task">Task</option>
            <option value="glucose">Blood Glucose</option>
            <option value="water">Water Consumption</option>
            <option value="insulin">Insulin</option>
            <option value="note">Note</option>
          </Select>
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

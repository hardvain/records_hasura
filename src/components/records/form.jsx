import {
  Box,
  Button,
  Divider,
  Flex,
  Select,
  Stack,
  useToast,
} from '@chakra-ui/core';
import { useEffect, useState } from 'react';
import Card from 'src/components/Card';
import moment from 'moment';
import { useStore } from 'src/store';
import { RecordForm } from './index';

let defaultRecord = { recordType: 'generic' };
export default ({ date, model = defaultRecord, onSave }) => {
  const toast = useToast();
  const [record, setRecord] = useState(model);
  const { createRecord, updateRecord } = useStore((state) => ({
    createRecord: state.createRecord,
    updateRecord: state.updateRecord,
  }));
  useEffect(() => {
    setRecord(model);
  }, [model]);

  const submit = async () => {
    const payload = { ...record };
    if (!payload.timestamp) {
      payload.timestamp = moment().toISOString();
    }
    if (payload.id) {
      await updateRecord(payload, toast);
    } else {
      await createRecord(payload, toast);
    }
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
            {record.id ? 'Update' : 'Save'}
          </Button>
        </Flex>
      </Stack>
    </Card>
  );
};

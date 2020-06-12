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
export default ({ model = defaultRecord, frozenType }) => {
  const toast = useToast();
  const [record, setRecord] = useState(model);
  const { date, createRecord, updateRecord, colors } = useStore((state) => ({
    createRecord: state.createRecord,
    updateRecord: state.updateRecord,
    colors: state.ui.colors,
    date: state.ui.date,
  }));
  useEffect(() => {
    setRecord(model);
  }, [model]);

  const submit = async () => {
    const payload = { ...record };
    if (!payload.timestamp) {
      payload.timestamp = moment().toISOString();
    }
    payload.timestamp = moment(payload.timestamp);
    payload.timestamp.set('year', date.get('year'));
    payload.timestamp.set('month', date.get('month'));
    payload.timestamp.set('date', date.get('date'));
    payload.timestamp = payload.timestamp.toISOString();
    if (frozenType) {
      payload.recordType = frozenType;
    }
    if (payload.id) {
      await updateRecord(payload, toast);
    } else {
      await createRecord(payload, toast);
    }
    setRecord(defaultRecord);
  };
  return (
    <Card my={3} borderWidth={1} p={3}>
      <Stack w={'100%'}>
        <RecordForm
          record={record}
          setRecord={setRecord}
          frozenType={frozenType}
        />
        <Divider />
        <Flex justifyContent={'space-around'} mt={2}>
          <Select
            w={200}
            mr={2}
            isDisabled={frozenType}
            size={'sm'}
            value={frozenType || record.recordType}
            onChange={(v) => {
              setRecord({ ...record, recordType: v.target.value });
            }}
          >
            <option value="generic">Generic</option>
            <option value="activity">Activity</option>
            <option value="task">Task</option>
            <option value="transaction">Transaction</option>
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
            variantColor={colors.primary}
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

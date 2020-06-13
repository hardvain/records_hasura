import { Box, Divider, FormControl, FormLabel, Input, Stack, Textarea } from '@chakra-ui/core';
import moment from 'moment';
import { useEffect } from 'react';
import DatePicker from 'src/components/DatePicker';
import { useStore } from 'src/store';
export default ({ record = {}, setRecord }) => {
  const date = useStore(state => state.ui.date)
  const value = record ? (record.data ? record.data.value : '') : '';
  let ts = date.toISOString();
  const dueDate = record
    ? record.data
      ? record.data.dueDate
      : ts
    : ts;
  return (
    <Stack>
      <Stack mr={2} spacing={5}>
        <FormControl>
          <FormLabel htmlFor="email">Name</FormLabel>
          <Input
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
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Description</FormLabel>
          <Textarea
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
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="due date">Due Date</FormLabel>
          <DatePicker
            type={'input'}
            includeTime={true}
            selected={moment(dueDate)}
            onChange={(v) => {
              const timestamp = moment(v).toISOString();
              setRecord({
                ...record,
                timestamp,
                data: { ...record.data, dueDate: timestamp },
              });
            }}
          />
        </FormControl>
      </Stack>
    </Stack>
  );
};

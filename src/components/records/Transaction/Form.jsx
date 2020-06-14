import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Textarea,
} from '@chakra-ui/core';
import moment from 'moment';
import DatePicker from 'src/components/DatePicker';
export default ({ record = {}, setRecord }) => {
  const value = record ? (record.data ? record.data.value : '') : '';
  const description = record
    ? record.data
      ? record.data.description
      : ''
    : '';
  const transactionType = record
    ? record.data
      ? record.data.transactionType
      : 'expense'
    : 'expense';
  let timestamp = moment();
  const from = record
    ? record.data
      ? record.data.from
      : timestamp
    : timestamp;
  const to = record ? (record.data ? record.data.to : timestamp) : timestamp;
  return (
    <Stack>
      <Stack isInline spacing={5} w={'100%'}>
        <FormControl w={300}>
          <FormLabel htmlFor="email">Amount</FormLabel>
          <Box>
            <Input
              type={'number'}
              size={'sm'}
              value={value}
              onChange={(e) =>
                setRecord({
                  ...record,
                  data: { ...record.data, value: e.target.value },
                })
              }
            />
          </Box>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Type</FormLabel>
          <Select
            size={'sm'}
            value={transactionType}
            onChange={(e) =>
              setRecord({
                ...record,
                data: { ...record.data, transactionType: e.target.value },
              })
            }
          >
            <option value={'expense'}>Expense</option>
            <option value={'income'}>Income</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Payment Mode</FormLabel>
          <Select
            size={'sm'}
            value={transactionType}
            onChange={(e) =>
              setRecord({
                ...record,
                data: { ...record.data, transactionType: e.target.value },
              })
            }
          >
            <option value={'expense'}>Expense</option>
            <option value={'income'}>Income</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Timestamp</FormLabel>
          <Box>
            <DatePicker
              includeTime={true}
              type={'input'}
              selected={moment(to)}
              onChange={(v) => {
                const timestamp = moment(v).toISOString();
                setRecord({
                  ...record,
                  timestamp: timestamp,
                  data: { ...record.data, timestamp: timestamp },
                });
              }}
            />
          </Box>
        </FormControl>
      </Stack>

      <Divider />
      <Box mr={2}>
        <FormControl>
          <FormLabel htmlFor="email">Description</FormLabel>
          <Textarea
            borderRadius={3}
            resize={'none'}
            value={description}
            onChange={(e) =>
              setRecord({
                ...record,
                data: { ...record.data, description: e.target.value },
              })
            }
          />
        </FormControl>
      </Box>
    </Stack>
  );
};

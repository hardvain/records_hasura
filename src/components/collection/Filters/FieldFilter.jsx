import {
  Box,
  IconButton,
  Input,
  Select,
  SimpleGrid,
  Stack,
} from '@chakra-ui/core';
import { useState } from 'react';
import DatePicker from 'src/components/DatePicker';
import moment from 'moment';
const options = {
  uuid: {
    field: ({ value, onChange }) => {
      return <Input value={value} onChange={(e) => onChange(e.target.value)} />;
    },
    options: [
      '_eq',
      '_gt',
      '_gte',
      '_in',
      '_is_null',
      '_lt',
      '_lte',
      '_neq',
      '_nin',
    ],
  },
  float8: {
    field: ({ value, onChange }) => {
      return (
        <Input
          value={value}
          type={'number'}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    },
    options: [
      '_eq',
      '_gt',
      '_gte',
      '_in',
      '_is_null',
      '_lt',
      '_lte',
      '_neq',
      '_nin',
    ],
  },
  Int: {
    field: ({ value, onChange }) => {
      return (
        <Input
          type={'number'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    },
    options: [
      '_eq',
      '_gt',
      '_gte',
      '_in',
      '_is_null',
      '_lt',
      '_lte',
      '_neq',
      '_nin',
    ],
  },
  timestampz: {
    field: ({ value, onChange }) => {
      return (
        <DatePicker
          selected={moment(value)}
          type={'input'}
          onChange={(v) => onChange(v.toISOString(true))}
        />
      );
    },
    options: [
      '_eq',
      '_gt',
      '_gte',
      '_in',
      '_is_null',
      '_lt',
      '_lte',
      '_neq',
      '_nin',
    ],
  },
  timestamptz: {
    field: ({ value, onChange }) => {
      return (
        <DatePicker
          selected={moment(value)}
          type={'input'}
          onChange={(v) => onChange(v.toISOString(true))}
        />
      );
    },
    options: [
      '_eq',
      '_gt',
      '_gte',
      '_in',
      '_is_null',
      '_lt',
      '_lte',
      '_neq',
      '_nin',
    ],
  },
  String: {
    field: ({ value, onChange }) => {
      return <Input value={value} onChange={(e) => onChange(e.target.value)} />;
    },
    options: [
      '_eq',
      '_gt',
      '_gte',
      '_in',
      '_is_null',
      '_lt',
      '_lte',
      '_neq',
      '_nin',
      '_like',
      '_nilike',
      '_nsimilar',
      'similar',
    ],
  },
};

export default ({ fields, filter, setFilter, onDelete }) => {
  const fieldType = filter?.field
    ? fields.filter((f) => f.name === filter.field)[0].type
    : undefined;
  return (
    <SimpleGrid columns={3} spacing={10} my={2}>
      <Select
        value={filter.field}
        onChange={(e) => setFilter({ ...filter, field: e.target.value })}
        placeholder={'Select a field'}
      >
        {fields.map((f) => (
          <option key={f.name}>{f.name}</option>
        ))}
      </Select>
      {filter?.field && fieldType && (
        <Select
          value={filter.operator}
          onChange={(e) => setFilter({ ...filter, operator: e.target.value })}
          placeholder={'Select an operator'}
        >
          {options[fieldType].options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </Select>
      )}
      <Stack isInline>
        <Box flexGrow={1} mr={2} w={'100%'}>
          {filter?.field &&
            filter?.operator &&
            React.createElement(options[fieldType].field, {
              value: filter.value,
              onChange: (e) => setFilter({ ...filter, value: e }),
            })}
        </Box>

        <IconButton icon={'delete'} isRound size={'sm'} onClick={onDelete} />
      </Stack>
    </SimpleGrid>
  );
};

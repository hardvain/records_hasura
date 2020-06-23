import { Box, IconButton, Input, Select, Stack } from '@chakra-ui/core';
import { useState } from 'react';
const options = {
  uuid: [
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
  float8: [
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
  Int: ['_eq', '_gt', '_gte', '_in', '_is_null', '_lt', '_lte', '_neq', '_nin'],
  timestampz: [
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
  timestamptz: [
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
  String: [
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
};
export default ({ fields, filter, setFilter, onDelete }) => {
  const fieldType = filter?.field
    ? fields.filter((f) => f.name === filter.field)[0].type
    : undefined;
  return (
    <Stack isInline spacing={10} my={2}>
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
          {options[fieldType].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </Select>
      )}
      {filter?.field && filter?.operator && (
        <Input
          value={filter.value}
          onChange={(e) => setFilter({ ...filter, value: e.target.value })}
        />
      )}
      <IconButton icon={'delete'} isRound size={'sm'} onClick={onDelete} />
    </Stack>
  );
};

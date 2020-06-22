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
export default ({ fields, filter, setFilter }) => {
  const [field, setField] = useState();
  const [operator, setOperator] = useState();
  const [value, setValue] = useState();
  const fieldType = field
    ? fields.filter((f) => f.name === field)[0].type
    : undefined;
  return (
    <Stack isInline spacing={10} my={2}>
      <Select
        value={field}
        onChange={(e) => setField(e.target.value)}
        placeholder={'Select a field'}
      >
        {fields.map((f) => (
          <option key={f.name}>{f.name}</option>
        ))}
      </Select>
      {field && fieldType && (
        <Select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          placeholder={'Select an operator'}
        >
          {options[fieldType].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </Select>
      )}
      {field && operator && (
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
      )}
      <IconButton icon={'delete'} isRound size={"sm"}/>
    </Stack>
  );
};

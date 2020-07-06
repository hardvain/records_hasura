import { Select, Box, Editable, Text, EditablePreview } from '@chakra-ui/core';

import { Input } from '@chakra-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import useMutation from 'src/hooks/graphql/useMutation';

const Default = ({ value, onChange, options, ...rest }) => {
  return (
    <Select
      size={'sm'}
      placeholder={'Select a value'}
      value={value || ''}
      onChange={(e) => {
        const value = e.target.value;
        onChange(value === '' ? null : value);
      }}
    >
      {options.map((o) => (
        <option value={o.value} key={o.value}>
          {o.label}
        </option>
      ))}
    </Select>
  );
};
export { Default};

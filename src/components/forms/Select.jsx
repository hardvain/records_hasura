import { Select } from '@chakra-ui/core';
import React, { useState } from 'react';

const Default = ({
  value,
  onChange,
  updateCallback = () => {},
  options,
  ...rest
}) => {
  return (
    <Select
      size={'sm'}
      placeholder={'Select a value'}
      value={value || ''}
      onChange={(e) => {
        const value = e.target.value;
        onChange(value === '' ? null : value);
        updateCallback(value === '' ? null : value);
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
export { Default };

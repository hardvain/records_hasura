import Select from 'react-select';
import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/core';
const Default = ({
  value,
  onChange,
  updateCallback = () => {},
  options,
  ...rest
}) => {
  const selectedValue = options.filter((o) => o.value === value);
  return (
    <Box w={'100%'}>
      <Select
        onChange={(e) => {
          const value = e.value;
          onChange(value === '' ? null : value);
          updateCallback(value === '' ? null : value);
        }}
        className="basic-single"
        classNamePrefix="select"
        value={selectedValue}
        isClearable={true}
        isSearchable={true}
        name="color"
        options={options}
      />
    </Box>
  );
};
export { Default };

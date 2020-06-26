import { Select, Box, Editable, Text, EditablePreview } from '@chakra-ui/core';
import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
export default ({ name, options, ...rest }) => {
  const { control, getValues } = useFormContext(); // methods contain all useForm functions
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const value = getValues(name);
  const displayValue = value
    ? options.filter((o) => o.value === value)[0].label
    : '-';
  return (
    <Controller
      name={name}
      control={control}
      as={Select}
      size={'sm'}
      placeholder={'Select a value'}
      {...rest}
    >
      {options.map((o) => (
        <option value={o.value} key={o.value}>
          {o.label}
        </option>
      ))}
    </Controller>
  );
};

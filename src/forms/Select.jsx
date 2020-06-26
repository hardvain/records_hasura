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
    <Box
      onMouseEnter={(e) => setIsHovered(true)}
      onMouseLeave={(e) => setIsHovered(false)}
    >
      {!isClicked ? (
        <Box
          w={'100%'}
          px={2}
          py={1}
          bg={isHovered ? 'brand.50' : ''}
          onClick={() => setIsClicked(true)}
        >
          <Text>{displayValue}</Text>
        </Box>
      ) : (
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
      )}
    </Box>
  );
};

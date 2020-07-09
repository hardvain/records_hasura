import { Input, Box, Text, useColorMode } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';

const Default = ({
  value = '',
  onChange,
  updateCallback = () => {},
  ...rest
}) => {
  const [state, setState] = useState('Click to start typing');

  useEffect(() => {
    if (value && value.length > 0) {
      setState(value);
    }
  }, [value]);
  return (
    <Input
      value={value}
      onBlur={() => {
        updateCallback(state);
      }}
      onChange={(e) => {
        onChange(e.target.value);
        setState(e.target.value);
      }}
      {...rest}
    />
  );
};

export { Default };

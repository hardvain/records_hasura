import { Input } from '@chakra-ui/core';
import React, { useState } from 'react';

const Default = ({
  value = '',
  onChange,
  updateCallback = () => {},
  ...rest
}) => {
  const [state, setState] = useState('');
  return (
    <Input
      value={value}
      onBlur={() => updateCallback(state)}
      onChange={(e) => {
        onChange(e.target.value);
        setState(e.target.value);
      }}
      {...rest}
    />
  );
};

export { Default };

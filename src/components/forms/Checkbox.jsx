import { Checkbox } from '@chakra-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import useMutation from 'src/hooks/graphql/useMutation';

const Default = ({ value, onChange, ...rest }) => {
  return (
    <Checkbox
      value={value}
      onChange={(e) => onChange(e.target.checked)}
      {...rest}
    />
  );
};

export { Default };

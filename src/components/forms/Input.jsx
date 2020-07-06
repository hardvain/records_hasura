import { Input } from '@chakra-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import useMutation from 'src/hooks/graphql/useMutation';

const Default = ({ value = '', onChange, ...rest }) => {
  return (
    <Input value={value} onChange={(e) => onChange(e.target.value)} {...rest} />
  );
};

export { Default };

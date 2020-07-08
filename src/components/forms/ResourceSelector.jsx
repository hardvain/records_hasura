import { Select } from '@chakra-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import useMutation from 'src/hooks/graphql/useMutation';
import useQuery from 'src/hooks/graphql/useQuery';

const Default = ({
  resource,
  where,
  order_by,
  fields = ['id', 'name'],
  updateCallback = () => {},
  value = '',
  onChange = () => {},
  ...rest
}) => {
  const [data] = useQuery({
    name: resource,
    where,
    order_by,
    fields,
  });
  if (!data) {
    return (
      <Select
        size={'sm'}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        {...rest}
      />
    );
  }
  return (
    <Select
      size={'sm'}
      value={value}
      onChange={(e) => {
        const value = e.target.value;
        onChange(value === '' ? null : value);
        updateCallback(value === '' ? null : value);
      }}
      {...rest}
      placeholder={'Select an entry'}
    >
      {data.map((p) => (
        <option key={p.id} value={p.id}>
          {p.name}
        </option>
      ))}
    </Select>
  );
};

export { Default };

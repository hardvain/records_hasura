import { Select } from '@chakra-ui/core';
import { useField } from 'formik';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import useQuery from 'src/graphql/hooks/useQuery';

const ResourceSelector = ({
  resource,
  where,
  order_by,
  fields = ['id', 'name'],
  value = '',
  onChange = () => {},
  ...rest
}) => {
  const [projects] = useQuery({
    name: resource,
    where,
    order_by,
    fields,
  });
  if (!projects) {
    return (
      <Select
        size={'sm'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
    );
  }
  return (
    <Select
      size={'sm'}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...rest}
      placeholder={'Select an entry'}
    >
      {projects.map((p) => (
        <option key={p.id} value={p.id}>
          {p.name}
        </option>
      ))}
    </Select>
  );
};

export default ({ name, ...rest }) => {
  const { control } = useFormContext(); // methods contain all useForm functions

  return (
    <Controller
      control={control}
      as={ResourceSelector}
      size={'sm'}
      name={name}
      {...rest}
    />
  );
};

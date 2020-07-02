import { Select } from '@chakra-ui/core';
import { useField } from 'formik';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import useMutation from 'src/hooks/graphql/useMutation';
import useQuery from 'src/hooks/graphql/useQuery';

export const ResourceSelector = ({
  resource,
  where,
  order_by,
  fields = ['id', 'name'],
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
      {data.map((p) => (
        <option key={p.id} value={p.id}>
          {p.name}
        </option>
      ))}
    </Select>
  );
};
export default ({ name, ...rest }) => {
  const { control, resource, id } = useFormContext(); // methods contain all useForm functions
  const mutate = useMutation({ resource, operation: 'update' });
  const update = (value) => {
    if (id) {
      mutate({
        variables: {
          object: { [name]: value },
          where: { id: { _eq: id } },
        },
      });
    }
  };
  return (
    <Controller
      control={control}
      as={({ onChange, value }) => (
        <ResourceSelector
          size={'sm'}
          value={value || ''}
          onChange={(value) => {
            update(value);
            onChange(value);
          }}
          {...rest}
        />
      )}
      name={name}
    />
  );
};

import { Select, Box, Editable, Text, EditablePreview } from '@chakra-ui/core';
import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import useMutation from 'src/hooks/graphql/useMutation';
export default ({ name, options, action, ...rest }) => {
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
      name={name}
      control={control}
      as={({ onChange, value }) => (
        <Select
          size={'sm'}
          placeholder={'Select a value'}
          value={value || ''}
          onChange={(e) => {
            update(e.target.value);
            onChange(e);
          }}
        >
          {options.map((o) => (
            <option value={o.value} key={o.value}>
              {o.label}
            </option>
          ))}
        </Select>
      )}
      {...rest}
    />
  );
};

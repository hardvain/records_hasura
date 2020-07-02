import { Input, Select } from '@chakra-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import _ from 'lodash';
import useMutation from 'src/hooks/graphql/useMutation';

export default ({ name, options, ...rest }) => {
  const delayedQuery = _.debounce((q) => update(q), 2000);
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
      size={'sm'}
      name={name}
      as={({ onChange, value }) => (
        <Input
          size={'sm'}
          value={value || ''}
          {...rest}
          onChange={(e) => {
            delayedQuery(e.target.value);
            onChange(e);
          }}
        />
      )}
    />
  );
};

import { Input } from '@chakra-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import useMutation from 'src/hooks/graphql/useMutation';

const Default = ({ value = '', onChange, ...rest }) => {
  return (
    <Input value={value} onChange={(e) => onChange(e.target.value)} {...rest} />
  );
};

const Controlled = ({ name, onChangeCallback = () => {}, ...rest }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      as={({ onChange, value }) => {
        const onChangeHandler = (v) => {
          onChange(v);
          onChangeCallback(v);
        };
        return <Default value={value} onChange={onChangeHandler} {...rest} />;
      }}
    />
  );
};

const Smart = (props) => {
  const { resource, id } = useFormContext();
  const mutate = useMutation({ resource, operation: 'update', silent: true });
  const update = (value) => {
    if (id) {
      mutate({
        variables: {
          object: { [props.name]: value },
          where: { id: { _eq: id } },
        },
      });
    }
  };
  return <Controlled {...props} onChangeCallback={update} />;
};
export { Default, Controlled, Smart };

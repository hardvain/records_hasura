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
      onChange={(e) => {
        const value = e.target.value;
        onChange(value === '' ? null : value);
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

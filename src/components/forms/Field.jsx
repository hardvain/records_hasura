import { Box, Heading, Stack, Text } from '@chakra-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import useMutation from 'src/hooks/graphql/useMutation';
import * as Input from './Input';
import * as Checkbox from './Checkbox';
import { Default } from './Select';
import * as TextArea from './TextArea';
import * as Select from './Select';
import * as DatePicker from './DatePicker';
import * as ResourceSelector from 'src/components/forms/ResourceSelector';

const Controlled = ({
  name,
  onChangeCallback = () => {},
  component,
  ...rest
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      as={({ onChange, value }) => {
        return React.createElement(component, {
          value,
          onChange: onChange,
          updateCallback: onChangeCallback,
          ...rest,
        });
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

const map = {
  string: Input,
  number: Input,
  checkbox: Checkbox,
  text: TextArea,
  select: Select,
  timestamp: DatePicker,
  ref: ResourceSelector,
};
export default ({ name, isSmart = false, hideLabel = false, ...rest }) => {
  const { schema, isSmart: isGlobalSmart } = useFormContext();
  const metadata = schema[name];
  const DefaultComponent = map[metadata.type].Default;
  const component =
    isGlobalSmart || isSmart ? (
      <Smart name={name} component={DefaultComponent} {...metadata} {...rest} />
    ) : (
      <Controlled
        name={name}
        component={DefaultComponent}
        {...metadata}
        {...rest}
      />
    );
  return (
    <Box {...rest}>
      <Stack alignItems={'baseline'}>
        {!hideLabel && <Text fontSize={14}>{metadata.label}</Text>}
        {component}
      </Stack>
    </Box>
  );
};

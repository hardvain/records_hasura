import { Button, IconButton, Input, Text } from '@chakra-ui/core';
import React, { createElement, createRef, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Controller, useFormContext } from 'react-hook-form';
import { FaCalendarAlt } from 'react-icons/fa';
import useMutation from 'src/hooks/graphql/useMutation';
import { useStore } from 'src/store';

const IconComponent = forwardRef(({ value, onClick }, ref) => (
  <IconButton
    variant={'solid'}
    size={'sm'}
    icon={FaCalendarAlt}
    onClick={onClick}
  >
    {value}
  </IconButton>
));
const TextComponent = forwardRef(({ value, onClick }, ref) => (
  <Text fontSize={'xs'} onClick={onClick}>
    {value}
  </Text>
));
const InputComponent = forwardRef(({ value, onClick, ...rest }, ref) => (
  <Input
    size={'sm'}
    leftIcon={FaCalendarAlt}
    onClick={onClick}
    onChange={() => {}}
    value={value}
    {...rest}
  />
));
const ButtonComponent = forwardRef(({ value, onClick }, ref) => {
  const { colors } = useStore((state) => ({
    colors: state.ui.colors,
  }));
  return (
    <Button
      variant={'solid'}
      size={'sm'}
      leftIcon={FaCalendarAlt}
      onClick={onClick}
    >
      {value}
    </Button>
  );
});
const ComponentMap = {
  button: ButtonComponent,
  icon: IconComponent,
  text: TextComponent,
  input: InputComponent,
};

const Component = ({ selected, onChange, type, includeTime, ...rest }) => {
  const ref = createRef();
  return (
    <DatePicker
      className="data-picker"
      showTimeSelect={true}
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Time"
      selected={selected ? moment(selected)?.toDate() : undefined}
      showWeekNumbers
      todayButton="Today"
      onChange={(v) => onChange(moment(v))}
      dateFormat={includeTime ? 'MMMM d, yyyy - HH:mm' : 'MMMM d, yyyy'}
      customInput={createElement(ComponentMap[type || 'input'], { ref })}
      {...rest}
    />
  );
};

export default Component;

export const CustomDatePicker = ({
  selected,
  onChange,
  type,
  includeTime,
  ...rest
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      as={Component}
      control={control}
      valueName={'selected'}
      onChange={([selected]) => selected}
      {...rest}
    />
  );
};

export const SmartDatePicker = ({ name, options, ...rest }) => {
  const { control, resource, id } = useFormContext();
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
      as={Component}
      control={control}
      valueName={'selected'}
      onChange={([selected]) => {
        update(selected);
        return selected;
      }}
      {...rest}
    />
  );
};

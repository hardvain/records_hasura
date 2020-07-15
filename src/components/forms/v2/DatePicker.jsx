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

const Default = ({
  value,
  onChange,
  updateCallback = () => {},
  type = 'input',
  includeTime,
  ...rest
}) => {
  const ref = createRef();
  let datePickerType = rest.datePickerType || 'input';
  return (
    <DatePicker
      className="data-picker"
      showTimeSelect={true}
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Time"
      selected={value ? moment(value)?.toDate() : moment().toDate()}
      showWeekNumbers
      todayButton="Today"
      onChange={(v) => {
        onChange(moment(v).toISOString(true));
        updateCallback(moment(v).toISOString(true));
      }}
      dateFormat={includeTime ? 'MMMM d, yyyy - HH:mm' : 'MMMM d, yyyy'}
      customInput={createElement(ComponentMap[datePickerType], { ref })}
      {...rest}
    />
  );
};

export { Default };

import { Button, IconButton, Input, Text } from '@chakra-ui/core';
import { createElement, createRef, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { FaCalendarAlt } from 'react-icons/fa';
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
const InputComponent = forwardRef(({ value, onClick }, ref) => (
  <Input
    size={'sm'}
    leftIcon={FaCalendarAlt}
    onClick={onClick}
    onChange={() => {}}
    value={value}
  />
));
const ButtonComponent = forwardRef(({ value, onClick }, ref) => {
  const { colors } = useStore((state) => ({
    colors: state.ui.colors,
  }));
  return (
    <Button
      variant={'solid'}
      variantColor={colors.primary}
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

export default ({ selected, onChange, type, includeTime }) => {
  const ref = createRef();
  return (
    <DatePicker
      className="data-picker"
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Time"
      selected={selected?.toDate()}
      onChange={(v) => onChange(moment(v))}
      dateFormat={includeTime ? "MMMM d, yyyy - HH:mm" :"MMMM d, yyyy"}
      customInput={createElement(ComponentMap[type || 'input'], { ref })}
    />
  );
};

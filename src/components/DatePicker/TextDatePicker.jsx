import { Button, Text } from '@chakra-ui/core';
import DatePicker from 'react-datepicker';
import {forwardRef, createRef} from 'react'
import { FaCalendarAlt } from 'react-icons/fa';

const Component = forwardRef(({value,onClick}, ref) => (
  <Text fontSize={'xs'} onClick={onClick}>
    {value}
  </Text>
))
export default ({ selected, onChange }) => {
  const ref = createRef()
  return (
    <DatePicker
      selected={selected?.toDate()}
      onChange={onChange}
      dateFormat="MMMM d, yyyy"
      customInput={<Component ref={ref}/>}
    />
  );
};

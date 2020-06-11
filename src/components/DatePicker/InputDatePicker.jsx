import { Button, Input } from '@chakra-ui/core';
import { createRef, forwardRef } from 'react';
import DatePicker from 'react-datepicker';

import { FaCalendarAlt } from 'react-icons/fa';

const Component = forwardRef(({value,onClick}, ref) => (
  <Input
    size={'sm'}
    leftIcon={FaCalendarAlt}
    onClick={onClick}
    value={value}
  >
  </Input>
));
export default ({ selected, onChange }) => {
  const ref = createRef()

  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      dateFormat="MMMM d, yyyy"
      customInput={<Component ref={ref}/>}

    />
  );
};
import { Button } from '@chakra-ui/core';
import { createRef, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { FaCalendarAlt } from 'react-icons/fa';

const Component = forwardRef(({ value, onClick }, ref) => (
  <Button
    variant={'solid'}
    variantColor={'cyan'}
    size={'sm'}
    leftIcon={FaCalendarAlt}
    onClick={onClick}
  >
    {value}
  </Button>
));
export default ({ selected, onChange }) => {
  const ref = createRef();

  return (
    <DatePicker
      selected={selected?.toDate()}
      onChange={(v) => onChange(moment(v))}
      dateFormat="MMMM d, yyyy"
      customInput={<Component ref={ref} />}
    />
  );
};

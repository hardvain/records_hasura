import { IconButton } from '@chakra-ui/core';
import moment from 'moment';
import { createRef, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';

const Component = forwardRef(({value,onClick}, ref) => (
  <IconButton
    variant={'solid'}
    size={'sm'}
    icon={FaCalendarAlt}
    onClick={onClick}
  >
    {value}
  </IconButton>
));

export default ({ selected, onChange }) => {
  const ref = createRef()

  return (
    <DatePicker
      selected={selected?.toDate()}
      onChange={(v) => onChange(moment(v))}
      dateFormat="MMMM d, yyyy"
      customInput={<Component ref={ref}/>}

    />
  );
};

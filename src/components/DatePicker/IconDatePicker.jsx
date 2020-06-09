import { Button, IconButton } from '@chakra-ui/core';
import DatePicker from 'react-datepicker';

import { FaCalendarAlt } from 'react-icons/fa';

const Component = ({ value, onClick }) => (
  <IconButton
    variant={'solid'}
    size={'sm'}
    icon={FaCalendarAlt}
    onClick={onClick}
  >
    {value}
  </IconButton>
);

export default () => {
  return (
    <DatePicker
      selected={Date.now()}
      monthsShown={2}
      customInput={<Component />}
    />
  );
};

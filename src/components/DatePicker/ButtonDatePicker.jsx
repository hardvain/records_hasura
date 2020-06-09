import { Button } from '@chakra-ui/core';
import DatePicker from 'react-datepicker';

import { FaCalendarAlt } from 'react-icons/fa';

const Component = ({ value, onClick }) => (
  <Button
    variant={'solid'}
    variantColor={'teal'}
    size={'sm'}
    leftIcon={FaCalendarAlt}
    onClick={onClick}
  >
    {value}
  </Button>
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

import { Button, Text } from '@chakra-ui/core';
import DatePicker from 'react-datepicker';

import { FaCalendarAlt } from 'react-icons/fa';

const Component = ({ value, onClick }) => (
  <Text fontSize={'xs'} onClick={onClick}>
    {value}
  </Text>
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

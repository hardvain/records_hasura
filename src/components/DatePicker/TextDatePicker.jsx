import { Text } from '@chakra-ui/core';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import {forwardRef, createRef} from 'react'

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
      onChange={(v) => onChange(moment(v))}
      dateFormat="MMMM d, yyyy"
      customInput={<Component ref={ref}/>}
    />
  );
};

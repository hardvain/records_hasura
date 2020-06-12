import { Textarea } from '@chakra-ui/core';
import { useEffect } from 'react';
import moment from 'moment';
export default ({ record = {}, setRecord }) => {
  const value = record ? (record.data ? record.data.value : '') : '';
  useEffect(() => {
    if(!record.id){
      setRecord({ ...record, timestamp: moment().toISOString() });
    }
  }, []);
  return (
    <Textarea
      ref={(input) => input && input.focus()}
      variant="unstyled"
      placeholder="Add new record"
      borderRadius={3}
      resize={'none'}
      value={value}
      onChange={(e) =>
        setRecord({
          ...record,
          data: { ...record.data, value: e.target.value },
        })
      }
    />
  );
};

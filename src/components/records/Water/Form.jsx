import { Input } from '@chakra-ui/core';


export default ({ record = {}, setRecord }) => {
  const value = record ? (record.data ? record.data.value : '') : '';
  return (
    <Input
      ref={(input) => input && input.focus()}
      type={'number'}
      variant="unstyled"
      placeholder={'Enter water consumption value'}
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

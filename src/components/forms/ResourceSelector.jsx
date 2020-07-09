import Select from 'react-select';
import { Box } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import useQuery from 'src/hooks/graphql/useQuery';

const Default = ({
  resource,
  where,
  order_by,
  fields = ['id', 'name'],
  updateCallback = () => {},
  value = '',
  onChange = () => {},
  ...rest
}) => {
  const [data] = useQuery({
    name: resource,
    where,
    order_by,
    fields,
  });
  const [options, setOptions] = useState([]);
  useEffect(() => {
    if (data) {
      setOptions(data.map((i) => ({ value: i.id, label: i.name })));
    }
  }, [data]);
  if (!data) {
    return (
      <Select
        size={'sm'}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        {...rest}
      />
    );
  }
  const selectedValue = options.filter((o) => o.value === value);
  return (
    <Box w={'100%'}>
      <Select
        onChange={(e) => {
          const value = e?.value;
          onChange(value === '' || value === undefined ? null : value);
          updateCallback(value === '' || value === undefined ? null : value);
        }}
        className="basic-single"
        classNamePrefix="select"
        value={selectedValue ? selectedValue[0] : ''}
        isClearable={true}
        isSearchable={true}
        name="color"
        options={options}
      />
    </Box>
  );
};

export { Default };

import {
  Box,
  Button,
  Input,
  Select,
  Checkbox,
  Stack,
  RadioButtonGroup,
  IconButton,
} from '@chakra-ui/core';
import React from 'react';
import { useState } from 'react';
import FieldFilter from './FieldFilter';
import Card from 'src/components/Card';
// Step 1: Create a component that accepts `isChecked` and `isDisabled` prop
const CustomRadio = React.forwardRef((props, ref) => {
  const { isChecked, isDisabled, value, ...rest } = props;
  return (
    <Button
      size={'sm'}
      ref={ref}
      variantColor={isChecked ? 'red' : 'gray'}
      aria-checked={isChecked}
      role="radio"
      isDisabled={isDisabled}
      {...rest}
    />
  );
});
const FilterGroup = ({ fields, filterGroup, setFilterGroup, onDelete }) => {
  const [filters, setFilters] = useState([]);
  const addFilter = () => {
    setFilters([...filters, { type: 'field' }]);
  };
  const addGroup = () => {
    setFilters([...filters, { type: 'group' }]);
  };
  const deleteFilter = (index) => {
    setFilters(filters.filter((f, i) => i !== index));
  };
  const setFilter = (index) => (content) => {
    const updatedFilters = [...filters];
    updatedFilters[index] = content;
    setFilters(updatedFilters);
  };
  const deleteFilterGroup = (index) => {
    setFilters(filters.filter((f, i) => i !== index));
  };
  const setChildFilterGroup = (index) => (content) => {
    const updatedFilters = [...filters];
    updatedFilters[index] = content;
    setFilters(updatedFilters);
  };
  return (
    <Card highlight shadow>
      <Stack isInline my={3}>
        <Checkbox>Not</Checkbox>
        <RadioButtonGroup
          defaultValue="and"
          onChange={(val) => console.log(val)}
          isInline
        >
          <CustomRadio value="and">And</CustomRadio>
          <CustomRadio value="or">Or</CustomRadio>
        </RadioButtonGroup>
        <Box flexGrow={1}></Box>
        <Button size={'sm'} onClick={addFilter}>
          Add Filter
        </Button>
        <Button size={'sm'} onClick={addGroup}>
          Add Group
        </Button>
        <IconButton isRound size={'sm'} icon={'delete'} onClick={onDelete} />
      </Stack>
      {filters.map((f, index) =>
        f.type === 'field' ? (
          <FieldFilter
            fields={fields}
            filter={f}
            setFilter={setFilter(index)}
            key={index}
            onDelete={() => deleteFilter(index)}
          />
        ) : (
          <FilterGroup
            fields={fields}
            filterGroup={f}
            setFilterGroup={setChildFilterGroup}
            onDelete={() => deleteFilterGroup(index)}
          />
        )
      )}
    </Card>
  );
};

const constructFilters = (filterGroups) => {
  return {};
};

export default ({ schema = { fields: [] }, children }) => {
  const fields = schema?.fields
    ? schema.fields
        .filter((f) => f?.type?.name || f?.type?.ofType?.name)
        .map((field) => {
          const type = field.type.name || field.type.ofType.name;
          return { name: field.name, type };
        })
        .filter((f) => f.type && !f.name.startsWith('ref_'))
    : [];
  const [filterGroups, setFilterGroups] = useState([{}]);
  const addFilterGroup = () => {
    setFilterGroups([...filterGroups, {}]);
  };
  return (
    <Box>
      <Stack>
        {filterGroups.map((fg, index) => (
          <FilterGroup key={index} filterGroup={fg} fields={fields} />
        ))}
        <Box></Box>
        <Button onClick={addFilterGroup}>Add Group</Button>
        <Box>{children(constructFilters(filterGroups))}</Box>
      </Stack>
    </Box>
  );
};

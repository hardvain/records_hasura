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
import React, { useEffect } from 'react';
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
const FilterGroup = ({
  fields,
  onDelete,
  filter,
  setFilter,
  isRoot = false,
}) => {
  const [isNot, setIsNot] = useState(filter.isNot);
  const [groupType, setGroupType] = useState(filter.groupType);

  useEffect(() => {
    setFilter({ ...filter, isNot });
  }, [isNot]);

  useEffect(() => {
    setFilter({ ...filter, groupType });
  }, [groupType]);

  const addFilter = () => {
    setFilter({ ...filter, filters: [...filter.filters, { type: 'field' }] });
  };
  const addGroup = () => {
    setFilter({
      ...filter,
      filters: [
        ...filter.filters,
        { type: 'group', groupType: '_and', isNot: false, filters: [] },
      ],
    });
  };
  const deleteFilter = (index) => {
    setFilter({
      ...filter,
      filters: [filter.filters.filter((f, i) => i !== index)],
    });
  };

  const deleteFilterGroup = (index) => {
    setFilter({
      ...filter,
      filters: [filter.filters.filter((f, i) => i !== index)],
    });
  };

  const setFilterField = (index) => (f) => {
    const updatedFilters = [...filter.filters];
    updatedFilters[index] = f;
    setFilter({
      ...filter,
      filters: updatedFilters,
    });
  };

  const setFilterGroup = (index) => (f) => {
    const updatedFilters = [...filter.filters];
    updatedFilters[index] = f;
    setFilter({
      ...filter,
      filters: updatedFilters,
    });
  };

  return (
    <Card highlight shadow>
      <Stack isInline my={3}>
        <Checkbox
          isChecked={isNot}
          onChange={(e) => setIsNot(e.target.checked)}
        >
          Not
        </Checkbox>
        <RadioButtonGroup
          value={groupType}
          onChange={(v) => setGroupType(v)}
          isInline
        >
          <CustomRadio value="_and">And</CustomRadio>
          <CustomRadio value="_or">Or</CustomRadio>
        </RadioButtonGroup>
        <Box flexGrow={1}></Box>
        <Button size={'sm'} onClick={addFilter}>
          Add Filter
        </Button>
        <Button size={'sm'} onClick={addGroup}>
          Add Group
        </Button>
        {!isRoot && (
          <IconButton isRound size={'sm'} icon={'delete'} onClick={onDelete} />
        )}
      </Stack>
      {filter?.filters?.length > 0 &&
        filter.filters.map((f, index) =>
          f.type === 'field' ? (
            <FieldFilter
              fields={fields}
              filter={f}
              setFilter={setFilterField(index)}
              key={index}
              onDelete={() => deleteFilter(index)}
            />
          ) : (
            <FilterGroup
              key={index}
              fields={fields}
              filter={f}
              setFilter={setFilterGroup(index)}
              onDelete={() => deleteFilterGroup(index)}
            />
          )
        )}
    </Card>
  );
};

const constructFilters = (rootFilter) => {
  const childFilters = rootFilter.filters
    .filter(
      (f) =>
        (f.type === 'group' && f.filters.length > 0) ||
        (f.type === 'field' && f.field && f.operator && f.value)
    )
    .map((f) => {
      if (f.type === 'group') {
        return constructFilters(f);
      } else {
        return { [f.field]: { [f.operator]: f.value } };
      }
    });
  let result = {};
  if (rootFilter.isNot) {
    result._not = {
      [rootFilter.groupType]: childFilters,
    };
  } else {
    result = {
      [rootFilter.groupType]: childFilters,
    };
  }
  return result;
};

const constructInitialFilters = (filter) => {
  let result = {};
  result.isNot = !!filter._not;
  const actualFilter = result.isNot ? filter._not : filter;
  if (actualFilter._and) {
    result.groupType = '_and';
    result.type = 'group';
    result.filters = actualFilter._and.map(constructInitialFilters);
  } else if (actualFilter._or) {
    result.groupType = '_or';
    result.type = 'group';
    result.filters = actualFilter._or.map(constructInitialFilters);
  } else {
    result.type = 'field';
    result.field = Object.keys(actualFilter)[0];
    const details = actualFilter[result.field];
    result.operator = Object.keys(details)[0];
    result.value = details[result.operator];
  }
  return result;
};

export default ({
  schema = { fields: [] },
  where = {
    _and: [
      { status: { _eq: 'completed' } },
      { status: { _eq: 'todo' } },
      { priority: { _eq: 'high' } },
      {
        _not: {
          _or: [{ status: { _eq: 'In Progress' } }, { name: { _eq: 'Task' } }],
        },
      },
    ],
  },
  children,
}) => {
  const initialFilters = constructInitialFilters(where);
  const [rootFilter, setRootFilter] = useState(initialFilters);
  const fields = schema?.fields
    ? schema.fields
        .filter((f) => f?.type?.name || f?.type?.ofType?.name)
        .map((field) => {
          const type = field.type.name || field.type.ofType.name;
          return { name: field.name, type };
        })
        .filter((f) => f.type && !f.name.startsWith('ref_'))
    : [];
  const graphqlFilters = constructFilters(rootFilter);
  return (
    <Box>
      {fields.length > 0 && (
        <Stack>
          <FilterGroup
            fields={fields}
            isRoot={true}
            filter={rootFilter}
            setFilter={setRootFilter}
          />
          <Box></Box>
          <Box>{children(graphqlFilters)}</Box>
        </Stack>
      )}
    </Box>
  );
};

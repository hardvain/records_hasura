import {
  Box,
  Checkbox,
  IconButton,
  Input,
  Select,
  SimpleGrid,
  Stack,
} from '@chakra-ui/core';
import Selector from 'src/components/collection/Selector';
import DatePicker from 'src/components/DatePicker';
import moment from 'moment';
const options = {
  uuid: {
    field: ({ operator, value, onChange }) => {
      if (!['_is_null'].includes(operator)) {
        return (
          <Input
            size={'sm'}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        );
      } else {
        return (
          <Checkbox
            isChecked={value}
            onChange={(e) => onChange(e.target.checked)}
          />
        );
      }
    },
    options: [
      { value: '_eq', label: 'Equals' },
      { value: '_gt', label: 'Greater Than' },
      { value: '_gte', label: 'Greater Than or Equal To' },
      { value: '_in', label: 'In' },
      { value: '_is_null', label: 'Is Null' },
      { value: '_lt', label: 'Less Than' },
      { value: '_lte', label: 'Less Than or Equal To' },
      { value: '_neq', label: 'Not Equal To' },
      { value: '_nin', label: 'Not In' },
    ],
  },
  float8: {
    field: ({ operator, value, onChange }) => {
      if (!['_is_null'].includes(operator)) {
        return (
          <Input
            type={'number'}
            size={'sm'}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        );
      } else {
        return (
          <Checkbox
            isChecked={value}
            onChange={(e) => onChange(e.target.checked)}
          />
        );
      }
    },
    options: [
      { value: '_eq', label: 'Equals' },
      { value: '_gt', label: 'Greater Than' },
      { value: '_gte', label: 'Greater Than or Equal To' },
      { value: '_in', label: 'In' },
      { value: '_is_null', label: 'Is Null' },
      { value: '_lt', label: 'Less Than' },
      { value: '_lte', label: 'Less Than or Equal To' },
      { value: '_neq', label: 'Not Equal To' },
      { value: '_nin', label: 'Not In' },
    ],
  },
  Int: {
    field: ({ operator, value, onChange }) => {
      if (!['_is_null'].includes(operator)) {
        return (
          <Input
            type={'number'}
            size={'sm'}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        );
      } else {
        return (
          <Checkbox
            isChecked={value}
            onChange={(e) => onChange(e.target.checked)}
          />
        );
      }
    },
    options: [
      { value: '_eq', label: 'Equals' },
      { value: '_gt', label: 'Greater Than' },
      { value: '_gte', label: 'Greater Than or Equal To' },
      { value: '_in', label: 'In' },
      { value: '_is_null', label: 'Is Null' },
      { value: '_lt', label: 'Less Than' },
      { value: '_lte', label: 'Less Than or Equal To' },
      { value: '_neq', label: 'Not Equal To' },
      { value: '_nin', label: 'Not In' },
    ],
  },
  timestampz: {
    field: ({ operator, value, onChange }) => {
      if (!['_is_null'].includes(operator)) {
        return (
          <DatePicker
            selected={moment(value)}
            type={'input'}
            onChange={(v) => onChange(v.toISOString(true))}
          />
        );
      } else {
        return (
          <Checkbox
            isChecked={value}
            onChange={(e) => onChange(e.target.checked)}
          />
        );
      }
    },
    options: [
      { value: '_eq', label: 'Equals' },
      { value: '_gt', label: 'Greater Than' },
      { value: '_gte', label: 'Greater Than or Equal To' },
      { value: '_in', label: 'In' },
      { value: '_is_null', label: 'Is Null' },
      { value: '_lt', label: 'Less Than' },
      { value: '_lte', label: 'Less Than or Equal To' },
      { value: '_neq', label: 'Not Equal To' },
      { value: '_nin', label: 'Not In' },
    ],
  },
  timestamptz: {
    field: ({ operator, value, onChange }) => {
      if (!['_is_null'].includes(operator)) {
        return (
          <DatePicker
            selected={moment(value)}
            type={'input'}
            onChange={(v) => onChange(v.toISOString(true))}
          />
        );
      } else {
        return (
          <Checkbox
            isChecked={value}
            onChange={(e) => onChange(e.target.checked)}
          />
        );
      }
    },
    options: [
      { value: '_eq', label: 'Equals' },
      { value: '_gt', label: 'Greater Than' },
      { value: '_gte', label: 'Greater Than or Equal To' },
      { value: '_in', label: 'In' },
      { value: '_is_null', label: 'Is Null' },
      { value: '_lt', label: 'Less Than' },
      { value: '_lte', label: 'Less Than or Equal To' },
      { value: '_neq', label: 'Not Equal To' },
      { value: '_nin', label: 'Not In' },
    ],
  },
  String: {
    field: ({ operator, value, onChange }) => {
      if (!['_is_null'].includes(operator)) {
        return (
          <Input
            size={'sm'}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        );
      } else {
        return (
          <Checkbox
            isChecked={value}
            onChange={(e) => onChange(e.target.checked)}
          />
        );
      }
    },
    options: [
      { value: '_eq', label: 'Equals' },
      { value: '_gt', label: 'Greater Than' },
      { value: '_gte', label: 'Greater Than or Equal To' },
      { value: '_in', label: 'In' },
      { value: '_is_null', label: 'Is Null' },
      { value: '_lt', label: 'Less Than' },
      { value: '_lte', label: 'Less Than or Equal To' },
      { value: '_neq', label: 'Not Equal To' },
      { value: '_nin', label: 'Not In' },
      { value: '_like', label: 'Like' },
      { value: '_nilike', label: 'Not Like' },
      { value: 'similar', label: 'Similar' },
      { value: '_nsimilar', label: 'Not Similar' },
    ],
  },
};
const GenericOptions = [
  { value: '_eq', label: 'Equals' },
  { value: '_gt', label: 'Greater Than' },
  { value: '_gte', label: 'Greater Than or Equal To' },
  { value: '_in', label: 'In' },
  { value: '_is_null', label: 'Is Null' },
  { value: '_lt', label: 'Less Than' },
  { value: '_lte', label: 'Less Than or Equal To' },
  { value: '_neq', label: 'Not Equal To' },
  { value: '_nin', label: 'Not In' },
];
export default ({ fields, filter, setFilter, onDelete }) => {
  const field = filter?.field
    ? fields.filter((f) => f.name === filter.field)[0]
    : undefined;
  const fieldType = field?.type;
  const fieldName = field?.name;
  let ValueComponent;
  if (fieldName && fieldName.startsWith('ref')) {
    ValueComponent = <Selector name={fieldType} />;
  } else if (fieldType && options[fieldType].field) {
    ValueComponent = React.createElement(options[fieldType].field, {
      value: filter.value,
      onChange: (e) => setFilter({ ...filter, value: e }),
      operator: filter?.operator,
    });
  }
  return (
    <SimpleGrid columns={3} spacing={5} my={2}>
      <Select
        variant={'outline'}
        size={'sm'}
        value={filter.field}
        onChange={(e) => setFilter({ ...filter, field: e.target.value })}
        placeholder={'Select a field'}
      >
        {fields.map((f) => (
          <option key={f.name}>{f.name}</option>
        ))}
      </Select>
      {filter?.field && fieldType && (
        <Select
          variant={'outline'}
          size={'sm'}
          value={filter.operator}
          onChange={(e) => setFilter({ ...filter, operator: e.target.value })}
          placeholder={'Select an operator'}
        >
          {(options[fieldType]
            ? options[fieldType].options
            : GenericOptions
          ).map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </Select>
      )}
      <Stack isInline>
        <Box flexGrow={1} mr={2} w={'100%'} display={'grid'}>
          {filter?.field && filter?.operator && ValueComponent}
        </Box>

        <IconButton icon={'delete'} isRound size={'sm'} onClick={onDelete} />
      </Stack>
    </SimpleGrid>
  );
};

import { Box, Heading, Stack, Text } from '@chakra-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import EditableInput from 'src/components/FormikEditableInput';
import { CustomDatePicker } from 'src/components/DatePicker';
import ResourceSelector from 'src/components/collection/Selector';

const map = {
  string: Input,
  text: TextArea,
  select: Select,
  timestamp: CustomDatePicker,
  ref: ResourceSelector,
  editable: EditableInput,
};
export default ({ name, ...rest }) => {
  const { schema } = useFormContext(); // methods contain all useForm functions
  const metadata = schema[name];
  const component = map[metadata.type];
  return (
    <Box {...rest}>
      <Stack alignItems={'baseline'}>
        <Text fontSize={14}>{metadata.label}</Text>
        {React.createElement(component, { name, ...metadata, ...rest })}
      </Stack>
    </Box>
  );
};
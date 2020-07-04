import { Box, Heading, Stack, Text } from '@chakra-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import Input from './Input';
import Checkbox from './Checkbox';
import TextArea from './TextArea';
import Select from './Select';
import { CustomDatePicker } from 'src/components/DatePicker';
import ResourceSelector from 'src/containers/collection/Selector';

const map = {
  string: Input,
  number: Input,
  checkbox: Checkbox,
  text: TextArea,
  select: Select,
  timestamp: CustomDatePicker,
  ref: ResourceSelector,
};
export default ({ name, hideLabel = false, ...rest }) => {
  const { schema, action } = useFormContext(); // methods contain all useForm functions
  const metadata = schema[name];
  const component = map[metadata.type];
  return (
    <Box {...rest}>
      <Stack alignItems={'baseline'}>
        {!hideLabel && <Text fontSize={14}>{metadata.label}</Text>}
        {React.createElement(component, { name, ...metadata, ...rest })}
      </Stack>
    </Box>
  );
};

import { Box, Heading, Stack, Text } from '@chakra-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import * as Input from './Input';
import * as Checkbox from './Checkbox';
import * as TextArea from './TextArea';
import * as Select from './Select';
import * as DatePicker from './DatePicker';
import * as ResourceSelector from 'src/components/forms/ResourceSelector';

const map = {
  string: Input,
  number: Input,
  checkbox: Checkbox,
  text: TextArea,
  select: Select,
  timestamp: DatePicker,
  ref: ResourceSelector,
};
export default ({ name, isSmart = false, hideLabel = false, ...rest }) => {
  const { schema, isSmart: isGlobalSmart } = useFormContext();
  const metadata = schema[name];
  const component =
    isGlobalSmart || isSmart
      ? map[metadata.type].Smart
      : map[metadata.type].Controlled;
  return (
    <Box {...rest}>
      <Stack alignItems={'baseline'}>
        {!hideLabel && <Text fontSize={14}>{metadata.label}</Text>}
        {React.createElement(component, {
          name,
          ...metadata,
          ...rest,
        })}
      </Stack>
    </Box>
  );
};

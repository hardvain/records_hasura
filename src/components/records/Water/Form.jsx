import {
  Box,
  Input,
  Button,
  Stack,
  Divider,
  RadioButtonGroup,
} from '@chakra-ui/core';
import { forwardRef } from 'react';
import { useStore } from 'src/store';

const CustomRadio = forwardRef((props, ref) => {
  const colors = useStore((state) => state.ui.colors);

  const { isChecked, isDisabled, value, ...rest } = props;
  return (
    <Button
      ref={ref}
      variantColor={isChecked ? colors.primary : 'gray'}
      aria-checked={isChecked}
      role="radio"
      isDisabled={isDisabled}
      size={'xs'}
      {...rest}
    />
  );
});

export default ({ record = {}, setRecord }) => {
  const value = record ? (record.data ? record.data.value : '') : '';
  const setValue = (value) => {
    setRecord({
      ...record,
      data: { ...record.data, value },
    });
  };
  return (
    <Box>
      <Stack>
        <RadioButtonGroup
          defaultValue="rad2"
          onChange={(val) => setValue(val)}
          isInline
        >
          <CustomRadio value="100">100 ML</CustomRadio>
          <CustomRadio value="200">200 ML</CustomRadio>
          <CustomRadio value="250">250 ML</CustomRadio>
          <CustomRadio value="500">500 ML</CustomRadio>
        </RadioButtonGroup>
        <Divider />
        <Input
          type={'number'}
          placeholder={'Enter water consumption value'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Stack>
    </Box>
  );
};

import React from 'react';
import { Button, RadioButtonGroup } from '@chakra-ui/core';

const CustomRadio = React.forwardRef((props, ref) => {
  const { isChecked, isDisabled, value, ...rest } = props;
  return (
    <Button
      ref={ref}
      size="xs"
      variantColor={isChecked ? 'brand' : 'gray'}
      aria-checked={isChecked}
      role="radio"
      isDisabled={isDisabled}
      borderRadius={1}
      {...rest}
    />
  );
});

export default ({ options, value, onChange, ...rest }) => {
  return (
    <RadioButtonGroup defaultValue={value} onChange={onChange} isInline spacing={0}>
      {options.map((o) => (
        <CustomRadio value={o.value} {...rest}>
          {o.label}
        </CustomRadio>
      ))}
    </RadioButtonGroup>
  );
};

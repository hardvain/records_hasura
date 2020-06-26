import {
  Select,
  Editable,
  EditablePreview,
  EditableInput,
} from '@chakra-ui/core';
import { useField } from 'formik';
import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const Component = ({ name, defaultValue, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Editable
      w={'100%'}
      {...rest}
      onMouseEnter={(e) => setIsHovered(true)}
      onMouseLeave={(e) => setIsHovered(false)}
    >
      <EditablePreview
        bg={isHovered ? 'brand.50' : ''}
        px={1}
        py={2}
        w={'100%'}
      />
      <EditableInput
        borderRadius={0}
        borderWidth={1}
        py={1}
        borderColor={'brand.500'}
        className={'editable-input'}
        w={'100%'}
        shadow={'none'}
        {...rest}
      />
    </Editable>
  );
};

export default ({ name, ...rest }) => {
  const { control } = useFormContext();

  return <Controller control={control} as={Component} name={name} {...rest} />;
};

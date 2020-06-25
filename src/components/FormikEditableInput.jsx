import {
  Select,
  Editable,
  EditablePreview,
  EditableInput,
} from '@chakra-ui/core';
import { useField } from 'formik';
import React, { useState } from 'react';

export default ({ name, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false);
  let [field, meta, helpers] = useField({ name: name });
  return (
    <Editable
      value={field.value}
      onMouseEnter={(e) => setIsHovered(true)}
      onMouseLeave={(e) => setIsHovered(false)}
    >
      <EditablePreview bg={isHovered ? 'brand.50' : ''} px={1} py={2} w={'100%'}/>
      <EditableInput
        borderRadius={0}
        borderWidth={1}
        py={1}
        borderColor={'brand.500'}
        className={'editable-input'}
        w={'100%'}
        shadow={'none'}
        onChange={(e) => helpers.setValue(e.target.value)}
        {...rest}
      />
    </Editable>
  );
};

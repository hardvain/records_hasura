import {
  Input,
  Box,
  Text,
  useColorMode,
  EditablePreview,
  Button,
} from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import Editor from 'src/components/core/editor';
const Default = ({ value, onChange, updateCallback = () => {}, ...rest }) => {
  const [state, setState] = useState(`[{"children": [{ "text": "" }]}]`);
  useEffect(() => {
    if (value) {
      setState(value);
    }
  }, [value]);
  return (
    <Box w={'100%'}>
      <Editor
        value={JSON.parse(state)}
        onChange={(e) => {
          const content = JSON.stringify(e);
          setState(content);
        }}
        {...rest}
      />
      <Button
        my={2}
        size={'sm'}
        variant={'solid'}
        variantColor={'brand'}
        onClick={() => updateCallback(state)}
      >
        Save
      </Button>
    </Box>
  );
};

export { Default };

import { Box, Button } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import Editor from 'src/components/core/editor';

const Default = ({ value, onChange, updateCallback = () => {}, ...rest }) => {
  const [state, setState] = useState(``);
  useEffect(() => {
    if (value) {
      setState(value);
    }
  }, [value]);

  return (
    <Box w={'100%'}>
      <Editor
        value={state}
        onBlur={() => {
          updateCallback(state);
        }}
        onChange={(e) => {
          setState(e);
        }}
        {...rest}
      />
      <Button
        float={'right'}
        mt={2}
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

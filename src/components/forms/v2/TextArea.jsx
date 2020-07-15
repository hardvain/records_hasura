import { Box, Button, Input, Stack, useColorMode } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import Editor from 'src/components/core/editor';
import Fullscreen from 'react-full-screen';

const Default = ({ value, onChange, updateCallback = () => {}, ...rest }) => {
  const { colorMode } = useColorMode();
  const [state, setState] = useState(``);
  useEffect(() => {
    setState(value);
  }, [value]);
  const onKeyDown = (e) => {
    if (e.keyCode === 83 && e.metaKey) {
      e.preventDefault();
      e.stopPropagation();
      updateCallback(state);
    }
  };
  return (
    <Box
      w={'100%'}
      bg={colorMode === 'light' ? 'white' : '#232626'}
      onKeyDown={onKeyDown}
      py={2}
    >
      <Editor
        value={state}
        onChange={(e) => {
          setState(e);
          onChange(e);
        }}
        {...rest}
      />
    </Box>
  );
};

export { Default };

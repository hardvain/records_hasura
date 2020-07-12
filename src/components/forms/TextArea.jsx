import { Box, Button, Stack } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import Editor from 'src/components/core/editor';
import Fullscreen from 'react-full-screen';

const Default = ({ value, onChange, updateCallback = () => {}, ...rest }) => {
  const [state, setState] = useState(``);
  const [isFullScreen, setIsFullScreen] = useState(false);
  useEffect(() => {
    if (value) {
      setState(value);
    }
  }, [value]);

  return (
    <Box w={'100%'}>
      <Editor
        isFullscreen={isFullScreen}
        value={state}
        onBlur={() => {
          updateCallback(state);
        }}
        onChange={(e) => {
          setState(e);
        }}
        {...rest}
      />
    </Box>
  );
};

export { Default };

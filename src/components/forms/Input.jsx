import { Input, Box, Text, useColorMode } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';

const Default = ({
  value = '',
  onChange,
  updateCallback = () => {},
  ...rest
}) => {
  const [state, setState] = useState('Click to start typing');
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (value && value.length > 0) {
      setState(value);
    }
  }, [value]);
  return (
    <Box
      onClick={() => setIsClicked(true)}
      p={2}
      w={'100%'}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      borderRadius={3}
      bg={
        isHovering && !isClicked
          ? colorMode === 'light'
            ? '#e0e0e0'
            : '#232626'
          : ''
      }
    >
      {isClicked ? (
        <Input
          value={value}
          onBlur={() => {
            updateCallback(state);
            setIsClicked(false);
          }}
          onChange={(e) => {
            onChange(e.target.value);
            setState(e.target.value);
          }}
          {...rest}
        />
      ) : (
        <Text>{state}</Text>
      )}
    </Box>
  );
};

export { Default };

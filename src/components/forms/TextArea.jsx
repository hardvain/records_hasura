import {
  Box,
  Button,
  Input,
  Text,
  Textarea,
  useColorMode,
} from '@chakra-ui/core';
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
      borderRadius={3}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      bg={
        isHovering && !isClicked
          ? colorMode === 'light'
            ? '#e0e0e0'
            : '#232626'
          : ''
      }
    >
      {isClicked ? (
        <Textarea
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

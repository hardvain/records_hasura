import { Box, useColorMode } from '@chakra-ui/core';
import React from 'react';
export default ({
  title,
  animate = false,
  highlight = false,
  shadow = true,
  children,
  thickLeftBorder = false,
  condensed = false,
  ...rest
}) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      minWidth={300}
      borderWidth={1}
      borderRadius={0}
      shadow={shadow ? 'xs' : ''}
      h={'100%'}
      cursor={highlight ? 'pointer' : ''}
      bg={colorMode === 'light' ? 'white' : '#333'}
      {...rest}
    >
      {children}
    </Box>
  );
};

import { Box, useColorMode } from '@chakra-ui/core';
import React from 'react';
import { motion } from 'framer-motion';
const MotionBox = motion.custom(Box);
export default ({
  title,
  animate = false,
  highlight = false,
  shadow = false,
  children,
  thickLeftBorder = false,
  condensed = false,
  ...rest
}) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      minWidth={300}
      shadow={'sm'}
      borderWidth={1}
      borderLeftWidth={thickLeftBorder ? 5 : 1}
      borderLeftColor={thickLeftBorder ? 'brand.300' : ''}
      borderRadius={10}
      h={'100%'}
      cursor={highlight ? 'pointer' : ''}
      bg={colorMode === 'light' ? 'white' : '#333'}
      {...rest}
    >
      {children}
    </Box>
  );
};

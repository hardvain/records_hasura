import { Box, Heading, useColorMode } from '@chakra-ui/core';
import React, { useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <MotionBox
      onClick={() => setShowDetails(!showDetails)}
      onMouseEnter={(e) => setIsHovered(true)}
      onMouseLeave={(e) => setIsHovered(false)}
      minWidth={300}
      borderWidth={1}
      borderLeftWidth={thickLeftBorder ? 5 : 1}
      borderLeftColor={thickLeftBorder ? 'brand.300' : ''}
      borderRadius={5}
      my={4}
      h={'100%'}
      cursor={highlight ? 'pointer' : ''}
      bg={colorMode === 'light' ? 'white' : '#333'}
      {...rest}
    >
      {title && (
        <Box borderBottomWidth={1} py={4}>
          <Heading size={'sm'} px={4}>
            {title}
          </Heading>
        </Box>
      )}
      <Box h={'100%'} px={3} py={condensed ? 1 : 2}>
        {children}
      </Box>
    </MotionBox>
  );
};

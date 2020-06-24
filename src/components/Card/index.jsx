import { Box, Heading, useColorMode } from '@chakra-ui/core';
import React, { useState } from 'react';
import { useStore } from 'src/store';
import { motion } from 'framer-motion';
const MotionBox = motion.custom(Box);
export default ({
  title,
  animate = false,
  highlight = false,
  shadow = false,
  children,
  ...rest
}) => {
  const { colorMode } = useColorMode();
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <MotionBox
      borderColor={isHovered && highlight ? 'brand.300' : ''}
      onClick={() => setShowDetails(!showDetails)}
      onMouseEnter={(e) => setIsHovered(true)}
      onMouseLeave={(e) => setIsHovered(false)}
      minWidth={300}
      borderWidth={1}
      borderRadius={5}
      shadow={isHovered && shadow ? 'lg' : 'none'}
      my={4}
      h={'100%'}
      bg={
        isHovered && highlight
          ? colorMode === 'light'
            ? 'brand.50'
            : '#232626'
          : colorMode === 'light'
          ? 'white'
          : '#232626'
      }
      {...rest}
    >
      {title && (
        <Box p={3} borderBottomWidth={2}>
          <Heading size={'sm'}>{title}</Heading>
        </Box>
      )}
      <Box h={'100%'} p={3}>
        {children}
      </Box>
    </MotionBox>
  );
};

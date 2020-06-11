import { useState } from 'react';
import { Box } from '@chakra-ui/core';

export default ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      mr={2}
      borderRadius={10}
      bg={isHovered ? '#333' : ''}
      onMouseEnter={() => setIsHovered(true)}
      px={10} py={1}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Box>
  );
};

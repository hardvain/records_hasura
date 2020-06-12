import { useState } from 'react';
import { Box } from '@chakra-ui/core';
import { useStore } from 'src/store';

export default ({ children, isActive }) => {
  const { colors } = useStore((state) => ({
    colors: state.ui.colors,
  }));
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      mr={2}
      borderRadius={2}
      color={isActive ? `${colors.primary}.200` : ''}
      bg={isHovered ? '#333' : ''}
      onMouseEnter={() => setIsHovered(true)}
      px={10}
      pt={1}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Box>
  );
};

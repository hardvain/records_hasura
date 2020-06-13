import { Flex, Box, Heading, useColorMode } from '@chakra-ui/core';
import { useState } from 'react';
import { useStore } from 'src/store';
export default ({ title, children, ...rest }) => {
  const { colorMode } = useColorMode();
  const { colors } = useStore((state) => ({
    colors: state.ui.colors,
  }));
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Box
      onClick={() => setShowDetails(!showDetails)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      minWidth={300}
      borderWidth={1}
      borderRadius={5}
      my={2}
      borderColor={colors.primary}
      h={'100%'}
      cursor={isHovered ? 'pointer' : ''}
      bg={colorMode === 'light' ? 'white' : '#232626'}
      {...rest}
    >
      {title && (
        <Box p={3} borderBottomWidth={2}>
          <Heading size={'sm'}>{title}</Heading>
        </Box>
      )}
      <Box h={'100%'} py={2}>
        {children}
      </Box>
    </Box>
  );
};

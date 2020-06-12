import { Flex } from '@chakra-ui/core';
import { useState } from 'react';
import { useStore } from 'src/store';
export default ({ children, ...rest }) => {
  const { colors } = useStore((state) => ({
    colors: state.ui.colors,
  }));
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Flex
      onClick={() => setShowDetails(!showDetails)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      minWidth={300}
      borderWidth={1}
      borderRadius={5}
      borderColor={colors.primary}
      h={'100%'}
      cursor={isHovered ? 'pointer' : ''}
      bg={'#232626'}
      p={5}
      {...rest}
    >
      {children}
    </Flex>
  );
};

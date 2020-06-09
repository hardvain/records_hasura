import { Flex } from '@chakra-ui/core';
import isDarkMode from 'hooks/isDarkMode';
import { useState } from 'react';
export default ({ children, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Flex
      onClick={() => setShowDetails(!showDetails)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      minWidth={300}
      borderWidth={1}
      borderRadius={3}
      h={'100%'}
      cursor={isHovered ? 'pointer' : ''}
      bg={'#232626' }
      p={5}
      {...rest}
    >
      {children}
    </Flex>
  );
};

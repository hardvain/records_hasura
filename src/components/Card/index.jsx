import { Box, Heading, useColorMode } from '@chakra-ui/core';
import { useState } from 'react';
import { useStore } from 'src/store';
import { motion } from 'framer-motion';
const MotionBox = motion.custom(Box);
export default ({ title, animate = false, children, ...rest }) => {
  const { colorMode } = useColorMode();
  const { colors } = useStore((state) => ({
    colors: state.ui.colors,
  }));
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <MotionBox
      initial={animate ? { opacity: 0 } : {}}
      animate={animate ? { opacity: 1 } : {}}
      whileTap={animate ? { scale: 0.995 } : {}}
      whileHover={animate ? { scale: 1.005 } : {}}
      onClick={() => setShowDetails(!showDetails)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      minWidth={300}
      borderWidth={1}
      borderRadius={5}
      shadow={isHovered ? 'lg' : 'none'}
      my={4}
      h={'100%'}
      bg={colorMode === 'light' ? 'white' : '#232626'}
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

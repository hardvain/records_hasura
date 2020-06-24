import { motion } from 'framer-motion';
import { createElement } from 'react';
import { Box, useToast } from '@chakra-ui/core';
const MotionBox = motion.custom(Box);

export default ({ data, preview, onItemSelect }) => {
  const toast = useToast();

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      borderBottomWidth={1}
    >
      {data.map((record) => (
        <div key={record.id}>{createElement(preview, { record })}</div>
      ))}
    </MotionBox>
  );
};

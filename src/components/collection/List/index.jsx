import { motion } from 'framer-motion';
import { createElement } from 'react';
import { Box, Button, Input, Stack } from '@chakra-ui/core';
const MotionBox = motion.custom(Box);
import Card from 'src/components/Card';
export default ({ data, preview }) => {
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

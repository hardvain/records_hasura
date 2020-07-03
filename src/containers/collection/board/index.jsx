import { motion } from 'framer-motion';
import { createElement } from 'react';
import { Box, Button, Input, Stack, Text } from '@chakra-ui/core';
const MotionBox = motion.custom(Box);
import Card from 'src/components/core/card';
import { groupBy } from 'src/utils';

const Section = ({ data = [], preview, ...rest }) => {
  return (
    <Box p={0}>
      {data.map((record, index) => (
        <Box my={4} key={record.id}>
          {createElement(preview, { record, index, ...rest })}
        </Box>
      ))}
    </Box>
  );
};
export default ({
  data,
  preview,
  group_by_field,
  group_by_options,
  ...rest
}) => {
  const groupedData = groupBy(data, group_by_field);
  return (
    <Stack isInline spacing={10} justifyContent={'space-evenly'} p={2}>
      {group_by_options.map((key) => {
        return (
          <Stack spacing={5} mt={3} key={key} mb={8} bg={'#fafbfc'}>
            <Text fontSize={14} textTransform={'uppercase'} color={'#77808F'}>
              {key}
            </Text>
            <Section data={groupedData[key]} preview={preview} {...rest} />
          </Stack>
        );
      })}
    </Stack>
  );
};

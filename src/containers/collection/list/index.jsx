import { motion } from 'framer-motion';
import { createElement } from 'react';
import { Box, Button, Input, Stack, Text } from '@chakra-ui/core';
const MotionBox = motion.custom(Box);
import Card from 'src/components/core/card';
import { groupBy } from 'src/utils';

const Section = ({ data, preview, ...rest }) => {
  return (
    <MotionBox>
      {data.map((record, index) => (
        <div key={record.id}>
          {createElement(preview, { record, index, ...rest })}
        </div>
      ))}
    </MotionBox>
  );
};
export default ({ data, preview, group_by_field, ...rest }) => {
  if (group_by_field) {
    const groupedData = groupBy(data, group_by_field);
    return (
      <Box>
        {Object.keys(groupedData).map((key) => {
          return (
            <Stack spacing={5} mt={3} key={key}>
              <Text fontSize={14} textTransform={'uppercase'} color={'#77808F'}>
                {key}
              </Text>
              <Card p={3}>
                <Section data={groupedData[key]} preview={preview} {...rest}/>
              </Card>
            </Stack>
          );
        })}
      </Box>
    );
  } else {
    return <Section data={data} preview={preview} {...rest} />;
  }
};

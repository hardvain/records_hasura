import { createElement } from 'react';
import { Box, useToast } from '@chakra-ui/core';
export default ({ data, preview, onItemSelect }) => {
  const toast = useToast();

  return (
    <Box>
      {data.map((record) => (
        <div key={record.id}>{createElement(preview, { record })}</div>
      ))}
    </Box>
  );
};

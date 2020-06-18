import { createElement } from 'react';
import { Box } from '@chakra-ui/core';
export default ({ data, preview, onItemSelect }) => {
  return (
    <Box>
      {data.map((record) => (
        <div onClick={() => onItemSelect(record)} key={record.id}>
          {createElement(preview, { record })}
        </div>
      ))}
    </Box>
  );
};

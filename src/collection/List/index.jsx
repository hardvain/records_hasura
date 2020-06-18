import { createElement } from 'react';
import { Box } from '@chakra-ui/core';
export default ({ data, preview, onItemSelect }) => {
  return (
    <Box>
      {data.map((record) => (
        <div onClick={() => onItemSelect(record)}>
          {createElement(preview, { key: record.id, record })}
        </div>
      ))}
    </Box>
  );
};

import { createElement } from 'react';
import { Box, Stack } from '@chakra-ui/core';
export default ({ data, preview, onItemSelect }) => {
  return (
    <Box>
      <table>
        <tbody>
          {data.map((record) => (
            <Stack borderWidth={1} isInline key={record.id} onClick={() => onItemSelect(record)}>
              {createElement(preview, { record })}
            </Stack>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

import { createElement } from 'react';
import { Box, Stack, useToast } from '@chakra-ui/core';
export default ({ data, preview, onItemSelect }) => {
  const toast = useToast();

  return (
    <Box>
      <table>
        <tbody>
          {data.map((record) => (
            <Stack borderWidth={1} isInline key={record.id}>
              {createElement(preview, { record })}
            </Stack>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

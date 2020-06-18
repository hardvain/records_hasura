import { createElement } from 'react';
import { Box } from '@chakra-ui/core';
export default ({ data, preview, onItemSelect }) => {
  return (
    <Box>
      <table>
        <tbody>
          {data.map((record) => (
            <tr key={record.id} onClick={() => onItemSelect(record)}>
              {createElement(preview, { record })}
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

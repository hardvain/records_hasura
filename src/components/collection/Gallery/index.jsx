import { createElement } from 'react';
import { SimpleGrid, useToast } from '@chakra-ui/core';
export default ({ data, preview, onItemSelect }) => {
  return (
    <SimpleGrid columns={3} spacing={10}>
      {data.map((record) => (
        <div key={record.id}>{createElement(preview, { record })}</div>
      ))}
    </SimpleGrid>
  );
};

import { Box, Input, Select, Stack } from '@chakra-ui/core';
import { useState } from 'react';
import FieldFilter from './FieldFilter';
export default ({ schema = { fields: [] }, children }) => {
  const sanitizedFields = schema?.fields
    ? schema.fields
        .filter((f) => f?.type?.name || f?.type?.ofType?.name)
        .map((field) => {
          const type = field.type.name || field.type.ofType.name;
          return { name: field.name, type };
        })
        .filter((f) => f.type && !f.name.startsWith('ref_'))
    : [];
  const [filters, setFilters] = useState({});
  return (
    <Box>
      <Stack>
        <Box>
          <FieldFilter fields={sanitizedFields} />
        </Box>
        <Box>{children(filters)}</Box>
      </Stack>
    </Box>
  );
};

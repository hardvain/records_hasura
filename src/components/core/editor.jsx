import React, { useEffect, useMemo, useState } from 'react';
// Import the Slate editor factory.
import { createEditor } from 'slate';
import { Box } from '@chakra-ui/core';
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';

export default ({ value, onChange, onBlur }) => {
  // Create a Slate editor object that won't change across renders.
  const editor = useMemo(() => withReact(createEditor()), []);
  return (
    <Box borderWidth={1} borderRadius={2} w={'100%'} p={2}>
      <Slate
        editor={editor}
        value={value}
        onChange={onChange}
      >
        <Editable onBlur={onBlur} />
      </Slate>
    </Box>
  );
};

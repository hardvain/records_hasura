import React, { useEffect, useMemo, useRef, useState } from 'react';
// Import the Slate editor factory.
import { createEditor } from 'slate';
import { Box } from '@chakra-ui/core';
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

export default ({ value, onChange, onBlur }) => {
  // Create a Slate editor object that won't change across renders.
  const options = {
    selectOnLineNumbers: true,
    fontSize: 15,
    minimap: {
      enabled: false,
    },
  };
  return (
    <Box borderWidth={1} borderRadius={2} w={'100%'} p={2}>
      <MonacoEditor
        height="300"
        language="markdown"
        theme="vs-light"
        value={value}
        options={options}
        onChange={(value) => onChange(value)}
        onBlur={console.log}
        editorDidMount={(editor) => {
          window.MonacoEnvironment.getWorkerUrl = (moduleId, label) => {
            if (label === 'json') return '_next/static/json.worker.js';
            if (label === 'css') return '_next/static/css.worker.js';
            if (label === 'html') return '_next/static/html.worker.js';
            if (label === 'typescript' || label === 'javascript')
              return '_next/static/ts.worker.js';
            return '_next/static/editor.worker.js';
          };
        }}
      />
    </Box>
  );
};

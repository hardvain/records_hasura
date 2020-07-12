import React, { useEffect, useMemo, useRef, useState } from 'react';
// Import the Slate editor factory.
import { createEditor } from 'slate';
import { Box, useColorMode } from '@chakra-ui/core';
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

export default ({ value, onChange, isFullscreen,...rest }) => {
  const { colorMode } = useColorMode();

  // Create a Slate editor object that won't change across renders.
  const options = {
    fontLigatures: true,
    lineNumbers:"on",
    fontSize: 13,
    minimap: {
      enabled: false,
    },
  };
  return (
    <MonacoEditor
      height={isFullscreen ? '100%' : '300'}
      language="markdown"
      theme={colorMode === 'light' ? 'vs-light' : 'vs-dark'}
      value={value}
      options={options}
      onChange={(value) => onChange(value)}
      {...rest}
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
  );
};

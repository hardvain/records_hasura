import {
  Box,
  Button,
  Input,
  Text,
  Textarea,
  useColorMode,
} from '@chakra-ui/core';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default ({
  value = '',
  onChange,
  updateCallback = () => {},
  ...rest
}) => {
  const [state, setState] = useState('Click to start typing');

  useEffect(() => {
    if (value && value.length > 0) {
      setState(value);
    }
  }, [value]);
  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onInit={(editor) => {
        // You can store the "editor" and use when it is needed.
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
        setState(data);
      }}
      onBlur={(event, editor) => {
        updateCallback(state);
      }}
    />
  );
};

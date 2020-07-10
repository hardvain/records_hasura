import React, { useEffect, useState } from 'react';
import Editor from 'src/components/core/editor';

const Default = ({ value, onChange, updateCallback = () => {}, ...rest }) => {
  const [state, setState] = useState(``);
  useEffect(() => {
    if (value) {
      setState(value);
    }
  }, [value]);

  return (
    <Editor
      value={state}
      onBlur={() => {
        updateCallback(state);
      }}
      onChange={(e) => {
        setState(e);
      }}
      {...rest}
    />
  );
};

export { Default };

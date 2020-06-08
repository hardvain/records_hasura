import { Box } from '@chakra-ui/core';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default ({ value, onChange }) => {
  return (
    <Box>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
    </Box>
  );
};

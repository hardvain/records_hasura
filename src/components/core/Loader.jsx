import { Button, Box } from '@chakra-ui/core';
import { useState } from 'react';

export default ({ title, children }) => {
  const [show, setShow] = useState(false);
  return (
    <Box>
      <Button onClick={() => setShow(!show)} size={'sm'} mb={3}>
        {show ? `Hide ${title}` : `Show ${title}`}
      </Button>
      {show && children}
    </Box>
  );
};

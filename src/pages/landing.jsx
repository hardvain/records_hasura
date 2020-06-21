import Router from 'next/router';

import { Button, Box } from '@chakra-ui/core';

export default () => {
  return (
    <Box>
      <Button
        variant="solid"
        variantColor={"brand"}
        onClick={() => {
          Router.push('/api/login');
        }}
      >
        Log In
      </Button>
    </Box>
  );
};

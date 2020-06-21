import { Box, Skeleton, Flex, useColorMode, Spinner } from '@chakra-ui/core';

export default () => {
  return (
    <Flex
      w={'100%'}
      h={'100vh'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="brand.500"
        size="xl"
      />
    </Flex>
  );
};

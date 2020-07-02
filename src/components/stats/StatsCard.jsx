import { Box, Divider, Skeleton, Stack } from '@chakra-ui/core';

export default ({ icon, children, actions, loading }) => {
  return (
    <Box width={200}>
      {loading ? (
        <Box p={3}>
          <Skeleton height={10} />
        </Box>
      ) : (
        <Stack p={2}>
          <Stack isInline>
            <Box>{icon}</Box>
            <Box>{children}</Box>
          </Stack>
          <Divider />
          {actions}
        </Stack>
      )}
    </Box>
  );
};

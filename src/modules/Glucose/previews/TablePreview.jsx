import { Divider, Box } from '@chakra-ui/core';

export default ({ record }) => {
  return (
    <>
      <Box p={2}>{record.value}</Box>
      <Divider orientation={'vertical'} />
      <Box p={2}>{record.description}</Box>
      <Box p={2}>{record.timestamp}</Box>
    </>
  );
};

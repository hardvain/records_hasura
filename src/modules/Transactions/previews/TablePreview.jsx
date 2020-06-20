import { Divider, Box } from '@chakra-ui/core';

export default ({ record }) => {
  return (
    <>
      <Box p={2}>{record.name}</Box>
      <Box p={2}>{record.value}</Box>
      <Box p={2}>{record.team}</Box>
      <Box p={2}>{record.type}</Box>
      <Box p={2}>{record.timestamp}</Box>
    </>
  );
};

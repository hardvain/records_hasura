import { Divider, Box } from '@chakra-ui/core';

export default ({ record }) => {
  return (
    <>
      <Box p={2}>{record.name}</Box>
      <Divider orientation={'vertical'} />
      <Box p={2}>{record.description}</Box>
      <Box p={2}>{record.due_date}</Box>
      <Box p={2}>{record.priority}</Box>
      <Box p={2}>{record.team}</Box>
      <Box p={2}>{record.status}</Box>
    </>
  );
};

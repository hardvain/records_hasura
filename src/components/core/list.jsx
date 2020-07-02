import { Stack, Box } from '@chakra-ui/core';
const Card = ({ children, ...rest }) => {
  return (
    <Box borderWidth={1} {...rest} px={2} py={1}>
      {children}
    </Box>
  );
};
const List = ({ header, footer, renderItem, data }) => {
  return (
    <Stack>
      <Card>{header}</Card>
      {data.map(renderItem)}
      <Card>{footer}</Card>
    </Stack>
  );
};

import Teams from 'src/modules/Teams';
import { Box, Stack } from '@chakra-ui/core';
import Card from 'src/components/core/card';
export default () => {
  return (
    <Stack>
      <Card p={0} m={5}>
        <Teams.List />
      </Card>
    </Stack>
  );
};

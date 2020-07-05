import Notes from 'src/modules/Notes';
import {
  Box,
  Stack,
  InputGroup,
  InputRightElement,
  Icon,
  Input,
} from '@chakra-ui/core';

export default () => {
  return (
    <Stack w={'100%'} p={10}>
      <InputGroup mb={4}>
        <Input rounded="0" placeholder="Search..." />
        <InputRightElement children={<Icon name="search" />} />
      </InputGroup>
      <Notes.List showBanners showFilterBar />
    </Stack>
  );
};

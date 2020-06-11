import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
} from '@chakra-ui/core';
const Day = ({ date }) => {
  return (
    <Box w={'100%'} h={200} borderWidth={1}>
      <Stack>
        <Box textAlign={'center'} my={1}>
          {date}
        </Box>
      </Stack>
    </Box>
  );
};

export default () => {
  return (
    <Box>
      <Flex
        height={50}
        my={5}
        mx={5}
        px={5}
        borderWidth={1}
        alignItems={'center'}
      >
        <Box flexGrow={1}></Box>
        <Menu ml={'auto'}>
          <MenuButton size={'sm'} as={Button} rightIcon="chevron-down">
            Month
          </MenuButton>
          <MenuList>
            <MenuItem>Month</MenuItem>
            <MenuItem>Week</MenuItem>
            <MenuItem>Day</MenuItem>
            <MenuItem>Schedule</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <SimpleGrid columns={7} spacing={0} my={5} mx={5}>
        {[...Array(30).keys()].map((i) => (
          <Day key={i} date={i + 1} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

import { useState } from 'react';
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
import moment from 'moment';
const Day = ({ date }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Box
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      w={'100%'}
      h={200}
      borderWidth={1}
      cursor={'pointer'}
      bg={isHovering ? '#232626' : ''}
    >
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
      <SimpleGrid columns={7} spacing={0} my={5} mx={5}>
        {[...Array(30).keys()].map((i) => (
          <Day key={i} date={i + 1} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

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
  Text,
  Grid,
} from '@chakra-ui/core';
import moment from 'moment';
const Hour = ({ date }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Box
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      w={'100%'}
      h={100}
      borderWidth={1}
      cursor={'pointer'}
      bg={isHovering ? '#232626' : ''}
    ></Box>
  );
};
const Heading = ({ day }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Box
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      w={'100%'}
      h={100}
      textAlign={'center'}
      cursor={'pointer'}
      bg={isHovering ? '#232626' : ''}
    >
      <Text>{day}</Text>
    </Box>
  );
};
const Label = ({ hour }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Flex
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      w={20}
      h={100}
      justifyContent={'center'}
      alignItems={'center'}
      cursor={'pointer'}
      bg={isHovering ? '#232626' : ''}
    >
      <Text>{hour}</Text>
    </Flex>
  );
};

const generateSkeleton = () => {
  let data = [];
  for (let i = 0; i < 24; i++) {
    data.push({ type: 'label', value: `${i}:00` });
    data.push({ type: 'hour' });
  }
  return data;
};

export default () => {
  const data = generateSkeleton();
  return (
    <Box p={5}>
      <Grid templateColumns="1fr 20fr" gap={0}>
        {data.map((d, index) => {
          if (d.type === 'label') {
            return <Label key={index} hour={d.value} />;
          } else if (d.type === 'hour') {
            return <Hour key={index} />;
          } else {
            return <Label key={index} />;
          }
        })}
      </Grid>
    </Box>
  );
};

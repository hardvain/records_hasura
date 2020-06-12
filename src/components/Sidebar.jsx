import NextLink from 'next/link';
import { useState } from 'react';
import { Box, Divider, Flex, IconButton, Stack, Text } from '@chakra-ui/core';
import { FaTasks, FaNutritionix,FaRegMoneyBillAlt } from 'react-icons/fa';
import { MdApps } from 'react-icons/md';
import Diabetes from 'src/assets/Diabetes';
import Sugar from 'src/assets/Sugar';
import Water from 'src/assets/Water';
import { IoMdWater } from 'react-icons/io';
const MenuItem = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Box
      cursor={'pointer'}
      borderRadius={4}
      p={2}
      mb={2}
      bg={isHovering ? '#232626' : ''}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
    </Box>
  );
};

export default () => {
  return (
    <Box w={300} pl={3} pt={3}>
      <MenuItem>
        <NextLink href="/" as={`/`}>
          <Stack isInline>
            <Box as={MdApps} fontSize={25} alignSelf={'center'} color={'cyan.500'} mx={1} />
            <Text ml={1}>All</Text>
          </Stack>
        </NextLink>
      </MenuItem>
      <MenuItem>
        <NextLink href="/tasks" as={`/tasks`}>
          <Stack isInline>
            <Box as={FaTasks} alignSelf={'center'} color={'green.500'} mx={2} />
            <Text ml={2}>Tasks</Text>
          </Stack>
        </NextLink>
      </MenuItem>
      <MenuItem>
        <NextLink href="/glucose" as={`/glucose`}>
        <Stack isInline>
          <Box alignSelf={'center'} mr={4}>
            <Sugar width={30} height={30} />
          </Box>
          <Text>Glucose</Text>
        </Stack>
        </NextLink>
      </MenuItem>
      <MenuItem>
        <NextLink href="/water" as={`/water`}>
        <Stack isInline alignItems={"center"}>
          <Box alignSelf={'center'} mr={4}>
            <Water width={30} height={30} />
          </Box>
          <Text ml={2}>Water</Text>
        </Stack>
        </NextLink>
      </MenuItem>
      <MenuItem>
        <NextLink href="/nutrition" as={`/nutrition`}>
        <Stack isInline>
          <Box
            as={FaNutritionix}
            alignSelf={'center'}
            color={'teal.500'}
            mx={2}
          />
          <Text ml={2}>Nutrition</Text>
        </Stack>
        </NextLink>
      </MenuItem>
      <MenuItem>
        <NextLink href="/transactions" as={`/transactions`}>
          <Stack isInline>
            <Box
              as={FaRegMoneyBillAlt}
              alignSelf={'center'}
              color={'teal.500'}
              mx={2}
            />
            <Text ml={2}>Transactions</Text>
          </Stack>
        </NextLink>
      </MenuItem>
    </Box>
  );
};

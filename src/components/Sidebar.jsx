import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Box, Divider, Flex, IconButton, Stack, Text } from '@chakra-ui/core';
import { FaTasks, FaNutritionix, FaRegMoneyBillAlt } from 'react-icons/fa';
import { MdApps } from 'react-icons/md';
import Sugar from 'src/assets/Sugar';
import Money from 'src/assets/Money';
import Water from 'src/assets/Water';
import { IoMdWater } from 'react-icons/io';
const MenuItem = ({ children, isActive }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Box
      cursor={'pointer'}
      borderRadius={4}
      p={2}
      mb={2}
      bg={isActive || isHovering ? '#232626' : ''}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
    </Box>
  );
};

export default () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <Box
      w={300}
      pl={3}
      pt={3}
      position={'fixed'}
      zIndex={1000}
      height={'100%'}
      left={0}
      overflowX={'hidden'}
    >
      <MenuItem isActive={pathname === '/'}>
        <NextLink href="/" as={`/`}>
          <Stack isInline>
            <Box
              as={MdApps}
              fontSize={30}
              alignSelf={'center'}
              color={'cyan.500'}
              mx={1}
            />
            <Text ml={2}>All</Text>
          </Stack>
        </NextLink>
      </MenuItem>
      <MenuItem isActive={pathname === '/records/tasks'}>
        <NextLink href="/records/tasks" as={`/records/tasks`}>
          <Stack isInline>
            <Box
              as={FaTasks}
              fontSize={'2xl'}
              alignSelf={'center'}
              color={'green.500'}
              mx={2}
            />
            <Text ml={2}>Tasks</Text>
          </Stack>
        </NextLink>
      </MenuItem>
      <MenuItem isActive={pathname === '/records/glucose'}>
        <NextLink href="/records/glucose" as={`/records/glucose`}>
          <Stack isInline>
            <Box alignSelf={'center'} mr={5}>
              <Sugar width={30} height={30} />
            </Box>
            <Text ml={2}>Glucose</Text>
          </Stack>
        </NextLink>
      </MenuItem>
      <MenuItem isActive={pathname === '/records/water'}>
        <NextLink href="/records/water" as={`/records/water`}>
          <Stack isInline alignItems={'center'}>
            <Box alignSelf={'center'} mr={4}>
              <Water width={30} height={30} />
            </Box>
            <Text ml={2}>Water</Text>
          </Stack>
        </NextLink>
      </MenuItem>
      <MenuItem isActive={pathname === '/records/nutrition'}>
        <NextLink href="/records/nutrition" as={`/records/nutrition`}>
          <Stack isInline>
            <Box
              as={FaNutritionix}
              fontSize={30}
              alignSelf={'center'}
              color={'teal.500'}
              mr={2}
            />
            <Text ml={2}>Nutrition</Text>
          </Stack>
        </NextLink>
      </MenuItem>
      <MenuItem isActive={pathname === '/records/transactions'}>
        <NextLink href="/records/transactions" as={`/records/transactions`}>
          <Stack isInline>
            <Box alignSelf={'center'} mr={4}>
              <Money width={30} height={30} />
            </Box>
            <Text ml={2}>Transactions</Text>
          </Stack>
        </NextLink>
      </MenuItem>
    </Box>
  );
};

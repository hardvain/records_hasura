import {
  Flex,
  IconButton,
  Stack,
  Heading,
  Text,
  Icon,
  InputGroup,
  InputLeftElement,
  Input,
  Box,
} from '@chakra-ui/core';
import { FaHome, FaCalendar, FaChartBar } from 'react-icons/fa';
import { IoIosApps } from 'react-icons/io';
import NextLink from 'next/link';
import MenuButton from 'src/components/MenuButton';
export default () => {
  return (
    <Flex
      bg={'#232626'}
      direction="row"
      borderBottomWidth={1}
      borderBottom="gray.200"
      alignItems={'center'}
      py={'2px'}
      px={2}
      position={'fixed'}
      width='100%'
      top={0}
      zIndex={1000}
    >
      <NextLink href="/" as={`/`}>
        <Stack isInline alignItems={'center'} mr={2} cursor={'pointer'}>
          <Box as={IoIosApps} fontSize={'4xl'} mr={3} />
          <Text fontSize={'lg'}>Records</Text>
        </Stack>
      </NextLink>
      <MenuButton>
        <NextLink href="/calendar" as={`/calendar`}>
          <IconButton size={'lg'} variant="default" icon={FaCalendar} />
        </NextLink>
      </MenuButton>
      <MenuButton>
        <NextLink href="/reports" as={`/reports`}>
          <IconButton size={'lg'} variant="default" icon={FaChartBar} />
        </NextLink>
      </MenuButton>
      <Box flexGrow={1}></Box>
      <InputGroup w={300} mr={2}>
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Input  type="phone" placeholder="Search Records" />
      </InputGroup>
    </Flex>
  );
};

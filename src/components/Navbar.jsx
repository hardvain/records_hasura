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
import { useRouter } from 'next/router';
import { FaHome, FaCalendar, FaChartBar, FaFolder } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { IoIosApps } from 'react-icons/io';
import NextLink from 'next/link';
import MenuButton from 'src/components/MenuButton';
import { useStore } from 'src/store';
export default () => {
  const toggleSidebar = useStore(state => state.toggleSidebar)
  const router = useRouter();
  const pathname = router.pathname;
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
      width="100%"
      top={0}
      zIndex={1000}
    >
      <IconButton size={'lg'} variant="default" icon={FiMenu} mr={2} onClick={toggleSidebar}/>
      <Stack isInline alignItems={'center'} mr={2} cursor={'pointer'}>
        <Box as={IoIosApps} fontSize={'4xl'} mr={3} />
        <Text fontSize={'lg'}>Records</Text>
      </Stack>
      <MenuButton isActive={pathname.includes('/records')}>
        <NextLink href="/" as={`/`}>
          <IconButton size={'lg'} variant="default" icon={FaHome} />
        </NextLink>
      </MenuButton>
      <MenuButton isActive={pathname === '/calendar'}>
        <NextLink href="/calendar" as={`/calendar`}>
          <IconButton size={'lg'} variant="default" icon={FaCalendar} />
        </NextLink>
      </MenuButton>
      <MenuButton isActive={pathname === '/reports'}>
        <NextLink href="/reports" as={`/reports`}>
          <IconButton size={'lg'} variant="default" icon={FaChartBar} />
        </NextLink>
      </MenuButton>
      <MenuButton isActive={pathname === '/docs'}>
        <NextLink href="/docs" as={`/docs`}>
          <IconButton size={'lg'} variant="default" icon={FaFolder} />
        </NextLink>
      </MenuButton>
      <Box flexGrow={1}></Box>
      <InputGroup w={300} mr={2}>
        <InputLeftElement children={<Icon name="search" color="gray.300" />} />
        <Input type="phone" placeholder="Search Records" />
      </InputGroup>
    </Flex>
  );
};

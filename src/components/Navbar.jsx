import { Flex, IconButton, useColorMode } from '@chakra-ui/core';
import { FaHome, FaCalendar, FaChartBar } from 'react-icons/fa';
import NextLink from 'next/link';
import MenuButton from 'components/MenuButton';
export default () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      bg={'#232626'}
      direction="row"
      borderBottomWidth={1}
      borderBottom="gray.200"
      alignItems={'center'}
      py={"2px"}
      px={2}
    >
      <MenuButton>
        <NextLink href="/" as={`/`}>
          <IconButton size={'lg'} variant="default" icon={FaHome} />
        </NextLink>
      </MenuButton>
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
    </Flex>
  );
};

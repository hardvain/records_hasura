import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon, IconButton,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import Link from 'next/link';
import React from 'react';
import { MdFullscreen } from 'react-icons/md';
export default ({ show, setShow, title, children, href, as }) => {
  const { colorMode } = useColorMode();

  return (
    <Drawer
      bg={colorMode === 'light' ? 'white' : '#333'}
      size={'xl'}
      isOpen={show}
      placement="right"
      onClose={() => setShow(false)}
      finalFocusRef={show}
    >
      <DrawerOverlay />
      <DrawerContent
        overflowY={'scroll'}
        bg={colorMode === 'light' ? 'white' : '#333'}
      >
        <DrawerHeader>
          <Stack isInline>
            <Text flexGrow={1}>{title}</Text>
            <Link href={href} as={as}><IconButton onClick={e => e.stopPropagation()} variant={"ghost"} icon={MdFullscreen} /></Link>
          </Stack>
        </DrawerHeader>

        <DrawerBody>{show && children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

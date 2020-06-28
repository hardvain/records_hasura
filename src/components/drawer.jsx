import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useColorMode,
} from '@chakra-ui/core';
import React from 'react';

export default ({ show, setShow, title, children }) => {
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
        <DrawerCloseButton />
        <DrawerHeader>{title}</DrawerHeader>

        <DrawerBody>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

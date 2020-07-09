import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Box,
  useColorMode,
  Divider,
  Stack,
  Text,
  IconButton,
  DrawerHeader,
} from '@chakra-ui/core';
import Link from 'next/link';
import React from 'react';
import { MdFullscreen } from 'react-icons/md';

export default ({ show, onClose, title, children, href, as }) => {
  const { colorMode } = useColorMode();

  return (
    <Modal
      borderRadius={5}
      isOpen={show}
      size={'6xl'}
      shadow={'lg'}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent
        h={'100%'}

        borderRadius={5}
        shadow={'lg'}
        bg={colorMode === 'light' ? 'white' : '#333'}
      >
        <ModalHeader
          borderRadius={10}
          bg={colorMode === 'light' ? 'white' : '#333'}
        >
          <Stack isInline>
            <Text flexGrow={1}>{title}</Text>
            <Box>
              <Link href={href} as={as}>
                <IconButton
                  onClick={(e) => e.stopPropagation()}
                  variant={'ghost'}
                  icon={MdFullscreen}
                />
              </Link>
            </Box>
          </Stack>
        </ModalHeader>
        <Box bg={colorMode === 'light' ? 'white' : '#333'}>
          <Divider />
        </Box>
        <ModalBody
          borderRadius={10}
          shadow={'md'}
          bg={colorMode === 'light' ? 'white' : '#333'}
        >
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

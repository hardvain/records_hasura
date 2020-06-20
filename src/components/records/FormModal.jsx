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
  useToast,
} from '@chakra-ui/core';
import { useState } from 'react';
import { useStore } from 'src/store';
import Tasks from 'src/modules/Tasks';
import Glucose from 'src/modules/Glucose';
import Water from 'src/modules/Water';
import Transactions from 'src/modules/Transactions';
import Task from 'src/assets/Task';
import Sugar from 'src/assets/Sugar';
import WaterIcon from 'src/assets/Water';
import Money from 'src/assets/Money';
export default () => {
  const toast = useToast();
  const { colorMode } = useColorMode();
  const [recordType, setRecordType] = useState('task');
  const { showFormPopup, toggleFormPopup } = useStore((state) => ({
    date: state.ui.date,
    showFormPopup: state.ui.showFormPopup,
    toggleFormPopup: state.toggleFormPopup,
  }));
  const onSubmit = () => {
    toggleFormPopup();
    toast({
      title: 'Record added successfully',
      duration: 2000,
      status: 'success',
      isClosable: true,
      position:'top',
      variant:'solid'
    });
  };
  let Form;
  if (recordType === 'task') {
    Form = Tasks.Form;
  } else if (recordType === 'water') {
    Form = Water.Form;
  } else if (recordType === 'transaction') {
    Form = Transactions.Form;
  } else if (recordType === 'glucose') {
    Form = Glucose.Form;
  } else {
    Form = Tasks.Form;
  }
  return (
    <Modal
      borderRadius={10}
      isOpen={showFormPopup}
      onClose={toggleFormPopup}
      size={'2xl'}
      shadow={'lg'}
    >
      <ModalOverlay />
      <ModalContent
        borderRadius={10}
        shadow={'lg'}
        bg={colorMode === 'light' ? 'grey.100' : '#232626'}
      >
        <ModalHeader
          borderRadius={10}
          bg={colorMode === 'light' ? 'grey.100' : '#232626'}
        >
          Add new record
        </ModalHeader>
        <Box bg={colorMode === 'light' ? 'grey.100' : '#232626'}>
          <Divider />
        </Box>
        <ModalCloseButton />
        <ModalBody
          borderRadius={10}
          shadow={'md'}
          bg={colorMode === 'light' ? 'grey.100' : '#232626'}
        >
          <Stack isInline spacing={10}>
            <Box
              borderColor={recordType === 'task' ? 'brand.500' : ''}
              bg={recordType === 'task' ? 'brand.100' : 'none'}
              onClick={() => setRecordType('task')}
              cursor={'pointer'}
              mr={2}
              borderRadius={35}
              borderWidth={recordType === 'task' ? 2 : 1}
              p={5}
            >
              <Task width={30} height={30} />
            </Box>
            <Box
              borderColor={recordType === 'transaction' ? 'brand.500' : ''}
              bg={recordType === 'transaction' ? 'brand.100' : 'none'}
              onClick={() => setRecordType('transaction')}
              cursor={'pointer'}
              mr={2}
              borderRadius={35}
              borderWidth={1}
              p={5}
            >
              <Money width={30} height={30} />
            </Box>
            <Box
              borderColor={recordType === 'glucose' ? 'brand.500' : ''}
              bg={recordType === 'glucose' ? 'brand.100' : 'none'}
              onClick={() => setRecordType('glucose')}
              cursor={'pointer'}
              mr={2}
              borderRadius={35}
              borderWidth={1}
              p={5}
            >
              <Sugar width={30} height={30} />
            </Box>
            <Box
              borderColor={recordType === 'water' ? 'brand.500' : ''}
              bg={recordType === 'water' ? 'brand.100' : 'none'}
              onClick={() => setRecordType('water')}
              cursor={'pointer'}
              mr={2}
              borderRadius={35}
              borderWidth={1}
              p={5}
            >
              <WaterIcon width={30} height={30} />
            </Box>
          </Stack>
          <Form onSubmit={onSubmit} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

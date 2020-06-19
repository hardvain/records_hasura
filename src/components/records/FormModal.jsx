import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  Box,
  useColorMode,
  Divider,
  Stack,
} from '@chakra-ui/core';
import { useState } from 'react';
import { useStore } from 'src/store';
import Tasks from 'src/modules/Tasks';
import Glucose from 'src/modules/Glucose';
import Water from 'src/modules/Water';
import Task from 'src/assets/Task';
import Sugar from 'src/assets/Sugar';
import WaterIcon from 'src/assets/Water';
import Money from 'src/assets/Money';
export default () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [recordType, setRecordType] = useState('task');
  const { showFormPopup, toggleFormPopup } = useStore((state) => ({
    date: state.ui.date,
    showFormPopup: state.ui.showFormPopup,
    toggleFormPopup: state.toggleFormPopup,
  }));
  let Form;
  if (recordType === 'task') {
    Form = Tasks.Form;
  } else if (recordType === 'water') {
    Form = Water.Form;
  } else if (recordType === 'glucose') {
    Form = Glucose.Form;
  } else {
    Form = Tasks.Form;
  }
  return (
    <>
      <Modal
        borderRadius={5}
        isOpen={showFormPopup}
        onClose={toggleFormPopup}
        size={'2xl'}
      >
        <ModalOverlay />
        <ModalContent borderRadius={5} shadow={'md'}>
          <ModalHeader
            borderRadius={5}
            bg={colorMode === 'light' ? 'grey.300' : '#232626'}
          >
            Add new record
          </ModalHeader>
          <Box bg={colorMode === 'light' ? 'grey.300' : '#232626'}>
            <Divider />
          </Box>
          <ModalCloseButton />
          <ModalBody
            borderRadius={5}
            shadow={'md'}
            bg={colorMode === 'light' ? 'grey.300' : '#232626'}
          >
            <Stack isInline spacing={10}>
              <Box
                onClick={() => setRecordType('task')}
                cursor={'pointer'}
                mr={2}
                borderRadius={35}
                borderWidth={1}
                p={5}
              >
                <Task width={30} height={30} />
              </Box>
              <Box
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
            <Form />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

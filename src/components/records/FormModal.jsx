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
} from '@chakra-ui/core';
import { useStore } from 'src/store';
import Tasks from 'src/modules/Tasks';
import Water from 'src/modules/Water';
export default () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { recordType, showFormPopup, toggleFormPopup } = useStore((state) => ({
    date: state.ui.date,
    showFormPopup: state.ui.showFormPopup,
    recordType: state.ui.recordType,
    toggleFormPopup: state.toggleFormPopup,
  }));
  let Form;
  if (recordType === 'task') {
    Form = Tasks.Form;
  } else if (recordType === 'water') {
    Form = Water.Form;
  } else {
    Form = Box;
  }
  return (
    <>
      <Modal
        borderRadius={5}
        isOpen={showFormPopup}
        onClose={toggleFormPopup}
        size={'6xl'}
      >
        <ModalOverlay />
        <ModalContent borderRadius={5} shadow={'md'}>
          <ModalHeader
            borderRadius={5}
            bg={colorMode === 'light' ? 'grey.300' : '#3e4242'}
          >
            Add new record
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            borderRadius={5}
            shadow={'md'}
            bg={colorMode === 'light' ? 'grey.300' : '#3e4242'}
          >
            <Form />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

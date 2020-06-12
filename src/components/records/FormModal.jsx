import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
} from '@chakra-ui/core';
import { useStore } from 'src/store';
import RecordForm from './form';
export default () => {
  const { date, showFormPopup, toggleFormPopup } = useStore((state) => ({
    date: state.ui.date,
    showFormPopup: state.ui.showFormPopup,
    toggleFormPopup: state.toggleFormPopup,
  }));
  return (
    <>
      <Modal isOpen={showFormPopup} onClose={toggleFormPopup} size={"6xl"}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Add new record</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RecordForm />
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  );
};

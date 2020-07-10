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
  SimpleGrid,
} from '@chakra-ui/core';
import { useState } from 'react';

import { useStore } from 'src/store';
import Tasks from 'src/modules/Tasks';
import Food from 'src/modules/Food';
import Glucose from 'src/modules/Glucose';
import Thoughts from 'src/modules/Thoughts';
import Notes from 'src/modules/Notes';
import Categories from 'src/modules/Categories';
import Water from 'src/modules/Water';
import Snippets from 'src/modules/Snippets';
import People from 'src/modules/People';
import Inbox from 'src/modules/Inbox';
import Objectives from 'src/modules/Objectives';
import Projects from 'src/modules/Projects';
import Dishes from 'src/modules/Dishes';
import Teams from 'src/modules/Teams';
import Transactions from 'src/modules/Transactions';

export default () => {
  const [addAnother, setAddAnother] = useState(false);
  const { colorMode } = useColorMode();
  const {
    showFormPopup,
    toggleFormPopup,
    recordType,
    setRecordType,
    newFormContext,
    setNewFormContext,
  } = useStore((state) => ({
    date: state.ui.date,
    newFormContext: state.ui.newFormContext,
    recordType: state.ui.recordType,
    setRecordType: state.setRecordType,
    showFormPopup: state.ui.showFormPopup,
    toggleFormPopup: state.toggleFormPopup,
    setNewFormContext: state.setNewFormContext,
  }));
  const onSubmit = () => {
    toggleFormPopup();
    setNewFormContext();
  };
  const formMap = {
    inbox: Inbox,
    tasks: Tasks,
    glucose: Glucose,
    water: Water,
    transactions: Transactions,
    dishes: Dishes,
    projects: Projects,
    food: Food,
    teams: Teams,
    people: People,
    categories: Categories,
    snippets: Snippets,
    thoughts: Thoughts,
    notes: Notes,
    objectives: Objectives,
  };
  const Form = formMap[recordType]['Form'] || <div />;
  return (
    <Modal
      borderRadius={5}
      isOpen={showFormPopup}
      onClose={() => toggleFormPopup()}
      size={'6xl'}
      shadow={'lg'}
    >
      <ModalOverlay />
      <ModalContent
        borderRadius={5}
        shadow={'lg'}
        bg={colorMode === 'light' ? 'white' : '#333'}
      >
        <ModalHeader
          borderRadius={10}
          bg={colorMode === 'light' ? 'white' : '#333'}
        >
          Add new record
        </ModalHeader>
        <Box bg={colorMode === 'light' ? 'white' : '#333'}>
          <Divider />
        </Box>
        <ModalCloseButton />
        <ModalBody
          borderRadius={10}
          shadow={'md'}
          bg={colorMode === 'light' ? 'white' : '#333'}
        >
          <Form onSubmitCallback={onSubmit} model={newFormContext} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

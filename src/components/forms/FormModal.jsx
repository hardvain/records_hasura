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
} from '@chakra-ui/core';
import { useState } from 'react';
import { IoIosPeople } from 'react-icons/io';
import {
  GiSugarCane,
  GiWaterDrop,
  GiMoneyStack,
  GiFruitBowl,
  GiBrain,
} from 'react-icons/gi';
import { AiOutlineAppstore } from 'react-icons/ai';
import { FaTasks, FaPizzaSlice } from 'react-icons/fa';
import { GoProject } from 'react-icons/go';
import { FiUsers, FiInbox } from 'react-icons/fi';
import { TiMessages } from 'react-icons/ti';
import { useStore } from 'src/store';
import Tasks from 'src/modules/Tasks';
import Food from 'src/modules/Food';
import Glucose from 'src/modules/Glucose';
import Thoughts from 'src/modules/Thoughts';
import Categories from 'src/modules/Categories';
import Water from 'src/modules/Water';
import Snippets from 'src/modules/Snippets';
import People from 'src/modules/People';
import Inbox from 'src/modules/Inbox';
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
          <Stack isInline spacing={10}>
            <Box
              borderColor={recordType === 'thoughts' ? 'brand.500' : ''}
              bg={recordType === 'thoughts' ? 'brand.100' : 'none'}
              onClick={() => setRecordType('thoughts')}
              cursor={'pointer'}
              mr={2}
              borderRadius={35}
              borderWidth={recordType === 'thoughts' ? 2 : 1}
              p={5}
            >
              <Box as={TiMessages} w={30} h={30} />
            </Box>
            <Box
              borderColor={recordType === 'inbox' ? 'brand.500' : ''}
              bg={recordType === 'inbox' ? 'brand.100' : 'none'}
              onClick={() => setRecordType('inbox')}
              cursor={'pointer'}
              mr={2}
              borderRadius={35}
              borderWidth={recordType === 'inbox' ? 2 : 1}
              p={5}
            >
              <Box as={FiInbox} w={30} h={30} />
            </Box>
            <Box
              borderColor={recordType === 'tasks' ? 'brand.500' : ''}
              bg={recordType === 'tasks' ? 'brand.100' : 'none'}
              onClick={() => setRecordType('tasks')}
              cursor={'pointer'}
              mr={2}
              borderRadius={35}
              borderWidth={recordType === 'task' ? 2 : 1}
              p={5}
            >
              <Box as={FaTasks} w={30} h={30} />
            </Box>
            <Box
              borderColor={recordType === 'transactions' ? 'brand.500' : ''}
              bg={recordType === 'transactions' ? 'brand.100' : 'none'}
              onClick={() => setRecordType('transactions')}
              cursor={'pointer'}
              mr={2}
              borderRadius={35}
              borderWidth={1}
              p={5}
            >
              <Box as={GiMoneyStack} w={30} h={30} />
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
              <Box as={GiSugarCane} w={30} h={30} />
            </Box>
            <Box
              borderColor={recordType === 'food' ? 'brand.500' : ''}
              bg={recordType === 'food' ? 'brand.100' : 'none'}
              onClick={() => setRecordType('food')}
              cursor={'pointer'}
              mr={2}
              borderRadius={35}
              borderWidth={1}
              p={5}
            >
              <Box as={GiFruitBowl} w={30} h={30} />
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
              <Box as={GiWaterDrop} w={30} h={30} />
            </Box>
            <Box
              borderColor={recordType === 'snippets' ? 'brand.500' : ''}
              bg={recordType === 'snippets' ? 'brand.100' : 'none'}
              onClick={() => setRecordType('snippets')}
              cursor={'pointer'}
              mr={2}
              borderRadius={35}
              borderWidth={1}
              p={5}
            >
              <Box as={GiBrain} w={30} h={30} />
            </Box>
            <Box
              borderColor={recordType === 'dishes' ? 'brand.500' : ''}
              bg={recordType === 'dishes' ? 'brand.100' : 'none'}
              onClick={() => setRecordType('dishes')}
              cursor={'pointer'}
              mr={2}
              borderRadius={35}
              borderWidth={1}
              p={5}
            >
              <Box as={FaPizzaSlice} w={30} h={30} />
            </Box>
            <Box
              borderColor={recordType === 'people' ? 'brand.500' : ''}
              bg={recordType === 'people' ? 'brand.100' : 'none'}
              onClick={() => setRecordType('people')}
              cursor={'pointer'}
              mr={2}
              borderRadius={35}
              borderWidth={1}
              p={5}
            >
              <Box as={IoIosPeople} w={30} h={30} />
            </Box>
            <Box
              borderColor={recordType === 'categories' ? 'brand.500' : ''}
              bg={recordType === 'categories' ? 'brand.100' : 'none'}
              onClick={() => setRecordType('categories')}
              cursor={'pointer'}
              mr={2}
              borderRadius={45}
              borderWidth={1}
              p={5}
            >
              <Box as={AiOutlineAppstore} w={30} h={30} />
            </Box>
            <Box
              borderColor={recordType === 'projects' ? 'brand.500' : ''}
              bg={recordType === 'projects' ? 'brand.100' : 'none'}
              onClick={() => setRecordType('projects')}
              cursor={'pointer'}
              mr={2}
              borderRadius={45}
              borderWidth={1}
              p={5}
            >
              <Box as={GoProject} w={30} h={30} />
            </Box>
            <Box
              borderColor={recordType === 'teams' ? 'brand.500' : ''}
              bg={recordType === 'teams' ? 'brand.100' : 'none'}
              onClick={() => setRecordType('teams')}
              cursor={'pointer'}
              mr={2}
              borderRadius={45}
              borderWidth={1}
              p={5}
            >
              <Box as={FiUsers} w={30} h={30} />
            </Box>
          </Stack>
          <Form onSubmitCallback={onSubmit} model={newFormContext} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

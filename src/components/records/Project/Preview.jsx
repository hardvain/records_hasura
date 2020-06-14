import {
  Badge,
  Box,
  useToast,
  Flex,
  Stack,
  Text,
  IconButton,
} from '@chakra-ui/core';
import moment from 'moment';
import { useStore } from 'src/store';
import { GoProject } from 'react-icons/go';
export default ({ project, onItemSelect }) => {
  const { updateProject, deleteProject } = useStore((state) => ({
    updateProject: state.updateProject,
    deleteProject: state.deleteProject,
  }));

  const toast = useToast();
  const onDateChange = async (value) => {
    updateProject(
      { ...project, timestamp: moment(value).toISOString() },
      toast
    );
  };

  return (
    <Flex alignItems={'center'}>
      <Box as={GoProject} color={'white'} alignSelf={'center'} mr={3} />
      <Stack flexGrow={1}>
        <Text>{project.name}</Text>
      </Stack>
      <IconButton
        mr={2}
        onClick={() => onItemSelect(project)}
        variant={'default'}
        icon={'edit'}
        size={'sm'}
      />
      <IconButton
        variant={'default'}
        icon={'delete'}
        size={'sm'}
        onClick={() => deleteProject(project.id, toast)}
      />
    </Flex>
  );
};

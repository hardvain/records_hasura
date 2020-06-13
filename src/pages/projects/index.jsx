import {
  Box,
  Button,
  Divider,
  Flex,
  SimpleGrid,
  Stack,
  useToast,
} from '@chakra-ui/core';
import { useEffect, useState } from 'react';
import Card from 'src/components/Card';
import { useStore } from 'src/store';
import Form from 'src/components/records/Project/Form';
import Preview from 'src/components/records/Project/Preview';
export default () => {
  const toast = useToast();
  const [project, setProject] = useState({});
  const [projects, setProjects] = useState([]);
  const {
    date,
    setColors,
    getProjects,
    updateProject,
    createProject,
  } = useStore((state) => ({
    date: state.ui.date,
    setColors: state.setColors,
    getProjects: state.getProjects,
    updateProject: state.updateProject,
    createProject: state.createProject,
  }));

  useEffect(() => {
    getProjects().then((r) => setProjects(r.items));
  }, []);

  const saveProject = async () => {
    if (project.id) {
      await updateProject(project, toast);
    } else {
      await createProject(project, toast);
    }
    getProjects().then((r) => setProjects(r.items));
  };

  useEffect(() => {
    setColors({ primary: 'blue', secondary: 'cyan' });
  }, []);
  return (
    <Box py={30}>
      <Card p={3}>
        <Form project={project} setProject={setProject} />
        <Divider />
        <Flex>
          <Box flexGrow={1}></Box>
          <Button variantColor={'deeporange'} size={'sm'} onClick={saveProject}>
            {project.id ? 'Update' : 'Save'}
          </Button>
        </Flex>
      </Card>
      <Box mt={10}>
        {projects.map((project) => (
          <Card p={3} mb={5}>
            <Preview
              key={project.id}
              project={project}
              onItemSelect={setProject}
            />
          </Card>
        ))}
      </Box>
    </Box>
  );
};

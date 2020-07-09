import Modal from 'src/components/core/modal';
import Teams from 'src/modules/Teams';
import {
  Box,
  Skeleton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  useColorMode,
  Heading,
  Button,
} from '@chakra-ui/core';
import moment from 'moment';
import React, { useState } from 'react';
import useQuery from 'src/hooks/graphql/useQuery';
import Projects from 'src/modules/Projects';
import { useRouter } from 'next/router';
import Card from 'src/components/core/card';
import Tasks from 'src/modules/Tasks';
import { useStore } from 'src/store';
export default () => {
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();
  const { colorMode } = useColorMode();
  const [show, setShow] = useState(false);

  const { toggleFormPopup, setNewFormContext } = useStore((state) => ({
    toggleFormPopup: state.toggleFormPopup,
    setNewFormContext: state.setNewFormContext,
  }));
  const { id } = router.query;
  const [team] = useQuery({
    name: 'teams',
    where: { id: { _eq: id } },
    fields: ['id', 'name', 'description'],
  });
  const addProject = () => {
    setNewFormContext({ team_id: team[0]?.id });
    toggleFormPopup('projects');
  };
  return (
    <Stack>
      {team ? (
        <Stack m={0}>
          <Tabs isFitted variantColor={'brand'}>
            <Card
              id={'card'}
              mt={0}
              borderLeftWidth={0}
              borderRadius={0}
              pb={0}
              mb={0}
            >
              <Stack isInline spacing={10} p={5}>
                <Box p={5} pb={10} flexGrow={1}>
                  <Heading size={'md'}>{team[0].name}</Heading>
                </Box>
                <Button
                  size={'sm'}
                  variantColor={'brand'}
                  variant={'ghost'}
                  onClick={() => setShow(!show)}
                >
                  Edit
                </Button>
              </Stack>
              <Box p={5}>
                <Modal
                  title={team[0].name}
                  show={show}
                  onClose={() => setShow(!show)}
                  href={`/teams/[id]`}
                  as={`/teams/${team[0]?.id}`}
                >
                  <Teams.Form model={team[0]} showList={false} />
                </Modal>
              </Box>
              <TabList>
                <Tab>Projects</Tab>
                <Tab>Objectives</Tab>
                <Tab>Timeline</Tab>
              </TabList>
            </Card>

            <TabPanels>
              <TabPanel>
                <Stack m={5} isInline>
                  <Box flexGrow={1} />
                  <Button
                    variant={'solid'}
                    variantColor={'brand'}
                    leftIcon={'small-add'}
                    size={'sm'}
                    onClick={addProject}
                  >
                    Add Project
                  </Button>
                </Stack>
                <Card m={5} borderRadius={5} shadow={'none'}>
                  <Projects.List
                    where={{
                      _and: [{ team_id: { _eq: team[0].id } }],
                    }}
                  />
                </Card>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      ) : (
        <Skeleton />
      )}
    </Stack>
  );
};

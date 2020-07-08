import {
  Button,
  Collapse,
  IconButton,
  Stack,
  Text,
  Tooltip,
  Box,
  useColorMode,
  Divider,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import React, { useState } from 'react';
import useQuery from 'src/hooks/graphql/useQuery';
import { useStore } from 'src/store';
import Skeleton from 'src/components/core/Skeleton';

const MenuItem = ({ id, name, resource, children = [] }) => {
  const [open, setOpen] = useState(false);
  const { toggleFormPopup, setNewFormContext } = useStore((state) => ({
    toggleFormPopup: state.toggleFormPopup,
    setNewFormContext: state.setNewFormContext,
  }));
  return (
    <Box
      minHeight={30}
      cursor={'pointer'}
      borderRadius={0}
      borderRightColor={'brand.500'}
      mb={1}
      justifyContent={'flex-start'}
      variant={'ghost'}
    >
      <Stack>
        <Stack isInline alignItems={'center'}>
          <Box>
            <IconButton
              visibility={
                id === 'all' || resource === 'projects' ? 'hidden' : 'visible'
              }
              size={'sm'}
              variant={'link'}
              icon={open ? 'chevron-down' : 'chevron-right'}
              onClick={() => setOpen(!open)}
            />
          </Box>
          <Box>
            {id === 'all' ? (
              <NextLink href={`/${resource}/all`}>
                <Text ml={0} fontSize={14} fontWeight={500}>
                  {name}
                </Text>
              </NextLink>
            ) : (
              <NextLink href={`/${resource}/[id]`} as={`/${resource}/${id}`}>
                <Text ml={0} fontSize={14} fontWeight={500}>
                  {name}
                </Text>
              </NextLink>
            )}
          </Box>
        </Stack>
        <Collapse isOpen={open}>
          <Stack pl={2}>
            {children.map((child, index) => (
              <MenuItem
                key={child.id}
                id={child.id}
                name={child.name}
                resource={'projects'}
              />
            ))}
            {id !== 'all' && (
              <Box px={5} mb={2} w={245}>
                <Button
                  variant={'link'}
                  size={'xs'}
                  onClick={() => {
                    setNewFormContext({ team_id: id });
                    toggleFormPopup('projects');
                  }}
                  leftIcon={'small-add'}
                >
                  Add Project
                </Button>
              </Box>
            )}
          </Stack>
        </Collapse>
      </Stack>
    </Box>
  );
};

export default () => {
  const { colorMode } = useColorMode();

  const [data, loading] = useQuery({
    name: 'teams',
    fields: ['name', 'id', 'ref_projects{id,name}'],
  });
  const { toggleFormPopup, showTeambar } = useStore((state) => ({
    toggleFormPopup: state.toggleFormPopup,
    showTeambar: state.ui.showTeambar,
  }));
  const teams = data || [];
  if (loading) {
    return (
      <Box
        height={'100vh'}
        w={245}
        pt={2}
        bg={colorMode === 'light' ? 'white' : '#333'}
        borderRightWidth={1}
        position={'fixed'}
      >
        <Box w={250} px={5}>
          <Skeleton h={10} my={3} count={10} />
        </Box>
      </Box>
    );
  }
  return (
    <Box
      height={'100vh'}
      w={245}
      pt={2}
      bg={colorMode === 'light' ? 'white' : '#333'}
      borderRightWidth={1}
      position={'fixed'}
      display={[showTeambar ? 'block' : 'none', 'block']}
    >
      {teams.map((t) => (
        <MenuItem
          key={t.id}
          name={t.name}
          id={t.id}
          children={t.ref_projects}
          resource={'teams'}
        />
      ))}
      <Divider />
      <MenuItem
        name={'All Teams'}
        id={'all'}
        children={[]}
        resource={'teams'}
      />
      <Divider />
      <Box px={5} w={245}>
        <Button
          variant={'link'}
          size={'xs'}
          onClick={() => toggleFormPopup('teams')}
          leftIcon={'small-add'}
        >
          Add Team
        </Button>
      </Box>
    </Box>
  );
};

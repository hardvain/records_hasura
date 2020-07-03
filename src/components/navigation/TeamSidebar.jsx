import {
  Button,
  Collapse,
  IconButton,
  Stack,
  Text,
  Tooltip,
  Box,
  useColorMode,
  Skeleton,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import React, { useState } from 'react';
import useQuery from 'src/hooks/graphql/useQuery';
import { useStore } from 'src/store';

const MenuItem = ({ id, name, resource, children = [] }) => {
  const { colorMode } = useColorMode();
  const showSidebar = useStore((state) => state.ui.showSidebar);
  const [open, setOpen] = useState(false);

  return (
    <Box
      minHeight={30}
      w={showSidebar ? '100%' : 45}
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
              visibility={children.length > 0 ? '' : 'hidden'}
              size={'sm'}
              variant={'link'}
              icon={open ? 'chevron-down' : 'chevron-right'}
              onClick={() => setOpen(!open)}
            />
          </Box>
          <NextLink href={`/${resource}/[id]`} as={`/${resource}/${id}`}>
            <Text ml={0} fontSize={14}>
              {name}
            </Text>
          </NextLink>
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
  const { toggleFormPopup } = useStore((state) => ({
    toggleFormPopup: state.toggleFormPopup,
  }));
  const teams = data || [];
  if (loading) {
    return (
      <Box w={250} p={2}>
        <Skeleton h={5} my={3} />
        <Skeleton h={5} my={3} />
        <Skeleton h={5} my={3} />
        <Skeleton h={5} my={3} />
        <Skeleton h={5} my={3} />
        <Skeleton h={5} my={3} />
        <Skeleton h={5} my={3} />
        <Skeleton h={5} my={3} />
      </Box>
    );
  }
  return teams.length > 0 ? (
    <Box w={245} pt={2} bg={colorMode ==='light' ? 'white':'#333'} borderRightWidth={1}>
      {teams.map((t) => (
        <MenuItem
          key={t.id}
          name={t.name}
          id={t.id}
          children={t.ref_projects}
          resource={'teams'}
        />
      ))}
      <MenuItem
        name={'All Teams'}
        id={'all'}
        children={[]}
        resource={'teams'}
      />
    </Box>
  ) : (
    <Box p={5} w={245}>
      <Button
        variant={'solid'}
        variantColor={'brand'}
        size={'xs'}
        onClick={() => toggleFormPopup('teams')}
        leftIcon={'small-add'}
      >
        Add New Team
      </Button>
    </Box>
  );
};

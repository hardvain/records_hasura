import {
  Button,
  Collapse,
  IconButton,
  Stack,
  Text,
  Tooltip,
  Box,
  useColorMode,
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
      w={showSidebar ? '100%' : 45}
      cursor={'pointer'}
      borderRadius={0}
      borderRightColor={'brand.500'}
      mb={1}
      justifyContent={'flex-start'}
      variant={'ghost'}
      color={colorMode === 'light' ? 'gray.700' : 'white'}
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
  const [data] = useQuery({
    name: 'teams',
    fields: ['name', 'id', 'ref_projects{id,name}'],
  });
  const showSidebar = useStore((state) => state.ui.showSidebar);

  const teams = data || [];
  return (
    <Box borderRightWidth={1} w={showSidebar ? 245 : 45} pt={2}>
      {teams.map((t) => (
        <MenuItem
          key={t.id}
          name={t.name}
          id={t.id}
          children={t.ref_projects}
          resource={'teams'}
        />
      ))}
    </Box>
  );
};

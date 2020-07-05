import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  Stack,
} from '@chakra-ui/core';
import React from 'react';
import Delete from 'src/containers/actions/delete';
export default ({ id }) => {
  return (
    <Stack isInline spacing={10} justifyContent={'flex-end'}>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon="chevron-down"
          size={'sm'}
          variant={'ghost'}
        >
          Status
        </MenuButton>
        <MenuList>
          <MenuItem>To Do</MenuItem>
          <MenuItem>In Progress</MenuItem>
          <MenuItem>Completed</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon="chevron-down"
          size={'sm'}
          variant={'ghost'}
        >
          Priority
        </MenuButton>
        <MenuList>
          <MenuItem>Very High</MenuItem>
          <MenuItem>High</MenuItem>
          <MenuItem>Medium</MenuItem>
          <MenuItem>Low</MenuItem>
          <MenuItem>Very Low</MenuItem>
        </MenuList>
      </Menu>
      <Delete resource={'tasks'} id={id} />
    </Stack>
  );
};

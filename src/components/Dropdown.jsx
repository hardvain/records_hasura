import { useState } from 'react';
import { Box, Button, MenuList, MenuItem, Menu, MenuButton } from '@chakra-ui/core';

export default ({ title }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Box>
      <Menu>
        <MenuButton as={Button} rightIcon="chevron-down">
          Actions
        </MenuButton>
        <MenuList zIndex={1000}>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem as="a" href="#">
            Attend a Workshop
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

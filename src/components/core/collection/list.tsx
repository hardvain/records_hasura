import {
  List,
  ListItem,
  Box,
  Stack,
  Collapse,
  IconButton,
  PseudoBox,
  useColorMode,
} from '@chakra-ui/core';
import React, { useState } from 'react';

const Item = ({ item, listProps }) => {
  const [showDetails, setShowDetails] = useState(false);
  const hasDetails = listProps.hasDetails(item);
  const expandAll = listProps.expandAll;
  return (
    <ListItem p={2} key={item.id} borderRadius={3}>
      <Stack spacing={0}>
        <Stack isInline alignItems={'center'}>
          <Box w={25}>
            {(hasDetails || expandAll) && (
              <IconButton
                aria-label={'show sub tasks'}
                variant={'ghost'}
                size={'xs'}
                icon={
                  showDetails || expandAll ? 'chevron-down' : 'chevron-right'
                }
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setShowDetails(!showDetails);
                }}
              />
            )}
          </Box>
          {listProps.listItem(item)}
        </Stack>
        <Collapse isOpen={showDetails || expandAll}>
          {(showDetails || expandAll) && (
            <Box py={2}>{listProps.details(item)}</Box>
          )}
        </Collapse>
      </Stack>
    </ListItem>
  );
};

export default ({ data, listProps }) => {
  const { colorMode } = useColorMode();

  return (
    <List>
      {data.map((item) => (
        <PseudoBox
          bg={colorMode === 'light' ? 'white' : '#333'}
          key={item.id}
          borderWidth={1}
          _notFirst={{ borderTopWidth: 0 }}
        >
          <Item item={item} listProps={listProps} />
        </PseudoBox>
      ))}
    </List>
  );
};

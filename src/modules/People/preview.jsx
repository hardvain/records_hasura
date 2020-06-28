import { Box, IconButton, Stack, Collapse, Divider, Text } from '@chakra-ui/core';
import React, { useState } from 'react';
import moment from 'moment';
import useMutation from 'src/graphql/hooks/useMutation';
import Form from './form';
import ListItem from 'src/components/collection/List/ListItem';
export default ({ record }) => {
  const [show, setShow] = useState(false);
  const mutate = useMutation({
    resource: 'people',
    operation: 'delete',
  });
  const handleToggle = () => setShow(!show);
  return (
    <ListItem expand={show}>
      <Stack isInline textAlign={'center'} alignItems={'center'} pr={4}>
        <IconButton
          mr={0}
          variant={'ghost'}
          icon={show ? 'chevron-down' : 'chevron-right'}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleToggle();
          }}
        />
        <Text>{record.name}</Text>
        <Box flexGrow={1}/>
        <IconButton
          ml={2}
          size={'sm'}
          icon={'delete'}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            mutate({ variables: { where: { id: { _eq: record.id } } } });
          }}
        />
      </Stack>
      <Collapse isOpen={show}>
        <Divider />
        <Form model={record} />
      </Collapse>
    </ListItem>
  );
};

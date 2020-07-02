import {
  Box,
  IconButton,
  Stack,
  Collapse,
  Divider,
  Text,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import moment from 'moment';
import useMutation from 'src/hooks/graphql/useMutation';
import Delete from 'src/containers/actions/delete';
import Form from './form';
import ListItem from 'src/containers/collection/list/ListItem';
export default ({ record }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <ListItem expand={show}>
      <Stack isInline textAlign={'center'} alignItems={'center'} pr={4}>
        <IconButton
          mr={0}
          size={'xs'}
          variant={'ghost'}
          icon={show ? 'chevron-down' : 'chevron-right'}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleToggle();
          }}
        />
        <Text>{record.name}</Text>
        <Box flexGrow={1} />
        <Delete resource={'thoughts'} id={record.id} />
      </Stack>
      <Collapse isOpen={show}>
        <Divider />
        <Form model={record} />
      </Collapse>
    </ListItem>
  );
};

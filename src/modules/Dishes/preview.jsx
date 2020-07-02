import {
  Box,
  IconButton,
  Stack,
  Collapse,
  Text,
  Divider,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import Delete from 'src/containers/actions/delete';
import useMutation from 'src/hooks/graphql/useMutation';
import Form from './form';
import ListItem from 'src/containers/collection/list/ListItem';

export default ({ record }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <ListItem>
      <Stack isInline textAlign={'center'} alignItems={'baseline'} pr={4}>
        <IconButton
          mr={0}
          variant={'ghost'}
          size={'xs'}
          icon={show ? 'chevron-down' : 'chevron-right'}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleToggle();
          }}
        />
        <Stack isInline spacing={10} w={'100%'} alignItems={'baseline'}>
          <Box flexGrow={1}>{record.name}</Box>
          <Stack isInline>
            <Text fontSize={12}>Carbs:</Text>
            <Text fontSize={12}>{record.carbs}</Text>
            <Divider orientation={'vertical'} />
            <Text fontSize={12}>Fat:</Text>
            <Text fontSize={12}>{record.fat}</Text>
            <Divider orientation={'vertical'} />
            <Text fontSize={12}>Protein:</Text>
            <Text fontSize={12}>{record.protein}</Text>
          </Stack>
        </Stack>

        <Delete resource={'dishes'} id={record.id} />
      </Stack>
      <Collapse isOpen={show}>
        <Form model={record} />
      </Collapse>
    </ListItem>
  );
};

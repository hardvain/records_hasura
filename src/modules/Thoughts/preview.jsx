import {
  Box,
  IconButton,
  Stack,
  Collapse,
  Divider,
  Text,
} from '@chakra-ui/core';
import Link from 'next/link';
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
      <Stack isInline alignItems={'center'} pr={4}>
        <Box flexGrow={1}>
          <Link href={'/thoughts/[id]'} as={`/thoughts/${record.id}`}>
            <Text>{record.name}</Text>
          </Link>
        </Box>
        <Delete resource={'thoughts'} id={record.id} />
      </Stack>
    </ListItem>
  );
};

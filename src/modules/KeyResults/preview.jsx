import {
  Box,
  IconButton,
  Stack,
  Collapse,
  Divider,
  Text,
  Progress,
  Tooltip,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import moment from 'moment';
import Delete from 'src/containers/actions/delete';
import useMutation from 'src/hooks/graphql/useMutation';
import Form from './form';
import ListItem from 'src/containers/collection/list/ListItem';
export default ({ record }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <ListItem>
      <Stack isInline textAlign={'center'} alignItems={'center'} pr={4}>
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
        <Text>{record.name}</Text>
        <Box flexGrow={1} />
        <Tooltip label={`${record?.progress} %`}>
          <Box>
            <Progress
              h={3}
              w={200}
              color={
                record?.progress > 85
                  ? 'green'
                  : record?.progress < 25
                  ? 'red'
                  : 'yellow'
              }
              value={record?.progress}
              borderRadius={2}
            />
          </Box>
        </Tooltip>
        <Delete resource={'key_results'} id={record.id} />
      </Stack>
      <Collapse isOpen={show}>
        <Divider />
        <Form model={record} />
      </Collapse>
    </ListItem>
  );
};
